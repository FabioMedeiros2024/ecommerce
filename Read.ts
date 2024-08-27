import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient()
var produtos: Prisma.produtosFindUniqueArgs

export async function read(cod: number) {
  return await prisma.produtos.findUnique({
    where: {
      cod: cod
    }
  })}