import React, { useRef, useEffect } from "react";
import { useReactToPrint } from "react-to-print";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
//import MyPdf from "./PDF/MyPdf";
import ResumeItems from "./ResumeItems";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export class ComponentToPrint extends React.PureComponent {
  render() {
    return <ResumeItems />;
  }
}

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "60%",
    marginTop: "0.1rem",
    marginBottom: "1rem",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("md")]: {
      width: "75%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "95%",
      marginTop: "2.2rem",
    },
  },
  printButton: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginLeft: "70%",
    marginTop: "1rem",
    position: "absolute",
    color: theme.palette.primary.dark,
    [theme.breakpoints.down("md")]: {
      marginLeft: "75%",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "80%",
      fontSize: "1.1rem",
      marginTop: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "80%",
      fontSize: "1rem",
      marginTop: "2.5rem",
    },
  },
  heading1: {
    fontSize: "2.5rem",
    marginLeft: "1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
}));

function Resume() {
  const classes = useStyles();
  useEffect(() => {
    document.title = "Resume Robert Peng"
  }, [])
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Box id="main" role="main" tabIndex="-1">
      <Typography variant="h1" className={classes.heading1}>My Resume</Typography>
      <Button
        variant="outlined"
        size="small"
        className={classes.printButton}
        onClick={handlePrint}
      >
        Print PDF
      </Button>
      <Paper className={classes.paper}>
        <ComponentToPrint ref={componentRef} />
      </Paper>
    </Box>
  );
}

export default Resume;
