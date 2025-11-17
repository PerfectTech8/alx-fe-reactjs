import {create} from "zustand";
const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  updateRecipe: (id, updatedRecipe) => set(state => ({ recipes: state.recipes.map(r => r.id === id ? {...r, ...updatedRecipe} : r)})),
  deleteRecipe: (id) => set(state => ({ recipes: state.recipes.filter(r => r.id !==id)})),
}));
export default useRecipeStore;