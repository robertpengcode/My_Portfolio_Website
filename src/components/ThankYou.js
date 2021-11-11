import React, {useEffect} from "react";
import navigateImg from "./../../src/pics/navigate.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Image from "material-ui-image";

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: "1rem",
    width: "50%",
    marginTop: "1rem",
    marginBottom: "1rem",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    height: "76vh",
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "55%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "75%",
    },
  },
  paperForImg: {
    width: "50%",
    marginTop: "2rem",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    aspectRatio: "1",
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
  img: {
    width: "100%",
  },
  title: {
    fontSize: "3.5rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5rem",
    },
  },
  subtitle1: {
    fontSize: "2rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
  subtitle2: {
    fontSize: "1.6rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
    },
  },
}));

const ThankYou = () => {
  const classes = useStyles();

  useEffect(() => {
    document.title = "Thank You Robert Peng"
  }, [])

  return (
    <Paper className={classes.paper} id="main" role="main">
      <Typography variant="h1" className={classes.title}>Thank You!</Typography>
      <Typography className={classes.subtitle1}>For contacting me.</Typography>
      <Typography className={classes.subtitle2}>We'll be in touch soon.</Typography>
      <Paper className={classes.paperForImg}>
        <Image src={navigateImg} className={classes.img} alt=""/>
      </Paper>
    </Paper>
  );
};

export default ThankYou;
