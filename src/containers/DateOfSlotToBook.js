import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { Paper } from "@material-ui/core";
import { MuiPickersUtilsProvider, Calendar } from '@material-ui/pickers';

export default function DateOfSlotToBook(props) {
  const disableWeekends = (date) => {
    return date.getDay() === 0 || date.getDay() === 6;
  }

  let maxDateInFuture = new Date();
  maxDateInFuture.setDate(maxDateInFuture.getDate() + 14);

  return (
    <>
      <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Paper style={{ overflow: "hidden" }} elevation={0} variant="outlined">
            <Calendar
              disablePast
              date={props.selectedDate}
              onChange={props.handleDateChange}
              shouldDisableDate={disableWeekends}
              maxDate={maxDateInFuture}
            />
          </Paper>
        </MuiPickersUtilsProvider>
      </div>
    </>
  )
}
