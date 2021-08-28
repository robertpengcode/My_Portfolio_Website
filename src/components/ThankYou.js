import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    paper: {
      width: "50%",
      marginTop: "1rem",
      marginBottom: "1rem",
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "center",
      height: "76vh",
      [theme.breakpoints.down("md")]: {
        width: "55%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "60%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "70%",
      },
    },
  }));

  const ThankYou = () => {
    const classes = useStyles();
    return (
      <Paper className={classes.paper}>
          <Typography variant="h4">Thank You!</Typography>
          <Typography variant="h5">For contacting me.</Typography>
          <Typography variant="h5">We'll be in touch soon.</Typography>
      </Paper>
    );
  };

  export default ThankYou;
