import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.primary.light,
    width: "100%",
    color: theme.palette.secondary.main,
    textAlign: "center",
    fontFamily: theme.typography.fontFamily,
    fontSize: "1.5rem",
    padding: "0.5rem"
  }
}));

const Footer = () => {
  const classes = useStyles();
  return <footer className={classes.footer}>© 2021, Robert Peng</footer>;
};

export default Footer;
