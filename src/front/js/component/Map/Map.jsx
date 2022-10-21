import React from "react";
import GoogleMapReact from "google-map-react";
import { CardContent, CardMedia, Paper, Typography, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "../../../styles/index.css";

const Map = ({ setCordenadas, setBounds, cordenadas }) => {
  const escritorio = useMediaQuery("(min-width: 600px)");

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBWY1_6xOmWLEQNGlWaARu83zJtzz5bdWM" }}
        defaultCenter={cordenadas}
        center={cordenadas}
        margin={[50, 50, 50, 50]}
        zoom={14}
        onChange={(e) => {
          setCordenadas({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      >
        {/* {lugares?.map((lugar, i) => (
          <div
            className="contenedor-map"
            lat={Number(lugar.latitude)}
            lng={Number(lugar.longitude)}
            key={i}
          >
            {!escritorio ? (
              <LocationOnIcon color="primary" fontSize="large" />
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 1,
                    width: 500,
                    height: 100,
                  },
                }}
              >
                <Paper elevation={6} className="paper">
                  <img
                    className="pointer img"
                    src={
                      lugar.photo
                        ? lugar.photo.images.large.url
                        : "https://picsum.photos/200/300?grayscale"
                    }
                    alt={lugar.name}
                  />
                   <Typography variant='subtitle1' gutterBottom>{lugar.name}</Typography> 
                </Paper>
              </Box>
            )}
          </div>
        ))} */}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
