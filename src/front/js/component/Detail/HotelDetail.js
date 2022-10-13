import React, { Fragment, useState } from "react";
import NavbarCiap from "./NavbarCiap";
import Detail from "./Detail";
import { Grid } from "@mui/material";

const HotelDetail = (props) => {
  // const {
  //   onChange,
  //   data: { id, description, done },
  // } = props;

  return (
    <>
      <Grid container spacing={6}   justifyContent="space-between" alignItems="center">
        <Grid item xs={12}>
          <NavbarCiap></NavbarCiap>
        </Grid>
        <Grid item xs={12}>
          <Detail></Detail>
        </Grid>
      </Grid>
    </>
  );
};

export default HotelDetail;
