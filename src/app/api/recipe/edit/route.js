import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, name, ingredients, steps } = body;

    if (!id || !name || !ingredients || !steps) {
      return new Response("Missing required fields", { status: 400 });
    }

    const updatedRecipe = await prisma.recipe.update({
      where: { id: id },
      data: {
        name,
        ingredients: {
          deleteMany: {},
          create: ingredients.map((ingredient) => ({
            name: ingredient.name,
            amount: ingredient.amount,
            units: ingredient.units,
          })),
        },
        steps: {
          deleteMany: {},
          create: steps.map((step, idx) => ({
            description: typeof step === "string" ? step : step.description,
            order: idx + 1,
          })),
        },
      },
    });

    return new Response(JSON.stringify(updatedRecipe), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating recipe:", error);
    return new Response("Failed to update recipe", { status: 500 });
  }
}
