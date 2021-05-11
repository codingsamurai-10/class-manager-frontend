import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BookDialogBox from './BookDialogBox';
import CancelDialogBox from './CancelDialogBox';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function SlotChangingOptions({ periodsSchedule, setPeriodsSchedule }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CancelDialogBox periodsSchedule={periodsSchedule} setPeriodsSchedule={setPeriodsSchedule} />
      <BookDialogBox periodsSchedule={periodsSchedule} setPeriodsSchedule={setPeriodsSchedule} />
    </div>
  )
}
