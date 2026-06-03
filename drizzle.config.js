
import { defineConfig } from 'drizzle-kit';


export default defineConfig({
    out: './drizzle',
    schema: './src/models/user.schema.js',
    dialect: 'postgresql',
    dbCredentials: {
        url: "postgres://postgres:parvesh@localhost:5432/bitly",
    },
});