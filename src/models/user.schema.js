

import { pgTable, varchar, text, primaryKey, uuid, timestamp } from "drizzle-orm/pg-core";


export const userTable = pgTable("users", {
    id : uuid().primaryKey().defaultRandom(),
    firstname : varchar('first_name', {length:55}).notNull(),
    lastname : varchar('last_name',),
    email : varchar({length:50}).notNull().unique(),
    pwd : text(),
    createdAt : timestamp().defaultNow().notNull(),
    updatedAt : timestamp().$onUpdate(()=> new Date())
});


