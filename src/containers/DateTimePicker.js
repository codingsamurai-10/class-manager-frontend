import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function DateTimePicker(props) {
    return (
        <>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    disablePast
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date of slot"
                    format="dd/MM/yyyy"
                    value={props.slotToCancel}
                    onChange={props.handleDateTimeChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                <KeyboardTimePicker
                    ampm={false}
                    minutesStep={15}
                    initialFocusedDate={Date.now()}
                    margin="normal"
                    id="time-picker"
                    label="Time of slot"
                    value={props.slotToCancel}
                    onChange={props.handleDateTimeChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                />
            </MuiPickersUtilsProvider>
        </>
    )
}
