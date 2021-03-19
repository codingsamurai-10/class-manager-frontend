import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import RescheduleDialogBox from './BookDialogBox';
import CancelDialogBox from './CancelDialogBox';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  

export default function SlotChangingOptions() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <CancelDialogBox />
        <RescheduleDialogBox />
      </div>
    )
}
