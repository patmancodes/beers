import React from "react";
import { useBeerStore } from "../stores/store";
import { Stack, Button } from "@mui/material";
import { BeerCard } from "./";
import NoItems from "./NoItems";

const BeersList = () => {
  const filteredBeers = useBeerStore((state) => state.filteredBeers());
  return (
    <>
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
    </>
  );
};

export default BeersList;
