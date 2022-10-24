import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import axios from "axios";
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

  const [hotels, setHotels] = useState([]);

  const ObtenerDatos = async (tipo, sw, ne) => {
    try {
      const {
        data: { data },
      } = await axios.get(
        `https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary`,
        {
          params: {
            bl_latitude: "10.05540861079686",
            bl_longitude: "-69.23846097233024",
            tr_longitude: "-69.35845227482048",
            tr_latitude: "10.069606360830477",
            currency: "USD",
          },
          headers: {
            "X-RapidAPI-Key":
              "c1f53e8dc0mshf9ed4ba639dda01p1f13a4jsn00c19e76f581",
            "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
          },
        }
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    ObtenerDatos().then((data) => {
      setHotels(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <Header />
      <Box sx={{ flexGrow: 1, margin: "50px", padding: "20px" }}>
        <Grid container spacing={2} sx={{ marginTop: "40px" }}>
          <Grid container spacing={2} columns={12}>
            {hotels?.map((hotel, id) => (
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
