import React from "react";
import { Link } from "react-router-dom";
//Material-UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import theme from "./Theme";
//import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  toolbarMargin: {
    ...theme.mixins.toolbar
  },
  title: {
    margin: "1rem",
    fontWeight: "bold",
    fontFamily: "Open Sans Condensed"
  },
  tabContainer: {
    margin: "auto"
  },
  tab: {
    fontWeight: "bold",
    fontSize: "1.3rem",
    fontFamily: "Open Sans Condensed",
    minWidth: 10,
    margin: "0.8rem"
  },
  link: {
    margin: "0.5rem"
  }
});

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
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ElevationScroll>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Link to="/" >
            <Typography
              variant="h4"
              color="secondary"
              className={classes.title}
            >
              Robert Peng
            </Typography>
          </Link>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Tabs on Navbar"
            textColor="secondary"
            indicatorColor="secondary"
            className={classes.tabContainer}
            centered
          >
            <Tab
              className={classes.tab}
              label="About Me"
              component={Link}
              to="/aboutme"
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
          {/* <Link
            target="_blank"
            href="https://github.com/robertpengcode"
            className={classes.link}
          >
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/robert-jenpo-peng-0b1bbb49/"
            className={classes.link}
          >
            <IconButton size="small">
              <LinkedInIcon />
            </IconButton>
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/robert-jenpo-peng-0b1bbb49/"
            className={classes.link}
          >
            <IconButton>
              <EmailIcon />
            </IconButton>
          </Link> */}
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Navbar;
