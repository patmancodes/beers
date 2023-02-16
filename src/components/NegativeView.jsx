import React from "react";
import { Typography } from "@mui/material";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";

/**
 * The negative view when there are no list items.
 */

const NegativeView = (props) => {
  const { headerText, children } = props;

  return (
    <Typography
      variant="h2"
      sx={{ mt: "100px", maxWidth: "500px", textAlign: "center" }}
    >
      <HeartBrokenIcon sx={{ fontSize: 70 }} /> <br />
      {headerText}
      <div>{children}</div>
    </Typography>
  );
};

export default NegativeView;
