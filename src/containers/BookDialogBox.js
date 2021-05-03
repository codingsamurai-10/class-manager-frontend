import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DateOfSlotToBook from './DateOfSlotToBook';
import SlotDurationSelector from './SlotDurationSelector';
import SearchIcon from '@material-ui/icons/Search';
import AvailableFreeSlots from './AvailableFreeSlots';
import ConfirmationSnackbar from './ConfirmationSnackbar';
import SubjectNameInputField from './SubjectNameInputField';

const slots = [8, 9, 10, 15, 19, 20, 21, 23]; // temporary data, to be fetched from backend



export default function BookDialogBox() {

  const [open, setOpen] = React.useState(false);
  const [subjectName, setSubjectName] = React.useState("")
  const [slotDurationWanted, setSlotDurationWanted] = React.useState(1);
  const [dateOfSlotWanted, setDateOfSlotWanted] = React.useState(new Date());
  const [freeSlots, setFreeSlots] = React.useState(null);
  const [slotSelected, setSlotSelected] = React.useState(null);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [cancelSuccessfull, setCancelSuccessfull] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubjectNameChange = (event) => {
    setSubjectName(event.target.value);
  }

  const handleSlotDurationWanted = (event) => {
    setSlotDurationWanted(event.target.value);
  }

  const findFreeSlots = () => {
    const findSlots = {
      slotDurationWanted, dateOfSlotWanted
    }
    fetch("http://localhost:8000/periodsSchedule/free", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(findSlots)
    })
    .then(res => {
      console.log(res);
    });
    setFreeSlots(slots); //this state will be updated by backend
  }

  const handleSlotSelected = (slot) => {
    setSlotSelected(slot);
  }

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleBookSlot = () => { 
    const slotToBook = {
      subjectName,
      dateOfSlotWanted,
      slotSelected
    }
    // sent req to backend to book the selected slot.
    fetch("http://localhost:8000/book", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(slotToBook)
    })
      .then(() => {
        setCancelSuccessfull(true);
        setSnackbarOpen(true);
      })
  }

  return (
    <>

      <Button variant="contained" color="secondary" onClick={handleClickOpen}>Book a slot</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm">
        <DialogTitle id="form-dialog-title">Book</DialogTitle>
        <DialogContent>

          <SubjectNameInputField handleInput={handleSubjectNameChange} />

          <SlotDurationSelector handleRadioChange={handleSlotDurationWanted} />
          <DateOfSlotToBook selectedDate={dateOfSlotWanted} handleDateChange={setDateOfSlotWanted} />

          <Button
            startIcon={<SearchIcon />}
            fullWidth
            onClick={findFreeSlots}
          >
            Search for free slots
          </Button>

          {freeSlots && <AvailableFreeSlots freeSlots={freeSlots} slotSelected={slotSelected} handleSlotSelected={handleSlotSelected} />}

        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose} color="primary">
            Close
          </Button>
          {slotSelected && <Button variant="contained" disableElevation onClick={handleBookSlot} color="primary">
            Confirm
          </Button>}

          <ConfirmationSnackbar open={snackbarOpen} handleClose={handleSnackbarClose} success={cancelSuccessfull}></ConfirmationSnackbar>
        </DialogActions>
      </Dialog>
    </>
  );
}