
import {z} from "zod";

export let signupValiadation = z.object({
    firstname: z.string().trim().nonempty("Firstname is required"),
    lastname: z.string().trim().nonempty("Lastname is required"),
    email: z.string().trim().email("Invalid email"),
    pwd: z.string().trim().min(3, "Password must be at least 3 characters")
});


export let loginValidation = z.object({
    email : z.string().trim().email("Invalid email"),
    pwd: z.string().trim().nonempty("Passowrd Required")
});

export let shortenSchema = z.object({
    url : z.string().url(),
    shortCode : z.string().optional()
});