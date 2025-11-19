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

  favorites: [],

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  //  RECOMMENDATIONS (mock logic)
  recommendations: [],

  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),

}));
export default useRecipeStore;