import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Item from "./ItemCarousel";
import hotel1 from "./imgPrueba/hotel1.jpeg";
import hotel2 from "./imgPrueba/hotel2.jpeg";
import hotel3 from "./imgPrueba/hotel3.jpeg";
import hotel4 from "./imgPrueba/hotel4.jpeg";

const CarouselCIAP = (props) => {
  var items = [
    {
      name: "hotel1",
      description: "Probably the most random thing you have ever seen!",
      img: hotel1,
    },
    {
      name: "hotel2",
      description: "Hello World!",
      img: hotel2,
    },
    {
      name: "hotel3",
      description: "Probably the most random thing you have ever seen!",
      img: hotel3,
    },
    {
      name: "hotel4",
      description: "Hello World!",
      img: hotel4,
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default CarouselCIAP;
