import React, { useContext } from 'react';

import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import IconButton from '@material-ui/core/IconButton';
import GroupIcon from '@material-ui/icons/Group';
import MessageIcon from '@material-ui/icons/Message';
// import HomeIcon from '@material-ui/icons/Home';
import TableChartIcon from '@material-ui/icons/TableChart';
import PersonIcon from '@material-ui/icons/Person';
import ClassIcon from '@material-ui/icons/Class';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import InvertColorsIcon from '@material-ui/icons/InvertColors';
import SwitchUI from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { CustomThemeContext } from '../themes/customThemeProvider';
import Routing from '../Routing';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { UserContext } from './UserContext';

const drawerWidth = 240;
const groups = {
  _subGroup: localStorage.getItem('subGroup') || 'E2',
  _group: localStorage.getItem('group') || 'G1'
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },

  },
  title: {
    flexGrow: 1,
  },
  formControl: {
    minWidth: 110
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { currentTheme, setTheme } = useContext(CustomThemeContext)
  const isDark = Boolean(currentTheme === 'dark')
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  const [group, setGroup] = React.useState(groups._group);
  const [subGroup, setSubGroup] = React.useState(groups._subGroup);

  const profileInfo = React.useContext(UserContext);

  const handleThemeChange = (e) => {
    let { checked } = e.target
    if (checked) {
      setTheme('dark')
    }
    else {
      setTheme('normal')
    }
  }
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = () => {
    setOpen(!open);
  }

  const handleChangeGroup = (event) => {
    localStorage.setItem('group', event.target.value);
    setGroup(event.target.value);
  }

  const handleChangeSubGroup = (event) => {
    localStorage.setItem('subGroup', event.target.value);
    setSubGroup(event.target.value);

  }
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List> {/*Can also use Home icon instead of table icon */}
        <Divider />

        {profileInfo && <>
          <ListItem button onClick={handleClick}>
            <ListItemIcon ><PersonIcon /></ListItemIcon>
            <ListItemText primary={'Profile Info'} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unMountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <PersonOutlineIcon />
                </ListItemIcon>
                <ListItemText primary={profileInfo.username} />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <ClassIcon />
                </ListItemIcon>
                <FormControl className={classes.formControl}>
                  <InputLabel id='Group-label'>Group</InputLabel>
                  <Select
                    labelId='Group-label'
                    id='Group'
                    value={group}
                    onChange={handleChangeGroup}
                    label="Group"
                  >
                    <MenuItem value={'G1'}>G1</MenuItem>
                    <MenuItem value={'G2'}>G2</MenuItem>
                  </Select>
                </FormControl>
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>
                <FormControl className={classes.formControl}>
                  <InputLabel id='subGroup-label'>Sub-Group</InputLabel>
                  <Select
                    labelId='subGroup-label'
                    id='subGroup'
                    value={subGroup}
                    onChange={handleChangeSubGroup}
                    label="Sub-Group"
                  >
                    <MenuItem value={'E1'}>E1</MenuItem>
                    <MenuItem value={'E2'}>E2</MenuItem>
                    <MenuItem value={'E3'}>E3</MenuItem>
                    <MenuItem value={'E4'}>E4</MenuItem>
                    <MenuItem value={'E5'}>E5</MenuItem>
                    <MenuItem value={'E6'}>E6</MenuItem>

                  </Select>
                </FormControl>
              </ListItem>
            </List>
          </Collapse>
        </>}
        <ListItem button component={Link} to='/' key={'Time-Table'}>
          <ListItemIcon><TableChartIcon /></ListItemIcon>
          <ListItemText primary={'Time-Table'} />
        </ListItem>

        <ListItem button component={Link} to='/Notifications' key={'Notifications'}>
          <ListItemIcon><MessageIcon /></ListItemIcon>
          <ListItemText primary={'Notifications'} />
        </ListItem>

        <Divider />
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            Class Manager
          </Typography>
          <FormControlLabel
            control={<SwitchUI color='secondary' checked={isDark} onChange={handleThemeChange} />}
            label={<InvertColorsIcon />}
          />
          {!profileInfo && <Button variant='outlined' size='large' href="/api/auth/google">Login</Button>}
          {profileInfo && <Button variant='outlined' size='large' href="/api/auth/logout">Logout</Button>}
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routing />
      </main>
    </div>
  );
}



export default ResponsiveDrawer;
