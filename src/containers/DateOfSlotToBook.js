import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { Paper } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  Calendar
} from '@material-ui/pickers';

export default function DateOfSlotToBook() {

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date); // search time table of given date (to be done on backend) and return free slots
  };

  const disableWeekends = (date) => {
    return date.getDay() === 0 || date.getDay() === 6;
  }

  const maxDateInFuture = () => { // needs correction
    let currentTime = new Date();
    currentTime.setDate(currentTime.getDate() + 30);
    return currentTime;
  }

  return (
    <>
      <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Paper style={{ overflow: "hidden" }}>
            <Calendar
              disablePast
              date={selectedDate}
              onChange={handleDateChange}
              shouldDisableDate={disableWeekends}
              maxDate={maxDateInFuture}
            />
          </Paper>
        </MuiPickersUtilsProvider>
      </div>
    </>
  )
}
