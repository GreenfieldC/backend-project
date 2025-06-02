import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  console.log("Received request to add a recipe", req.method);

  const data = await req.json();
  const recipe = await prisma.recipe.create({
    data: {
      name: data.name,
      ingredients: {
        create: data.ingredients.map((ingredient) => ({
          name: ingredient.name,
          amount: ingredient.amount,
          units: ingredient.units,
        })),
      },
      steps: {
        create: data.steps.map((step, idx) => ({
          description: typeof step === "string" ? step : step.description,
          order: idx + 1,
        })),
      },
    },
    include: {
      ingredients: true,
      steps: true,
    },
  });
  return Response.json(recipe);
}
