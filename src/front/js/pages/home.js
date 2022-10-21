import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Map from "../component/Map/Map.jsx";
// import List from "../component/List/List";
import { CssBaseline, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ApartmentIcon from "@mui/icons-material/Apartment";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <CssBaseline />
      <Grid container spacing={3} sx={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          {/* <List /> */}
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
};
