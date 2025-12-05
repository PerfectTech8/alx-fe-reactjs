import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AddRecipeForm = (props) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    // Validation: title cannot be empty
    if (!title.trim()) {
      validationErrors.title = "Recipe title is required";
    }

    // Validation: at least 2 ingredients
    const ingredientsList = ingredients.split(/\n|,/).map(item => item.trim()).filter((item) => item !== "");
    if (ingredientsList.length < 2) {
      validationErrors.ingredients = "Please enter at least two ingredients";
    }

    // Validation: steps cannot be empty
    if (!steps.trim()) {
      validationErrors.steps = "Preparation steps are required";
    }

    setErrors(validationErrors);

    // Stop form if any validation errors exist
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // Submit (You can connect to API later)
    const newRecipe = {
      title,
      ingredients: ingredientsList,
      steps: steps.split(/\n|,/),
    };

    props.addRecipe(newRecipe);

    navigate('/');

    // console.log("Submitted Recipe:", newRecipe);

    // Reset form after submit
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md p-6 rounded-lg mt-10">
         {/* Back Button */}
       <Link to="/"className="text-blue-500 hover:underline inline-block mb-6 text-lg"> ← Back to Recipes</Link> 

      <h2 className="text-3xl font-bold mb-6 text-center">Add New Recipe</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-lg font-semibold mb-2">Recipe Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter recipe title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500 mt-1 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-lg font-semibold mb-2">Ingredients</label>
          <textarea
            className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter each ingredient on a new line"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          {errors.ingredients && (
            <p className="text-red-500 mt-1 text-sm">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div>
          <label className="block text-lg font-semibold mb-2">Preparation Steps</label>
          <textarea
            className="w-full border border-gray-300 rounded-lg px-4 py-2 h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write steps on separate lines"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
          {errors.steps && (
            <p className="text-red-500 mt-1 text-sm">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;