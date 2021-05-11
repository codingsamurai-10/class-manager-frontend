import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const Notifications = () => {
  const [notifs, setNotifs] = useState(null);
  useEffect(() => {
    fetch("/api/Notifications")
      .then(res => {
        console.log(typeof res);
        return res.json();
      })
      .then(data => {
        setNotifs(data);
      })
  }, [])
  return (
    <List className='notifications'>
      {
        notifs && notifs.map((notif) => ( //use stable keys instead of index
          <>
            <ListItem key={notif._id} button alignItems="flex-start">
              <ListItemAvatar>
                <Avatar src={'https://ui-avatars.com/api/?background=random&rounded=true&name=' + notif.subject} />
              </ListItemAvatar>
              <ListItemText
                primary={notif.subject}
                secondary={
                  (notif.cancelled) ?
                    `The class on ${notif.date} at ${notif.time} hours is cancelled.` :
                    `The class is scheduled for ${notif.date} at ${notif.time} hours.`
                }
              />
            </ListItem>
            <Divider key={notif._id.slice(0,5)} variant="inset" />
          </>
        ))
      }
    </List>
  );
}

export default Notifications;
