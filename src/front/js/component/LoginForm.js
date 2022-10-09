import React from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
} from "@mui/material";

export const LoginForm = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
          initial={{ opacity: 0, y: 40 }}
        >
          <TextField
            fullWidth
            autoComplete="usuario"
            type="email"
            label="Correo"
          />

          <TextField fullWidth autoComplete="contraseña" label="Contraseña" />
        </Box>

        <Box initial={{ opacity: 0, y: 20 }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ my: 2 }}
          >
            {/* <FormControlLabel
                control={
                  <Checkbox
                    {...getFieldProps("remember")}
                    checked={values.remember}
                  />
                }
                label="Remember me"
              /> */}
          </Stack>
        </Box>
      </Box>
    </>
  );
};
