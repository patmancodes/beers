import React from "react";
import { Stack } from "@mui/material";
import { BeerCard, AddToFavoritesButton } from "./";

/**
 * Component to display a list of beers.
 */

const BeersList = (props) => {
  const { beers, onToggleFavoriteClicked, children } = props;

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="start"
      mt="20px"
      gap={2}
      p="20px"
    >
      {!beers?.length && children}

      {beers?.map((item) => (
        <BeerCard key={item.id} beer={item}>
          <AddToFavoritesButton
            isFavorite={item.isFavorite}
            onClick={() => onToggleFavoriteClicked(item.id)}
          />
        </BeerCard>
      ))}
    </Stack>
  );
};

export default BeersList;
