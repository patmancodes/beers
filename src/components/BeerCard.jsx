import React from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useBeerStore } from "../stores/store";
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Tooltip,
} from "@mui/material";
import AddToFavoritesButton from "./AddToFavoritesButton";

const BeerCard = (props) => {
  const { beer } = props;
  const toggleFavorite = useBeerStore((state) => state.toggleFavorite);
  const onFavoriteClick = () => toggleFavorite(beer.id);

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
      <Box sx={{ textAlign: "right" }}>
        <AddToFavoritesButton beer={beer} />
      </Box>
    </Card>
  );
};

export default BeerCard;
