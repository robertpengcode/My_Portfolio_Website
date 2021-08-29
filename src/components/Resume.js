import React, { Fragment, useRef } from "react";
import { useReactToPrint } from "react-to-print";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import MyPdf from "./PDF/MyPdf";
import ResumeItems from "./ResumeItems";
import Button from "@material-ui/core/Button";

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
    fontSize: "1rem",
    fontWeight: "bold",
    marginLeft: "70%",
    marginTop: "1rem",
    position: "absolute",
    [theme.breakpoints.down("md")]: {
      marginLeft: "75%",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "80%",
      fontSize: "0.9rem",
      marginTop: "0.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "80%",
      fontSize: "0.8rem",
      marginTop: "0rem",
    },
  },
}));

function Resume() {
  const classes = useStyles();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Fragment>
      <Button
        variant="outlined"
        size="small"
        color="primary"
        className={classes.printButton}
        onClick={handlePrint}
      >
        Print PDF
      </Button>
      <Paper className={classes.paper}>
        <ComponentToPrint ref={componentRef} />
      </Paper>
    </Fragment>
  );
}

export default Resume;
