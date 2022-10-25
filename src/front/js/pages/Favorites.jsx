import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header/Header.jsx";

import { Context } from "../store/appContext";

export const Favorites = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Header/>
		</div>
	);
};
