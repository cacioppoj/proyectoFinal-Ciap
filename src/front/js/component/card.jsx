import React, { useState, useEffect, useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Context } from "../store/appContext";

export default function MultiActionAreaCard({ detail, id, type }) {
  const { store, actions } = useContext(Context);
  
  return (
    <Card className="col-10" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          className="imgcard"
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt=""
        />
        <CardContent>
          <Typography className="detalles" gutterBottom variant="p" component="div">
            {detail.group}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"
        onClick={() => actions.manageFavorites(detail.group)}>
           {actions.isIn(store.favorites, detail.group) ? (
            <i className="fas fa-heart"></i>
          ) : (
            <i className="far fa-heart"></i>
          )}
        </Button>
      </CardActions>
    </Card>
  );
}