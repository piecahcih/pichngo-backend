import 'dotenv/config';
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client.js";

// const adapter = new PrismaMariaDb({
//     host: process.env.DATABASE_HOST,
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD,
//     database: process.env.DATABASE_NAME,
//     connectionLimit: 5
// })

if (!process.env.DATABASE_URL) {
    console.error('[prisma] ERROR: DATABASE_URL is not set. Check that the ${{ mysql.DATABASE_URL }} variable reference is resolving correctly in your Railway service.');
    process.exit(1);
}

let databaseUrl;
try {
    databaseUrl = new URL(process.env.DATABASE_URL);
} catch (err) {
    console.error(`[prisma] ERROR: DATABASE_URL is set but could not be parsed as a valid URL: ${err.message}`);
    console.error(`[prisma] Raw value received: "${process.env.DATABASE_URL}"`);
    process.exit(1);
}

// Log the URL without the password for debugging
const safeUrl = `${databaseUrl.protocol}//${databaseUrl.username}:***@${databaseUrl.hostname}:${databaseUrl.port}${databaseUrl.pathname}`;
console.log(`[prisma] Connecting to database: ${safeUrl}`);

const adapter = new PrismaMariaDb({
    host: databaseUrl.hostname,
    port: parseInt(databaseUrl.port) || 3306,
    user: decodeURIComponent(databaseUrl.username),
    password: decodeURIComponent(databaseUrl.password),
    database: databaseUrl.pathname.slice(1),
    connectionLimit: 5
})

const prisma = new PrismaClient({adapter})

export { prisma }
