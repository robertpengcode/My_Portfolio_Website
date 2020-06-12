import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  paperContainer: {
    backgroundImage: `url(laptopCoffee.jpg)`,
    height: "90vh",
    width: "100%",
    backgroundSize: "cover"
  }
}));

const AboutMe = () => {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.paperContainer}></Paper>
  );
};

export default AboutMe;
