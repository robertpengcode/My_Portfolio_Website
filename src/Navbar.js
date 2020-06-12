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

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar
  },
  title: {
    margin: "1rem",
    fontWeight: "bold",
    fontFamily: theme.typography.fontFamily,
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
    width: 38,
    height: 38,
    color: "white"
  },
  iconButton: {
    margin: "0.5rem"
  },
  button: {
    width: 35,
    height: 35
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
        indicatorColor="secondary"
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

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary" >
          <Toolbar>
            <ImportantDevicesIcon className={classes.logo} />
            <Typography
              variant="h4"
              color="secondary"
              className={classes.title}
            >
              Robert Peng
            </Typography>
            {matches ? null : tabs}
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
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </Fragment>
  );
};

export default Navbar;
