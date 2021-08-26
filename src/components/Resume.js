import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import MyPdf from "./PDF/MyPdf";
import ResumeItems from "./ResumeItems";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "60%",
    marginTop: "1rem",
    marginBottom: "1rem",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      {/* <MyPdf /> */}
      <ResumeItems />
    </Paper>
  );
};

export default Resume;
