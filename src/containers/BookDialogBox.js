import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AvailableFreeSlots from './AvailableFreeSlots';

export default function BookDialogBox() {
  const [open, setOpen] = React.useState(false);
  const [slotDurationWanted, setSlotDurationWanted] = React.useState(0);
  const [slotToBook, setSlotToBook] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBookSlot = () => {
    handleClose();
    console.log(slotToBook); // send req to backend
  }

  return (
    <>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>Book a slot</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Book</DialogTitle>
        <DialogContent>
          <DialogContentText>
          These are the available free slots.
          </DialogContentText>
          <AvailableFreeSlots />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose} color="primary">
            Close
          </Button>
          <Button variant="contained" disableElevation onClick={handleBookSlot} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}