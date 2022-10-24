import React, { useState } from "react";

import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import MyCard from "../Card/MyCard.jsx";

export const Lista = ({ hotels, tipo, setTipo, cargando }) => {
  return (
    <div className="">
      <Typography variant="h4">Hoteles y Restaurantes </Typography>
      {cargando ? (
        <div>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl
            className="Form"
            sx={{ marginBottom: "30px", minWidth: "20px" }}
          >
            <InputLabel sx={{ marginTop: "10px" }}>Que quieres ver?</InputLabel>
            <Select
              sx={{ marginTop: "20px", width: 400 }}
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            >
              <MenuItem value="hotels">Hoteles</MenuItem>
              <MenuItem value="restaurants">Restaurantes</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className="list">
            {hotels?.map((hotel, i) => (
              <Grid item key={i} xs={12}>
                <MyCard hotel={hotel} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};
