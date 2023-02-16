import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

/**
 * A button to handle the toggling of a beer's "favorite" property in the global state
 */

const AddToFavoritesButton = (props) => {
  const { isFavorite, onClick } = props;
  return (
    <Tooltip title="Add to Favorites " arrow>
      <IconButton
        aria-label="add to Favorites"
        color={isFavorite ? "error" : ""}
        onClick={onClick}
      >
        <FavoriteIcon />
      </IconButton>
    </Tooltip>
  );
};

export default AddToFavoritesButton;
