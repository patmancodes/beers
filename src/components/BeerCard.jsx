import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography, Box, Card, CardContent, CardMedia } from "@mui/material";

/**
 * A card component to display a subset of info about a beer
 */

const BeerCard = (props) => {
  const { beer, children } = props;

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "300px" },
        minWidth: "200px",
        boxShadow: "none",
        borderRadius: "4px",
        backgroundColor: "rgb(245 245 245)",
        p: "20px 10px 10px 10px",
      }}
    >
      <Link to={`/beer/${beer.id}`}>
        <CardMedia
          component="img"
          image={beer?.image_url}
          alt={beer?.name}
          title={beer?.name}
          sx={{
            width: { xs: "100%", sm: "280px" },
            height: 200,
            objectFit: "contain",
          }}
        />
      </Link>
      <CardContent
        sx={{
          height: "100px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Link to={`/beer/${beer.id}`}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", lineHeight: "22px", mb: "10px" }}
          >
            {beer?.name}
          </Typography>
          <Typography variant="subtitle2" color="gray">
            {beer?.tagline}
          </Typography>
          <Typography variant="body2" color="gray">
            First Brewed: {beer?.first_brewed}
          </Typography>
        </Link>
      </CardContent>
      <Box sx={{ textAlign: "right" }}>{children}</Box>
    </Card>
  );
};

export default BeerCard;
