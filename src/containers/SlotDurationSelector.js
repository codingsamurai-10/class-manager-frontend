import React from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';

export default function SlotDurationSelector(props) {
    return (
        <>
            <FormControl component="fieldset">
                <FormLabel component="legend">Choose slot duration</FormLabel>
                <RadioGroup row aria-label="position" name="position" defaultValue="1">
                    <FormControlLabel
                        value="1"
                        control={<Radio color="primary" />}
                        label="1 Hour"
                        labelPlacement="bottom"
                    />
                    <FormControlLabel
                        value="2"
                        control={<Radio color="primary" />}
                        label="2 Hours"
                        labelPlacement="bottom"
                    />
                    <FormControlLabel
                        value="3"
                        control={<Radio color="primary" />}
                        label="3 Hours"
                        labelPlacement="bottom"
                    />
                </RadioGroup>
            </FormControl>
        </>
    )
}
