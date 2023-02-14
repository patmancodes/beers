
import React from "react";
import { Typography, Button } from "@mui/material";
import { useBeerStore } from "../stores/store";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";

/**
 * The negative view when there are no list items.
 * Consider revising the dependancy of the beer store
 *
 */

const NoItems = () => {
  const filteredToFavorites = useBeerStore((state) => state.filter);
  const setFilter = useBeerStore((state) => state.setFilter);

  return (
    <Typography
      variant="h2"
      sx={{ mt: "100px", maxWidth: "500px", textAlign: "center" }}
    >
      <HeartBrokenIcon sx={{ fontSize: 70 }} /> <br />
      No Favourites
      <br />
      <div>
        {filteredToFavorites ? (
          <Button
            sx={{ mt: "50px" }}
            variant="outlined"
            startIcon={<ChevronLeftIcon />}
            onClick={() => setFilter(false)}
          >
            Show All
          </Button>
        ) : (
          ""
        )}
      </div>
    </Typography>
  );
};

export default NoItems;
