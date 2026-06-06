

import { pgTable, varchar, text, primaryKey, uuid, timestamp } from "drizzle-orm/pg-core";
import  {userTable} from "./user.schema.js";

export const urlTable = pgTable("url",{
    id : uuid().primaryKey().defaultRandom(),
    shortCode : varchar("s_code",{length : 50}).notNull().unique(),
    targetUrl : text("target_url").notNull(),

    userId : uuid().references(()=> userTable.id).notNull(),

    createdAt : timestamp().defaultNow().notNull(),
    updatedAt : timestamp().$onUpdate(()=> new Date())
});