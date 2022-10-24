import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Favorites } from "../component/favorites";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Home</span>
        </Link>
        <div className="ml-auto">
          <Favorites />
        </div>
      </div>
    </nav>
  );
};
