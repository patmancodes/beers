import React from "react";
import { useParams } from "react-router-dom";
import { useBeerStore } from "../stores/store";
import { Typography, Box, Stack } from "@mui/material";
import AddToFavoritesButton from "./AddToFavoritesButton";

/**
 * Beer details component. TODO: Revise styling.
 */

const BeerDetails = () => {
  const { id } = useParams();
  const beers = useBeerStore((state) => state.beers);
  const toggleFavorite = useBeerStore((state) => state.toggleFavorite);

  // eslint-disable-next-line
  const beer = beers?.find((b) => b.id == id);

  return (
    <>
      <Stack
        direction="row"
        flexWrap="nowrap"
        justifyContent="center"
        alignItems="start"
        mt="20px"
        gap={2}
        p="20px"
        maxWidth="900px"
        m="auto"
      >
        <Box
          component="img"
          src={beer?.image_url}
          alt={beer?.name}
          title={beer?.name}
          sx={{
            width: { xs: "100%", sm: "280px" },
            maxHeight: { xs: 233, md: 500 },
            maxWidth: { xs: 350, md: 250 },
            objectFit: "contain",
          }}
        />

        <Box sx={{ m: "20px" }}>
          <Typography variant="h2" color="gray" sx={{ mb: "20px" }}>
            {beer?.name}
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: "20px" }}>
            {beer?.tagline}
          </Typography>
          <Typography variant="body2" color="gray">
            First Brewed: {beer?.first_brewed}
          </Typography>

          <Typography
            variant="h6"
            color="gray"
            sx={{ fontWeight: "bold", mb: "20px" }}
          >
            Description:
          </Typography>

          <Typography variant="body2" color="gray">
            {beer?.description}
          </Typography>

          <Typography
            variant="h6"
            color="gray"
            sx={{ fontWeight: "bold", mb: "20px" }}
          >
            Brewers Tips:
          </Typography>

          <Typography variant="body2" color="gray">
            {beer?.brewers_tips}
          </Typography>

          <Typography
            variant="body2"
            color="gray"
            sx={{ mt: "20px", textAlign: "right" }}
          >
            {beer?.isFavorite ? "Remove from" : "Add to"} Favourites{" "}            
            <AddToFavoritesButton
              isFavorite={beer?.isFavorite}
              onClick={() => toggleFavorite(beer.id)}
            />
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default BeerDetails;
