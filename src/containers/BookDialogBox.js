import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DateOfSlotToBook from './DateOfSlotToBook';
import SlotDurationSelector from './SlotDurationSelector';
import SearchIcon from '@material-ui/icons/Search';

export default function BookDialogBox() {
  const [open, setOpen] = React.useState(false);
  const [slotDurationWanted, setSlotDurationWanted] = React.useState(1);
  const [dateOfSlotWanted, setDateOfSlotWanted] = React.useState(new Date());
  const [slotToBook, setSlotToBook] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSlotDurationWanted = (event) => {
    setSlotDurationWanted(event.target.value); // send req to backend
  }

  const handleDateChange = (date) => {
    setDateOfSlotWanted(date); // search time table of given date (to be done on backend) and return free slots
  };

  const findFreeSlots = () => { // send slot duration and date to backend for searching
    console.log(slotDurationWanted);
    console.log(dateOfSlotWanted);
  }

  const handleBookSlot = () => { // need to set slotToBook
    handleClose();
    console.log(slotToBook); // send req to backend
  }

  return (
    <>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>Book a slot</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Book</DialogTitle>
        <DialogContent>

          <SlotDurationSelector handleRadioChange={handleSlotDurationWanted} />
          <DateOfSlotToBook selectedDate={dateOfSlotWanted} handleDateChange={handleDateChange} />

          <Button
            startIcon={<SearchIcon />}
            fullWidth
            onClick={findFreeSlots}
          >
            Search for free slots
          </Button>

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