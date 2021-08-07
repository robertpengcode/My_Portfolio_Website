import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.secondary.light,
    width: "100%",
    color: "white",
    textAlign: "center",
    fontFamily: theme.typography.fontFamily,
    fontSize: "1.5rem",
    padding: "0.5rem"
  }
}));

const Footer = () => {
  const classes = useStyles();

  return <footer className={classes.footer}>© 2020, Robert Peng</footer>;
};

export default Footer;
