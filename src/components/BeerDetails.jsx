import React from "react";
import { Link } from "react-router-dom";

const BeerDetails = (props) => {
  const { beer } = props;
  return (
    <>
      <div>TODO...</div>
      <div>{JSON.stringify(beer)}</div>
    </>
  );
};

export default BeerDetails;
