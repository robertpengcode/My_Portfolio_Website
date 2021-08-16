import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
//Material-UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1.5rem",
    [theme.breakpoints.down("md")]: {
      marginBottom: "1rem"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0.5rem"
    }
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
    marginLeft: "auto"
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
      width: "2rem",
      height: "2rem"
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
    "& .MuiListItemText-root": {
      color: theme.palette.secondary.main
    }
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
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const routes = [
    { name: "HOME", link: "/", tabValue: 0 },
    { name: "ABOUT ME", link: "/about", tabValue: 1 },
    { name: "PROJECTS", link: "/projects", tabValue: 2 },
    { name: "RESUME", link: "/resume", tabValue: 3 }
  ];

  useEffect(() => {
    routes.forEach(route => {
      if (
        window.location.pathname === route.link &&
        tabValue !== route.tabValue
      ) {
        setTabValue(route.tabValue);
      }
    });
  }, [routes, tabValue]);

  const tabs = (
    <Fragment>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        aria-label="Tabs on Navbar"
        textColor="secondary"
        indicatorColor="primary"
        className={classes.tabContainer}
        centered
      >
        {routes.map((route, id) => (
          <Tab
            key={id}
            className={classes.tab}
            label={route.name}
            component={Link}
            to={route.link}
          />
        ))}
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
          {routes.map((route, id) => (
            <ListItem
              key={id}
              onClick={() => {
                setOpenDrawer(false);
                setTabValue(route.tabValue);
              }}
              divider
              button
              component={Link}
              to={route.link}
              selected={tabValue === route.tabValue}
              classes={{ selected: classes.drawerItemSelected }}
            >
              <ListItemText
                className={classes.drawerItem}
                disableTypography
              >
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
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
