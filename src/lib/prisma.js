import 'dotenv/config';
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client.js";

// Lazily initialise the Prisma client so that DATABASE_URL is not parsed at
// module load time. Railway injects variable references (e.g. ${{ MySQL.DATABASE_URL }})
// at runtime, meaning the value is empty during the initial module evaluation.
// The client is created on first access and then cached for all subsequent calls.

let _prisma = null;

function getPrismaClient() {
    if (_prisma) return _prisma;

    const rawUrl = process.env.DATABASE_URL;
    if (!rawUrl) {
        throw new Error(
            '[prisma] DATABASE_URL is not set. ' +
            'Make sure the environment variable is available at runtime.'
        );
    }

    let databaseUrl;
    try {
        databaseUrl = new URL(rawUrl);
    } catch (err) {
        throw new Error(`[prisma] Failed to parse DATABASE_URL: ${err.message}`);
    }

    console.log(`[prisma] Connecting to database at ${databaseUrl.hostname}:${databaseUrl.port || 3306}`);

    const adapter = new PrismaMariaDb({
        host: databaseUrl.hostname,
        port: parseInt(databaseUrl.port) || 3306,
        user: decodeURIComponent(databaseUrl.username),
        password: decodeURIComponent(databaseUrl.password),
        database: databaseUrl.pathname.slice(1),
        connectionLimit: 5
    });

    _prisma = new PrismaClient({ adapter });
    return _prisma;
}

// Export a Proxy so that all existing `prisma.<model>.*` call sites continue to
// work without any changes — property accesses are simply forwarded to the
// lazily-created client instance.
export const prisma = new Proxy(
    {},
    {
        get(_target, prop) {
            return getPrismaClient()[prop];
        },
    }
);
