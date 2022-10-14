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
import Typography from '@mui/material/Typography';


export const Hotels = () => {
	const { store, actions } = useContext(Context);
	const [hotels , setHotels] = useState([]);

	useEffect(() => {
		actions.getData()
	  }, []);

	return (
		<Box sx={{ flexGrow: 1, margin: "50px", padding: "20px" }}>
			<Box>
				<TextField id="standard-basic" label="Standard" variant="standard" />
				<Button sx={{background: "rgba(25,118,210)", color: "white"}}>Buscar</Button>
			</Box>
			<Typography variant="h1" gutterBottom sx={{marginTop: "30px"}}>
				Hoteles en Caracas
   		   </Typography>
      <Grid container spacing={2} sx={{marginTop: "40px"}}>
       		 <Grid item xs={6} md={8}>
				<Grid container spacing={2} columns={12}>
								{
									store.hotels?.map((hotel,id)=>(
									<Grid item xs={4} key={id}>
										<MyCard hotel={hotel}/>
									  </Grid>))
								}
     			 </Grid>
     	  	</Grid>
       			 <Grid item xs={6} md={4}>
					<Typography variant="h3" gutterBottom>
					Busquedas recientes
    			  </Typography>
				  <Box sx={{marginTop:"20px"}}>
					  {/* <MyCard/> */}
				  </Box>
				  <Box sx={{marginTop:"20px"}}>
					  {/* <MyCard/> */}
				  </Box>
       		 </Grid>
    	</Grid>
  	  </Box>
	);
};
