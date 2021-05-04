import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { getDateOfNextFriday, disableWeekends } from './helpers';
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
                    minutesStep={60}
                    disablePast
                    margin="normal"
                    id="date-picker-dialog"
                    label="Pick slot"
                    format="dd/MM/yyyy HH:mm"
                    views={['date', 'hours']}
                    value={props.slotToCancel}
                    onChange={props.handleDateTimeChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    shouldDisableDate={disableWeekends}
                    maxDate={getDateOfNextFriday()}
                />
            </MuiPickersUtilsProvider>
        </>
    )
}
