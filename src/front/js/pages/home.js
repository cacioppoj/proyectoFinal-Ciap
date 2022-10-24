import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
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

  const [tipo, setTipo] = useState("hotels");
  const [hotels, setHotels] = useState([]);
  const [cordenadas, setCordenadas] = useState({});
  const [bounds, setBounds] = useState({});
  const [cargando, setCargando] = useState(false);

  const ObtenerDatos = async (tipo, sw, ne) => {
    try {
      const {
        data: { data },
      } = await axios.get(
        `https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary`,
        {
          params: {
            bl_latitude: sw.lat,
            bl_longitude: ne.lng,
            tr_longitude: sw.lng,
            tr_latitude: ne.lat,
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
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCordenadas({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      ObtenerDatos(tipo, bounds.sw, bounds.ne).then((data) => {
        setHotels(data.filter((hotels) => hotels.name));
        console.log(data);
      });
    }
  }, [bounds, tipo]);
  return (
    <>
      <CssBaseline />
      <Header setCordenadas={setCordenadas} />
      <Grid container spacing={3} sx={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <Lista
            hotels={hotels}
            tipo={tipo}
            setTipo={setTipo}
            cargando={cargando}
          />
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
