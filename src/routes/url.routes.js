import express from "express";
import { db } from "../config/db.js";
import { urlTable } from "../models/url.schema.js";
import { eq } from "drizzle-orm";
import { shortenSchema } from "../../validation.js";
import { nanoid } from "nanoid";
import { userAuthentication } from "../middleware/auth.middleware.js";

let router = express.Router();


// create url

router.post("/post/url",userAuthentication, async(req, res)=>{
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

export default router;