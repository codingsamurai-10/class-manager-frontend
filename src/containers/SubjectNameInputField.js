import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function SubjectNameInputField(props) {
    return (
        <div>
            <TextField
                margin="normal"
                label="Subject name"
                color="primary"
                fullWidth
                onBlur={props.handleInput}
            />
        </div>
    )
}
