import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient()

  export async function update(cod: number, nome: any, descricao: any) {
    return await prisma.produtos.update({
        where: { cod },
        data: {cod, nome, descricao}
    })
}