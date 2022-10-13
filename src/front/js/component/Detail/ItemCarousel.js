import React from "react";
import { Paper, Button, Grid } from "@mui/material";

const ItemCarousel = (props) => {
  return (
    <Grid item xs={12} align="center">
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <img src={props.item.img}></img>
    </Grid>
  );
};

export default ItemCarousel;
