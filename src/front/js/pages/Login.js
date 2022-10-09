import React from "react";
import { LoginForm } from "../component/LoginForm";
import { Social } from "../component/Social";
import { Container, Typography, Link, Box, Divider } from "@mui/material";
import styled from "@emotion/styled";

const RootStyle = styled("div")({
  background: "rgb(249, 250, 251)",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const HeadingStyle = styled(Box)({
  textAlign: "center",
});

const ContentStyle = styled("div")({
  maxWidth: 480,
  padding: 25,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: "#fff",
});

export const Login = () => {
  return (
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <HeadingStyle>
            <Typography>LOGO</Typography>
            <Typography sx={{ color: "text.secondary", mb: 5 }}>
              Inicia sesion en tu cuenta
            </Typography>
          </HeadingStyle>

          <Box>
            <Social />
          </Box>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              O
            </Typography>
          </Divider>

          <LoginForm />

          <Typography variant="body2" align="center" sx={{ mt: 3 }}>
            No tienes cuenta? <Link variant="subtitle2">Registrate</Link>
          </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};
