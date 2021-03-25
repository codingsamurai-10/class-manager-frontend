import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import React from "react";

//Data in form of json will be used in this same structure.
let notifs = [
  {
    subject: "Technical Communication",
    cancelled: false,
    prevTime: "12:00",
    prevDate: "18/03/2021",
    newDate: "20/03/2021",
    newTime: "3:00"
  },
  {
    subject: "Machines 2",
    cancelled: false,
    prevTime: "13:00",
    prevDate: "18/03/2021",
    newDate: "20/03/2021",
    newTime: "4:00"
  },
  {
    subject: "Microprocessors",
    cancelled: true,
    prevTime: "8:00",
    prevDate: "18/03/2021",
    newDate: "",
    newTime: ""
  },
  {
    subject: "Machine Learning",
    cancelled: false,
    prevTime: "9:00",
    prevDate: "20/03/2021",
    newDate: "21/03/2021",
    newTime: "10:00"
  },
  {
    subject: "Control Systems",
    cancelled: true,
    prevTime: "9:00",
    prevDate: "20/03/2021",
    newDate: "",
    newTime: ""
  },
  
]

const Notifications = () => { //data fetching to be done in different file and passed as props to this component.
  return (
    <List className='notifications'>
      {
        notifs.map((notif, index) => ( //use stable keys instead of index
          <>
            <ListItem key={index} button alignItems="flex-start">
              <ListItemAvatar>
                <Avatar src={'https://ui-avatars.com/api/?background=random&rounded=true&name=' + notif.subject} />
              </ListItemAvatar>
              <ListItemText
                primary={notif.subject}
                secondary={
                  (notif.cancelled) ?
                    `The class on ${notif.prevDate} at ${notif.prevTime} is cancelled.` :
                    `The class on ${notif.prevDate} at ${notif.prevTime} is scheduled to ${notif.newTime} on ${notif.prevDate}.`
                }
              />
            </ListItem>
            <Divider  key={index} variant="inset" component="li" />
          </>
        ))
      }
    </List>
  );
}

export default Notifications;
