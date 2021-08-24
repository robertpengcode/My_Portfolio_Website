import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.primary.light,
    width: "100%",
    color: theme.palette.secondary.main,
    textAlign: "center",
    fontFamily: theme.typography.fontFamily,
    fontSize: "1.5rem",
    padding: "0.5rem"
  },
  iconButton: {
    marginLeft: "0.5rem",
    marginRight: "0.5rem"
  },
  button: {
    width: 35,
    height: 35,
    [theme.breakpoints.down("md")]: {
      width: 30,
      height: 30
    },
    [theme.breakpoints.down("xs")]: {
      width: 25,
      height: 25
    }
  }
}));

const Footer = () => {
  const classes = useStyles();

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
      <IconButton
        className={classes.iconButton}
        target="_blank"
        component={Link}
        to="/contact"
      >
        <EmailIcon className={classes.button} />
      </IconButton>
      <Divider />
    </Fragment>
  );

  return (
    <footer className={classes.footer}>
      {iconButtons}
      <Typography>© 2021, Robert Peng</Typography>
    </footer>
  );
};

export default Footer;
