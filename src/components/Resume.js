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
  containerAll: {
    //width: "100%",
    marginBottom: "3rem",
    backgroundImage: `url(homebg.jpg)`,
    //height: "110vh",
    width: "100%",
    backgroundSize: "100%",
    opacity: "1",
    marginTop: "-10rem",
    paddingTop: "10rem",
    paddingBottom: "7rem",
  },
  paper: {
    width: "60%",
    marginTop: "0.1rem",
    marginBottom: "1rem",
    marginLeft: "auto",
    marginRight: "auto",
    //border: "1px solid red",
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
    marginTop: "0.8rem",
    color: "white",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8rem",
    },
  },
}));

function Resume() {
  const classes = useStyles();
  useEffect(() => {
    document.title = "Resume Robert Peng";
  }, []);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Box id="main" role="main" tabIndex="-1" className={classes.containerAll}>
      <Typography variant="h1" className={classes.heading1}>
        My Resume
      </Typography>
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
