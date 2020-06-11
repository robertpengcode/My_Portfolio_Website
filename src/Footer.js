import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.secondary.light,
    width: "100%"
  }
}));

const Footer = () => {
  const classes = useStyles();

  return <footer className={classes.footer}>Footer Here</footer>;
};

export default Footer;
