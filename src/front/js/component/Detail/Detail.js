import { Grid, Paper, Button } from "@mui/material";
import React, { Fragment, useState } from "react";
import CarouselCIAP from "./CarouselCIAP";
import Modal from "./Modal";

import hotel1 from "./imgPrueba/hotel1.jpeg";
import hotel2 from "./imgPrueba/hotel2.jpeg";
import hotel3 from "./imgPrueba/hotel3.jpeg";
import hotel4 from "./imgPrueba/hotel4.jpeg";

const Detail = (props) => {
  // const {
  //   onChange,
  //   data: { id, description, done },
  // } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
        spacing={4}
      >
        <Grid item xs={7}>
          <Grid container>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={6}>
                  <img src={hotel1}></img>
                </Grid>
                <Grid item xs={6}>
                  <Grid item xs={12}>
                    <img src={hotel2}></img>
                  </Grid>
                  <Grid item xs={12}>
                    <img src={hotel3}></img>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ paddingTop: "10px" }}>
              <Paper elevation={12} sx={{ bgcolor: "#ddd" }}>
                <h2>Hotel Eurobuilging</h2>
                <p>es muy bonito</p>
                <Modal></Modal>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img src={hotel4}></img>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <CarouselCIAP></CarouselCIAP>
        </Grid>
      </Grid>
    </>
  );
};

export default Detail;
