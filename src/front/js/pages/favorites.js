import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Button } from "@mui/material";

export const Favorites = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<div className="ml-auto">
					<Link to="/demo">
					<Button variant="contained">Favorites</Button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
