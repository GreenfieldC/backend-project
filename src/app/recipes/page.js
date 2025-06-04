"use client";
import RecipeForm from "@/components/RecipeForm";
import { useEffect, useState } from "react";
import RecipeCard from "@/components/RecipeCard";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [editRecipe, setEditRecipe] = useState(null);
  useEffect(() => {
    loadData();
  }, []);
  const loadData = () => {
    fetch("/api/recipe/load")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  };

  let saveData = async (data) => {
    if (editRecipe.id) {
      data.id = editRecipe.id;
      await fetch("/api/recipe/edit", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setEditRecipe(null);
      loadData();
      return;
    } else {
      await fetch("/api/recipe/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    }
    loadData();
  };

  function deleteRecipe(id) {
    fetch("/api/recipe/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete recipe");
        }
        return response.json();
      })
      .then(() => {
        loadData();
      })
      .catch((error) => {
        console.error("Error deleting recipe:", error);
      });
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col items-center py-12 px-4">
      <h1 className="mb-8 text-4xl font-extrabold text-orange-700 dark:text-orange-300 drop-shadow-lg tracking-tight">
        {" "}
        🍰 Recipe Collection
      </h1>
      <div className="w-auto  max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-10 border border-orange-200 dark:border-gray-700">
        <RecipeForm onEditData={editRecipe} onSubmit={saveData} />
      </div>
      <ul className="w-full max-w-2xl space-y-8">
        {recipes.map((recipe, index) => (
          <RecipeCard
            onDelete={(id) => deleteRecipe(id)}
            onEdit={(recipe) => {
              setEditRecipe(recipe);
            }}
            key={index}
            recipe={recipe}
          />
        ))}
      </ul>
    </main>
  );
}
