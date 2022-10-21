import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Header from "../component/Header/Header.jsx";
import Map from "../component/Map/Map.jsx";
import { Lista } from "../component/Lista/Lista.jsx";
import { CssBaseline, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ApartmentIcon from "@mui/icons-material/Apartment";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [tipo, setTipo ] = useState('Hotels')
  const [hotels, setHotels] = useState([])
  const [cordenadas, setCordenadas] = useState({});
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCordenadas({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    actions.getData();
  }, [bounds. tipo]);
  return (
    <>
      <CssBaseline />
      <Header setCordenadas={setCordenadas} />
      <Grid container spacing={3} sx={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <Lista />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCordenadas={setCordenadas}
            setBounds={setBounds}
            cordenadas={cordenadas}
          />
        </Grid>
      </Grid>
    </>
  );
};
