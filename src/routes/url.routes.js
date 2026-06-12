import express from "express";
import { db } from "../config/db.js";
import { urlTable } from "../models/url.schema.js";
import { and, eq } from "drizzle-orm";
import { shortenSchema } from "../../validation.js";
import { nanoid } from "nanoid";
import { userAuthentication } from "../middleware/auth.middleware.js";

let router = express.Router();


// create url

router.post("/create/shorturl",userAuthentication, async(req, res)=>{
    try {
        let userId = req.user.id;
        let validationResult = await shortenSchema.safeParseAsync(req.body);

        if(!validationResult.success){
            return res.status(400).json({
                success: false,
                errors: validationResult.error.issues
            });
        }

        let {url, shortCode} = validationResult.data;

        let [insert] = await db.insert(urlTable).values({
            shortCode : shortCode || nanoid(6),
            targetUrl : url,
            userId : userId,
        }).returning();

        res.status(201).json({
            message : 'Short code generated',
            data : insert,
            success : true
        });


    } catch (error) {
        console.error("erro in here ********** ", error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});

// get all urls creatd by user
router.get("/allurls", userAuthentication, async(req, res)=>{

    try {
        let loggedInUser = req.user.id;
        
        let result = await db.select().from(urlTable).where(eq(urlTable.userId, loggedInUser))

        res.status(200).json({
            message : "all url fetched",
            success : true,
            data : result
        });
        
    } catch (error) {
        console.error("erro in here ********** ", error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});


// delete url based on id
router.delete("/del/:id",userAuthentication, async(req, res)=>{
    try {
        let id = req.params.id;
        let loggedInUser = req.user.id;

        let [delRes] =  await db.delete(urlTable).where(and(eq(urlTable.id, id),(eq(urlTable.userId, loggedInUser))));

        res.status(200).json({
            message : "Deleted Successfully",
            success : true,
        });

    } catch (error) {
        console.error("erro in here ********** ", error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});

router.get("/:codeid", async(req, res)=>{

    try {
        let code = req.params.codeid;


        let [result] = await db.select({targetUrl : urlTable.targetUrl}).from(urlTable).where(eq(urlTable.shortCode,code));

        if(!result){
            return res.status(404).json({
                message : "Invalid URL",
                success : false
            })
        }
        res.redirect(result.targetUrl);

    } catch (error) {
        console.error("erro in here ********** ", error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});


export default router;