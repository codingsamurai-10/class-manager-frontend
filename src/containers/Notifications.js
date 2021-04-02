import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import React, { useEffect, useState } from "react";

//Data in form of json will be used in this same structure.


const Notifications = () => {
  //data fetching to be done in different file and passed as props to this component.
  const [notifs, setNotifs] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/changes")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setNotifs(data);
      })
  }, [])
  return (
    <List className='notifications'>
      {
        notifs && notifs.map((notif, index) => ( //use stable keys instead of index
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
                    `The class is scheduled to ${notif.newTime} on ${notif.newDate}.`
                }
              />
            </ListItem>
            <Divider key={index} variant="inset" component="li" />
          </>
        ))
      }
    </List>
  );
}

export default Notifications;
