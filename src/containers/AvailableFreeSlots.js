import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        float: 'left',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

export default function AvailableFreeSlots(props) {
  const classes = useStyles();
    return (
        <Paper className={classes.root} style={{ overflow: "hidden" }} elevation={0}>
            {props.freeSlots.map((slot) => {
                return (
                    <Chip
                      variant={(props.slotSelected === slot) ? "default" : "outlined"}
                      clickable
                      color="primary"
                      label={slot + ":00"}
                      onClick={() => props.handleSlotSelected(slot)}
                      />
                )
            })}
        </Paper>
    )
}
