
import pg from "pg";
import { drizzle } from 'drizzle-orm/node-postgres';

const { Pool } = pg;

const pool = new Pool({
    connectionString: "postgres://postgres:parvesh@localhost:5432/bitly",
});

export const db = drizzle(pool);