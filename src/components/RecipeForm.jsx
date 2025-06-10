import { useEffect, useState } from 'react';

export default function RecipeForm({
  onEditData,
  onSubmit
}) {
  const [name, setName] = useState('');
  const [steps, setSteps] = useState('');
  const isEdit =
    onEditData !== null &&
    Object.keys(onEditData).length > 0;
  const [ingredientAmount, setIngredientAmount] =
    useState([
      { name: '', amount: '', units: '' }
    ]);

  useEffect(() => {
    if (onEditData) {
      setName(onEditData.name || '');
      setSteps(
        Array.isArray(onEditData.steps)
          ? onEditData.steps
              .map((step) =>
                typeof step === 'string'
                  ? step
                  : step.description
              )
              .join('\n')
          : ''
      );
      setIngredientAmount(
        onEditData.ingredients?.length
          ? onEditData.ingredients.map(
              (ingredient) => ({
                name: ingredient.name || '',
                amount: ingredient.amount || '',
                units: ingredient.units || ''
              })
            )
          : [{ name: '', amount: '', units: '' }]
      );
    } else {
      setName('');
      setSteps('');
      setIngredientAmount([
        { name: '', amount: '', units: '' }
      ]);
    }
  }, [onEditData]);

  function handleIngredientChange(
    index,
    field,
    value
  ) {
    setIngredientAmount((prev) =>
      prev.map((ingredient, i) =>
        i === index
          ? { ...ingredient, [field]: value }
          : ingredient
      )
    );
  }

  function handleIngredientAdd() {
    setIngredientAmount([
      ...ingredientAmount,
      { name: '', amount: '', units: '' }
    ]);
  }

  const submitRecipe = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    onSubmit({
      name: formData.get('name'),
      steps: formData.get('steps')
        ? formData
            .get('steps')
            .split('\n')
            .filter(Boolean)
        : [],
      ingredients: ingredientAmount
        .filter(
          (ingredient, index) =>
            formData
              .get(`name-${index}`)
              ?.trim() ||
            formData
              .get(`amount-${index}`)
              ?.trim() ||
            formData.get(`units-${index}`)?.trim()
        )
        .map((ingredient, index) => ({
          name: formData.get(`name-${index}`),
          amount: parseFloat(
            formData.get(`amount-${index}`)
          ),
          units: formData.get(`units-${index}`)
        }))
    });
    if (!isEdit) {
      setName('');
      setSteps('');
      setIngredientAmount([
        { name: '', amount: '', units: '' }
      ]);
    }
  };
  return (
    <form
      onSubmit={submitRecipe}
      className="space-y-6 w-full"
    >
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
        <label
          htmlFor="name"
          className="sm:col-span-1 text-right"
        >
          Name:
        </label>
        <input
          id="name"
          name="name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          placeholder="Banana Bread"
          className="sm:col-span-3 w-full text-black rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
        <label
          htmlFor="steps"
          className="sm:col-span-1 text-right"
        >
          Steps:
        </label>
        <textarea
          id="steps"
          name="steps"
          value={steps}
          onChange={(e) =>
            setSteps(e.target.value)
          }
          placeholder="1. Eat banana bread"
          className="sm:col-span-3 w-full text-black rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300 min-h-[60px]"
        ></textarea>
      </div>
      {ingredientAmount.map(
        (ingredient, index) => (
          <fieldset
            className="grid col-span-2 sm:col-span-2 justify-between gap-4 items-center mb-2 border border-orange-100 dark:border-gray-700 rounded p-4 w-full"
            key={index}
          >
            <div className="w-fit">
              <label
                htmlFor={`name-${index}`}
                className="sm:col-span-1 text-right"
              >
                Ingredient Name:
              </label>
              <input
                id={`name-${index}`}
                name={`name-${index}`}
                value={ingredient.name}
                onChange={(e) =>
                  handleIngredientChange(
                    index,
                    'name',
                    e.target.value
                  )
                }
                placeholder="Bananas"
                className="sm:col-span-2 w-full text-black rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>
            <div className="w-fit">
              <label
                htmlFor={`amount-${index}`}
                className="sm:col-span-1 text-right"
              >
                Amount:
              </label>
              <input
                id={`amount-${index}`}
                type="number"
                name={`amount-${index}`}
                value={ingredient.amount}
                onChange={(e) =>
                  handleIngredientChange(
                    index,
                    'amount',
                    e.target.value
                  )
                }
                placeholder="6"
                className="sm:col-span-1 w-full text-black rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>
            <div className="w-fit">
              <label
                htmlFor={`units-${index}`}
                className="sm:col-span-1 text-right"
              >
                Units:
              </label>
              <input
                id={`units-${index}`}
                name={`units-${index}`}
                value={ingredient.units}
                onChange={(e) =>
                  handleIngredientChange(
                    index,
                    'units',
                    e.target.value
                  )
                }
                placeholder="bunches"
                className="sm:col-span-1 w-full text-black rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>
          </fieldset>
        )
      )}
      <div className="flex justify-end">
        <button
          type="button"
          className="mr-4 group underline rounded-lg border border-transparent px-5 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          onClick={handleIngredientAdd}
        >
          Add Ingredient
        </button>
        <input
          className="group underline rounded-lg border border-transparent px-5 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 cursor-pointer"
          type="submit"
          value={
            isEdit
              ? 'Save Edit Recipe'
              : 'Save Recipe'
          }
        />
      </div>
    </form>
  );
}
