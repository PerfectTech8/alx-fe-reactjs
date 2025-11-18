import {create} from "zustand";
const useRecipeStore = create((set) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: "",
  setSearchTerm: (term) => set({searchTerm: term}),
  filterRecipe: () => set((state) => ({ filteredRecipes: state.recipes.filter(recipe => recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()))})),
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe], filteredRecipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  updateRecipe: (id, updatedRecipe) => set(state => ({ recipes: state.recipes.map(r => r.id === id ? {...r, ...updatedRecipe} : r)})),
  deleteRecipe: (id) => set(state => ({ recipes: state.recipes.filter(r => r.id !==id)})),

}));
export default useRecipeStore;