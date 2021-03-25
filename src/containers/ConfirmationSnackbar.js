import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function ConfirmationSnackbar(props) {
  const successMessage = "Action completed successfully!";
  const errorMessage = "Could not complete the action!";
  
  return (
    <div>
      <Snackbar open={props.open} autoHideDuration={6000} onClose={props.handleClose}>
        <Alert onClose={props.handleClose} severity={props.success ? "success" : "error"}>
          {props.success ? successMessage : errorMessage}
        </Alert>
      </Snackbar>
    </div>
  )
}
