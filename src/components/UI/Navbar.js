import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
//Material-UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar
  },
  appBar: {
    [theme.breakpoints.down("md")]: {
      height: "4rem"
    },
    [theme.breakpoints.down("xs")]: {
      height: "3rem"
    }
  },
  title: {
    margin: "1rem",
    fontWeight: "bold",
    fontFamily: theme.typography.fontFamily,
    [theme.breakpoints.down("md")]: {
      margin: "0.75rem",
      fontSize: "2rem"
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0.5rem",
      fontSize: "1.2rem"
    }
  },
  tabContainer: {
    margin: "auto"
  },
  tab: {
    fontWeight: "bold",
    fontSize: "1.3rem",
    fontFamily: theme.typography.fontFamily,
    minWidth: 10,
    margin: "0.8rem"
  },
  logo: {
    width: "3rem",
    height: "3rem",
    color: "white",
    [theme.breakpoints.down("md")]: {
      width: "2.5rem",
      height: "2.5rem"
    },
    [theme.breakpoints.down("xs")]: {
      width: "1.5rem",
      height: "1.5rem"
    }
  },
  iconButton: {
    margin: "0.5rem"
  },
  button: {
    width: 35,
    height: 35
  },
  drawerIconContainer: {
    marginLeft: "auto"
  },
  drawerIcon: {
    height: "2rem",
    width: "2rem"
  },
  drawer: {
    backgroundColor: theme.palette.primary.main
  },
  drawerItem: {
    fontWeight: "bold",
    fontSize: "1.3rem",
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.common.navy
  },
  drawerItemSelected: {
    color: theme.palette.secondary.main
  }
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/about" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/projects" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/contact" && value !== 2) {
      setValue(3);
    }
  }, [value]);

  const tabs = (
    <Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Tabs on Navbar"
        textColor="secondary"
        indicatorColor="primary"
        className={classes.tabContainer}
        centered
      >
        <Tab className={classes.tab} label="Home" component={Link} to="/" />
        <Tab
          className={classes.tab}
          label="About Me"
          component={Link}
          to="/about"
        />
        <Tab
          className={classes.tab}
          label="Projects"
          component={Link}
          to="/projects"
        />
        <Tab
          className={classes.tab}
          label="Contact"
          component={Link}
          to="/contact"
        />
      </Tabs>
    </Fragment>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <List>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
            divider
            button
            component={Link}
            to="/"
            selected={value === 0}
          >
            <ListItemText
              className={
                value === 0
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              HOME
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
            divider
            button
            component={Link}
            to="/about"
            selected={value === 1}
          >
            <ListItemText
              className={
                value === 1
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              ABOUT ME
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
            divider
            button
            component={Link}
            to="/projects"
            selected={value === 2}
          >
            <ListItemText
              className={
                value === 2
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              PROJECTS
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            divider
            button
            component={Link}
            to="/contact"
            selected={value === 3}
          >
            <ListItemText
              className={
                value === 3
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              CONTACT
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Fragment>
  );

  const iconButtons = (
    <Fragment>
      <IconButton
        target="_blank"
        href="https://github.com/robertpengcode"
        className={classes.iconButton}
      >
        <GitHubIcon className={classes.button} />
      </IconButton>
      <IconButton
        target="_blank"
        href="https://www.linkedin.com/in/robert-jenpo-peng-0b1bbb49/"
        className={classes.iconButton}
      >
        <LinkedInIcon className={classes.button} />
      </IconButton>
      <IconButton className={classes.iconButton}>
        <EmailIcon className={classes.button} />
      </IconButton>
    </Fragment>
  );

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar>
            <ImportantDevicesIcon className={classes.logo} />
            <Typography
              variant="h4"
              color="secondary"
              className={classes.title}
            >
              Robert Peng
            </Typography>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </Fragment>
  );
};

export default Navbar;
