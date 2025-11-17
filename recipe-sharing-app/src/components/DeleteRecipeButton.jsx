import useRecipeStore from "./recipeStore";

const DeleteRecipeForm = ({id}) => {
const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
return(
    <button onClick={() =>deleteRecipe(id)} style={{ background: "red", color: "white" }}>Delete Recipe</button>
);

};
export default DeleteRecipeForm;