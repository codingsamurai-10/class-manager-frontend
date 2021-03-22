import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DateOfSlotToBook from './DateOfSlotToBook';
import SlotDurationSelector from './SlotDurationSelector';

export default function BookDialogBox() {
  const [open, setOpen] = React.useState(false);
  const [slotDurationWanted, setSlotDurationWanted] = React.useState(1);
  const [dateOfSlot, setDateOfSlot] = React.useState(new Date());
  const [slotToBook, setSlotToBook] = React.useState();

  const handleDateChange = (date) => {
    console.log(date);
    setDateOfSlot(date); // search time table of given date (to be done on backend) and return free slots
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBookSlot = () => { // need to set slotToBook
    handleClose();
    console.log(slotToBook); // send req to backend
  }

  const handleSlotDurationWanted = (event) => {
    console.log(event.target.value); // send req to backend
  }

  return (
    <>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>Book a slot</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Book</DialogTitle>
        <DialogContent>

          <SlotDurationSelector handleRadioChange={handleSlotDurationWanted} />
          <DateOfSlotToBook selectedDate={dateOfSlot} handleDateChange={handleDateChange} />
          {/* <AvailableFreeSlots /> */}

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