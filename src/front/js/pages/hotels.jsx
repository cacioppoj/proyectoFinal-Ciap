import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import MyCard from "../component/card.jsx";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Hotels = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="containerHotels">
			<div className="containerBuscar">
				<TextField id="standard-basic" label="Buscar Ciudad" variant="standard" />
				<Button sx={{background:"rgba(25,118,210)"}} color="inherit">Buscar</Button>
			</div>
			<div className="titulo">
				<h1>Hoteles en Caracas</h1>
			</div>
			<div className="containerBody">
				<div className="">
					<div className="container">
						<MyCard className="myCard"/>
						<MyCard className="myCard"/>
						<MyCard className="myCard"/>
						<MyCard className="myCard"/>
						<MyCard className="myCard"/>
						<MyCard className="myCard"/>
					</div>
					<div className="botonesPaginacion">
					<Button color="inherit"><ArrowBackIcon/></Button>
					<Button color="inherit"><ArrowForwardIcon/></Button>
					</div>	
				</div>
				<div className="containerBusquedas">
					<div className="h1">
						<h1>Ultimas Busquedas</h1>
					</div>
					<MyCard className="myCard"/>
					<MyCard className="myCard"/>
					<MyCard className="myCard"/>
				</div>	
			</div>
		</div>
	);
};
