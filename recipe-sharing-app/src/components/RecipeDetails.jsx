import { useParams } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeForm from "./DeleteRecipeButton";

const RecipeDetails = () => {
    const { id } = useParams();
    const recipeId = Number(id);
    const recipe = useRecipeStore((state) => state.recipes.find(r => r.id === recipeId));
    if(!recipe) return <h3>Recipe Not Found</h3>;
    return (
    <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <EditRecipeForm recipe={recipe} />
        <DeleteRecipeForm id={recipe.id} />
    </div>
    );
}
export default RecipeDetails;