import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient()

async function create(cod, nome, descricao)  {
    let produtos: Prisma.produtosCreateInput;
  
    // Check if posts should be included in the query
    produtos = {
        cod: cod,
        nome: nome,
        descricao: descricao
      }
    // Pass 'user' object into query
    const createVisitantes = await prisma.produtos.create({ data: produtos })
}

export{create}