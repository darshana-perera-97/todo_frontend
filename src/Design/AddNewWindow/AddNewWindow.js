import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AddNewWindow() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        style={{
          padding: "1vh 2vh",
          fontSize: "18px",
          borderRadius: "25px",
          borderColor: "#999999",
          background: "#999999",
          color: "white",
          textShadow: "2px 2px black",
        }}
        onClick={handleClickOpen}
      >
        Add New ToDo
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New ToDo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add details of the ToDo which should be placed.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="ToDo Heading"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Discription"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
