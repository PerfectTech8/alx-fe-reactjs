import useRecipeStore from "./recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeForm = ({id}) => {
const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
const navigate = useNavigate();
const handleDelete = () => {
    deleteRecipe(id);
    navigate("/");
}
return(
    <button onClick={handleDelete} style={{ background: "red", color: "white" }}>Delete Recipe</button>
);

};
export default DeleteRecipeForm;