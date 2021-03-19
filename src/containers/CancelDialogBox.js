import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DateTimePicker from './DateTimePicker';

export default function CancelDialogBox() {
  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleCancelSlot = () => {
    handleClose();
    console.log(selectedDate); // send req to backend
  }

  return (
    <>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>Cancel a slot</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Cancel</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Choose the date and time of the slot you want to cancel.
          </DialogContentText>

          <DateTimePicker selectedDate={selectedDate} handleDateChange={handleDateChange} />
        
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose} color="primary">
            Close
          </Button>
          <Button variant="contained" disableElevation onClick={handleCancelSlot} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}