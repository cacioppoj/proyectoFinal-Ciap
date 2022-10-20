import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  Link,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import "../../index.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header = ({ setCordenadas }) => {
  // const [autocomplete, setAutocomplete ] = useState(null)
  // const onLoad = (autoC) => setAutocomplete(autoC)

  // const onPlaceChanged = () =>{
  //   const lat = autocomplete.getPlace().geometry.location.lat()
  //   const lng = autocomplete.getPlace().geometry.location.lng()

  //   setCordenadas({lat, lng});
  // }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="header">
          <Typography
            variant="h5"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Hoteles
          </Typography>
          <Link
            sx={{ color: "white", marginRight: "10px" }}
            underline="none"
            component="button"
            to=""
          >
            Home
          </Link>
          <Box display="flex" sx={{}}>
            <Typography variant="h6">Busca tus lugares</Typography>
            {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}> */}
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Buscar.." />
            </Search>
            {/* </Autocomplete> */}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
