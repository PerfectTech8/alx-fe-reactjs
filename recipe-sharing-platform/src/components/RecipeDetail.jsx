import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import recipeData from "../data.json";

const RecipeDetail = ({recipes}) => {
  const { id } = useParams(); // Get recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Convert id from string to number
    const selectedRecipe = recipeData.find((item) => item.id === Number(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-bold">Recipe not found</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Back Button */}
      <Link
        to="/"
        className="text-blue-500 hover:underline inline-block mb-6 text-lg"
      >
        ← Back to Recipes
      </Link>

      {/* Recipe Title */}
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>

      {/* Recipe Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full max-w-2xl h-80 object-cover rounded-lg shadow-md mb-8 mx-auto"
      />

      {/* Ingredients Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {recipe.ingredients?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Instructions Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Cooking Instructions</h2>
        <ol className="list-decimal pl-6 space-y-4 text-gray-700 leading-relaxed">
          {recipe.instructions?.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;