"use client";
import RecipeForm from "@/components/RecipeForm";
import { api } from "@/utils/api";
import Link from "next/link";
import { useState } from "react";
import RecipeCard from "@/components/RecipeCard";

export default function Recipes() {
  const [recipes, setRecipes] = useState([
    {
      name: "Banana Bread",
      ingredients: [{ name: "Bananas", amount: 6, units: "individual" }],
      steps: ["Smush bananas", "2. Eat bread"],
    },
    {
      name: "Banana Bread",
      ingredients: [{ name: "Bananas", amount: 6, units: "individual" }],
      steps: ["Smush bananas", "2. Eat bread"],
    },
    {
      name: "Banana Bread",
      ingredients: [{ name: "Bananas", amount: 6, units: "individual" }],
      steps: ["Smush bananas", "2. Eat bread"],
    },
  ]);
  const loadData = () => {
    fetch(`${api}/recipes`)
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  };
  let saveData = (data) => {
    setRecipes((currentRecipes) => [...currentRecipes, data]);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col items-center py-12 px-4">
      <h1 className="mb-8 text-4xl font-extrabold text-orange-700 dark:text-orange-300 drop-shadow-lg tracking-tight">
        {" "}
        🍰 Recipe Collection
      </h1>
      <div className="w-auto  max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-10 border border-orange-200 dark:border-gray-700">
        <RecipeForm onSubmit={saveData} />
      </div>
      <ul className="w-full max-w-2xl space-y-8">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </ul>
    </main>
  );
}
