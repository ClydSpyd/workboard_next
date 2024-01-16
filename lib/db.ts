import { PrismaClient } from '@prisma/client';


declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

// globalThis excluded from hot reaload
// in dev, with hot reload, multiople instances os prismaClient would be created
if(process.env.NODE_ENV !== "production") globalThis.prisma = db;