import * as dotenv from 'dotenv';
import { PrismaClient } from "@prisma/client";

dotenv.config();

// Prisma client to be used from different actions.
export const prisma = new PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL
        }
    }
});

