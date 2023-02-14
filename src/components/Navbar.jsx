import React from "react";
import Logo from "./Logo";
import { Stack, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useBeerStore } from "../stores/store";

function notificationsLabel(count) {
  return count === 0 ? "no Favorites" : `${count} Favorites`;
}

const Navbar = (props) => {  
  const setFilter = useBeerStore((state) => state.setFilter);
  const filteredBeerCount = useBeerStore((state) => state.filteredBeerCount());  

  return (
    <Stack
      component="nav"
      direction="row"
      alignItems="center"
      pl={2}
      pr={3}
      backgroundColor="#fff"
      paddingY={2}
      sx={{
        position: "sticky",
        top: 0,
        justifyContent: "space-between",
        boxShadow: "1px 0px 15px rgba(0, 0, 0, 0.1)",
        borderBottom: "solid 1px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }} onClick={()=>setFilter(false)}>
        <Logo />
      </Link>
      <Tooltip title="View Favorites " arrow placement="left">
        <IconButton
          style={{ backgroundColor: "transparent" }}
          aria-label={notificationsLabel("5")}
          size="large"
          onClick={()=>setFilter(true)}
          component={Link}
          to="/"
        >
          <Badge badgeContent={filteredBeerCount} color="error">
            <FavoriteIcon sx={{ color: "black" }} />
          </Badge>
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default Navbar;
