import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
					<Button variant="contained">Favorites</Button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
