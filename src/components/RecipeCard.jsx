export default function RecipeCard({
  onClick,
  recipe
}) {
  return (
    <li className="bg-orange-50 dark:bg-gray-900 rounded-lg shadow p-6 border border-orange-100 dark:border-gray-800">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-orange-800 dark:text-orange-200 mb-2 flex items-center gap-2">
          <span role="img" aria-label="recipe">
            📖
          </span>{' '}
          {recipe.name}
        </h2>
        <button
          onClick={() => onClick(recipe.id)}
          className=" h-8 flex items-center bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded p-2 px-6 font-medium shadow hover:from-purple-700 hover:to-blue-600 transition-colors duration-300"
        >
          Delete
        </button>
      </div>
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-4 mb-1">
        Ingredients:
      </h3>
      <ul className="list-disc list-inside pl-4 mb-4">
        {recipe.ingredients.map(
          (ingredient, ingredientIndex) => (
            <li
              key={ingredientIndex}
              className="text-gray-800 dark:text-gray-200"
            >
              <span className="font-bold">
                {ingredient.name}
              </span>
              :{ingredient.amount}{' '}
              {ingredient.units}
            </li>
          )
        )}
      </ul>
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-4 mb-1">
        Steps:
      </h3>
      <ol className="list-decimal list-inside pl-4 space-y-1">
        {recipe.steps.map((step, stepIndex) => (
          <li
            key={stepIndex}
            className="text-gray-700 dark:text-gray-300"
          >
            {typeof step === 'string'
              ? step
              : step.description}
          </li>
        ))}
      </ol>
    </li>
  );
}
