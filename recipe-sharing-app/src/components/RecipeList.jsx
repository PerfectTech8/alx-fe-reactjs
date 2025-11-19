 import useRecipeStore from './recipeStore';
 import { Link } from 'react-router-dom';
 import FavoriteButton from "./FavoriteButton";

  const RecipeList = () => {
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

    return (
      <div>
        {filteredRecipes.map(recipe => (
          <div key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>

              <FavoriteButton recipeId={recipe.id} />
          </div>
        ))}
      </div>
    );
  };
  export default RecipeList;