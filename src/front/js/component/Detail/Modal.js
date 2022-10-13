import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Modal = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{ bgcolor: (theme) => theme.palette.primary.main }}
      >
        Reserva!
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Reserva</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para Reservar por favor envianos su correo electronico
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Correo Electronico"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="user"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="telephone"
            label="Telefono De Contacto"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Reservar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
