import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import MyCard from "../component/MyCard.jsx";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

export const Hotels = () => {
	const { store, actions } = useContext(Context);
	const [hotels , setHotels] = useState([]);

	useEffect(() => {
		const options = {
		  method: "GET",
		  headers: {
			'X-RapidAPI-Key': '3149835cafmsh2a04639bc2ffd55p152938jsna9deae1c69fd',
			'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com',
		  },
		};
	
		const LlamadoAPI = async () => {
		  const url ='https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation?query=Venezuela';
		  const resp = await fetch(url, options);
		  const resultado = await resp.json();
		  setHotels(resultado.data)
		  console.log(resultado);
		};
		LlamadoAPI();
	  }, []);


	return (
		<Box sx={{ flexGrow: 1, margin: "50px", padding: "20px" }}>
			<TextField id="standard-basic" label="Standard" variant="standard" />
			<Button sx={{background: "rgba(25,118,210)", color: "white"}}>Buscar</Button>
			<h1>Hoteles en Caracas</h1>
      <Grid container spacing={2} sx={{marginTop: "40px"}}>
       		 <Grid item xs={6} md={8}>
				<Grid container spacing={2} columns={12}>
					{/* {
						hotels.map((hotel,id)=>{
							return(
								<Grid item xs={4}>
									<h1 key={id}>{hotel.title}</h1>
						  		</Grid>
							)
						})
					} */}
     			 </Grid>
     	  	</Grid>
       			 <Grid item xs={6} md={4}>
				<h1>Busquedas recientes</h1>
				<MyCard/>
				<MyCard/>
       		 </Grid>
    	</Grid>
  	  </Box>
	);
};
