// import React, { useState, useEffect } from "react";
import React from "react";
//import recipeData from "../data.json"; // import mock data
import { Link } from "react-router-dom";

const HomePage = ({recipes}) => {
  // const [recipes, setRecipes] = useState([]);

  // useEffect(() => {
  //   // Load data into state
  //   setRecipes(recipeData);
  // }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Recipe Sharing Platform</h1>
      {/* link to addRecipeForm */}
      <div className="flex justify-end mb-6">
      <Link to="/add-recipe" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">+ Add New Recipe</Link>
</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
              {/* <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                View Recipe
              </button> */}
            <div className="bg-white border rounded-lg p-6 mt-4">
               {/* Render ingredients */}
              {recipe.ingredients && recipe.ingredients.length > 0 && (
                <div className="mb-2">
                  <h3 className="font-semibold">Ingredients:</h3>
                  <ul className="list-disc px-6 py-4">
                    {recipe.ingredients.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Render steps */}
              {recipe.steps && recipe.steps.length > 0 && (
                <div>
                  <h3 className="font-semibold">Steps:</h3>
                  <ol className="list-disc px-6 py-4">
                    {recipe.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
              <Link to={`/recipe/${recipe.id}`} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"> View Recipe </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;