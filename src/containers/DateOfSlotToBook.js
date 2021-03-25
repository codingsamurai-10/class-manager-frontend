import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { Paper } from "@material-ui/core";
import { MuiPickersUtilsProvider, Calendar } from '@material-ui/pickers';
import { getDateOfNextFriday, disableWeekends } from './helpers';

export default function DateOfSlotToBook(props) {

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
              maxDate={getDateOfNextFriday()}
            />
          </Paper>
        </MuiPickersUtilsProvider>
      </div>
    </>
  )
}
