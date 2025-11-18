import useRecipeStore from "./recipeStore";
const SearchBar = () => {
    const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
    const filterRecipe = useRecipeStore((state) => state.filterRecipe);

    const handleChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        filterRecipe();
    }
    return (
        <input type="text" placeholder="Search Recipes ..." onChange={handleChange} />
    );
};

export default SearchBar;