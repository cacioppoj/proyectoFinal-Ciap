import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import MyCard from "../component/card.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<MyCard/>
		</div>
	);
};
