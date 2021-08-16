import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  paperContainer: {
    backgroundImage: `url(laptopCoffee3.jpg)`,
    height: "90vh",
    width: "40%",
    backgroundSize: "cover",
    opacity: "0.5",
  }
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Fragment>
<Typography>Resume Here</Typography>
<Paper elevation={0} className={classes.paperContainer}></Paper>
    </Fragment>
    
  );
};

export default Resume;