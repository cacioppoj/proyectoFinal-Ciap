import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Link, useNavigate } from "react-router-dom";



export const Navbar = () => {
  const navigate = useNavigate();
	return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <ApartmentIcon/>Hotelarium
          </Typography>
            <Button color="inherit" onClick={()=>navigate("/")}>Home</Button>
            <Button color="inherit" onClick={()=>navigate("/hotels")}>Hotels</Button>
            <Button color="inherit">Favoritos</Button>
            <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
