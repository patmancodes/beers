import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useBeerStore } from "../stores/store";

const AddToFavoritesButton = (props) => {
  const { beer } = props;
  const toggleFavorite = useBeerStore((state) => state.toggleFavorite);

  return (
    <Tooltip title="Add to Favorites " arrow>
      <IconButton
        aria-label="add to Favorites"
        color={beer?.isFavorite ? "error" : ""}
        onClick={() => toggleFavorite(beer?.id)}
      >
        <FavoriteIcon />
      </IconButton>
    </Tooltip>
  );
};

export default AddToFavoritesButton;
