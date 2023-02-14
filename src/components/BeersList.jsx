import React from "react";
import { useBeerStore } from "../stores/store";
import { Stack } from "@mui/material";
import { BeerCard } from "./";
import NoItems from "./NoItems";

/**
 * Component to display a list of beers.
 * Consider removing the store dependancy and inputing state with props etc.
 */

const BeersList = () => {
  const filteredBeers = useBeerStore((state) => state.filteredBeers());
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
      {!filteredBeers?.length ? <NoItems /> : null}

      {filteredBeers?.map((item, idx) => (
        <BeerCard key={item.id} beer={item} />
      ))}
    </Stack>
  );
};

export default BeersList;
