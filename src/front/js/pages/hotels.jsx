import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import MyCard from "../component/Card/MyCard.jsx";
import Header from "../component/Header/Header.jsx";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const Hotels = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getData();
  }, []);

  return (
    <>
    <Header/>
    <Box sx={{ flexGrow: 1, margin: "50px", padding: "20px" }}>
      <Typography variant="h1" gutterBottom sx={{ fontSize: "3rem" }}>
        {}
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: "40px" }}>
        <Grid container spacing={2} columns={12}>
          {store.hotels?.map((hotel, id) => (
            <Grid item xs={12} md={4} sm={6} key={id}>
              <MyCard hotel={hotel} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
    </>
  );
    
    
};
