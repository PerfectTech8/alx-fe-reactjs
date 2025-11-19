import useRecipeStore from "./recipeStore";

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorited = favorites.includes(recipeId);

  return (
    <button
      onClick={() =>
        isFavorited ? removeFavorite(recipeId) : addFavorite(recipeId)
      }
      style={{
        background: isFavorited ? "gold" : "lightgray",
        padding: "6px",
        cursor: "pointer",
        border: "none",
      }}
    >
      {isFavorited ? "★ Unfavorite" : "☆ Favorite"}
    </button>
  );
};

export default FavoriteButton;