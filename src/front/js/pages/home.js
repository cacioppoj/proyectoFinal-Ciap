import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<React.Fragment>
    	  <CssBaseline />
    		  <Container maxWidth="md">
    		    <Box className="boxPrincipal" sx={{ bgcolor: 'rgba(25,118,210)', height: '100%', width: "100%", margin: "auto", marginTop:"50px", marginBottom:"50px" }}>
					<div className="boxIcon">
						<ApartmentIcon className="icon" sx={{height:"100px", width:"100px"}}/>
					</div>
					<h1>Bienvenidos a Hotelarium</h1>
					<Button sx={{background: "rgba(25,118,210)", color: "white"}}>Login</Button>
				</Box>
    		  </Container>
  	  </React.Fragment>
		
	);
};
