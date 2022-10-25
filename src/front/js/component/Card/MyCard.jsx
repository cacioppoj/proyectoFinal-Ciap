import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarRateIcon from "@mui/icons-material/StarRate";
import Button from "@mui/material/Button";

export default function MyCard({ hotel }) {
  return (
    <>
      <Card sx={{ maxWidth: 345 }} elevation={6}>
        <CardMedia
          component="img"
          height="194"
          image={
            hotel.photo
              ? hotel.photo.images.large.url
              : "https://picsum.photos/200/300?grayscale"
          }
          alt="photo"
        />
        <CardContent>
          <Typography variant="h5">{hotel.name}</Typography>

          <div
            style={{ display: "flex", marginTop: "5px", marginBottom: "15px" }}
          >
            <LocationOnIcon fontSize="small" color="disabled" />
            <Typography variant="body2" color="text.secondary">
              {hotel.location_string}
            </Typography>
          </div>

          <div
            style={{ display: "flex", marginTop: "5px", marginBottom: "15px" }}
          >
            <Typography variant="body2"> {hotel.rating}</Typography>
            <StarRateIcon
              sx={{ color: "yellow", fontSize: "20px", marginTop: "-2px" }}
            />
          </div>

          <Typography variant="h5"> From: {hotel.price}</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Button variant="outlined" sx={{ color: "#1CA1F1", float: "right" }}>
            Ver Mas
          </Button>
          <Button>
            <FavoriteIcon />
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
