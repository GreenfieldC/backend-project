import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(request) {
  try {
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return new Response("Recipe ID is required", { status: 400 });
    }

    const deletedRecipe = await prisma.recipe.delete({
      where: { id: id },
    });

    return new Response(JSON.stringify(deletedRecipe), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error deleting recipe:", error);
    return new Response("Failed to delete recipe", { status: 500 });
  }
}
