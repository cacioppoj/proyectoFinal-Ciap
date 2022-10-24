import { Button } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../component/card.jsx";
import { Context } from "../store/appContext";

export const Favoritos2 = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", color: "wheat" }}>Favoritos</h1>
      <div className="d-flex">
        {store.favorites.map((favorite, index) => {
          return (
            <div key={favorite.group}>
              <Card detail={favorite} type="hoteles" id={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
