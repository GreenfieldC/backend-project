import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function GET(req) {
  const data = await prisma.recipe.findMany({
    include: {
      ingredients: true,
      steps: true,
    },
  });
  return Response.json(data);
}
