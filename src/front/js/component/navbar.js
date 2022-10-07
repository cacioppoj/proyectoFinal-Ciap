import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



export const Navbar = () => {
	return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <Button color="inherit">Buscar</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
