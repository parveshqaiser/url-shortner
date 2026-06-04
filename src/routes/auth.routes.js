
import express from "express";
import { db } from "../config/db.js";
import { userTable } from "../models/user.schema.js";
import { eq } from "drizzle-orm";
import {randomBytes} from "node:crypto"
import { signupValiadation } from "../../validation.js";


const router = express.Router();

router.post("/signup", async(req, res)=>{

    try {
        
        let validationResult = await signupValiadation.safeParseAsync(req.body);

        if (!validationResult.success) {
            return res.status(400).json({
                success: false,
                errors: validationResult.error.issues
            });
        }

        let {firstname, lastname, email, pwd} = validationResult.data;

        let [user] = await db.select().from(userTable).where(eq(userTable.email, email));

        if(user){
            return res.status(400).json({message : `User exist with the EMAIL : ${email}`, success : false});
        }


        let salt = randomBytes(256).toString("hex");

        let [insert] = await db.insert(userTable).values({
            firstname,
            lastname, 
            email, 
            pwd,
        }).returning();

        res.status(201).json({message : "User Inserted Successfull", success : true , data : insert})

    } catch (error) {
        console.error("erro in here ********** ", error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});


export default router;