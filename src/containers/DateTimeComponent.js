import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DateTimePicker,
} from '@material-ui/pickers';

export default function DateTimeComponent(props) {
    return (
        <>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DateTimePicker
                    ampm={false}
                    minutesStep={15}
                    disablePast
                    margin="normal"
                    id="date-picker-dialog"
                    label="Pick slot"
                    format="dd/MM/yyyy HH:mm"
                    value={props.slotToCancel}
                    onChange={props.handleDateTimeChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </MuiPickersUtilsProvider>
        </>
    )
}
