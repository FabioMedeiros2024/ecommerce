import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient()

export async function deleteX(cod: number) {
    return await prisma.produtos.delete({
        where: { cod: cod }
    })
}