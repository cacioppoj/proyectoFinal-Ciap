import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ApartmentIcon from '@mui/icons-material/Apartment';



export const Navbar = () => {
	return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <ApartmentIcon/>Hotelarium
          </Typography>
          <div className="menuBotones">
           <Button color="inherit">Home</Button>
           <Button color="inherit">Buscar</Button>
           <Button color="inherit">Favoritos</Button>
          </div>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
