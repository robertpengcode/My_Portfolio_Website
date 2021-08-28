import React, { Fragment } from "react";
import robertAvatar from "./../pics/robertPeng.png";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  paperContainer: {
    backgroundImage: `url(laptopCoffee.jpg)`,
    height: "82vh",
    width: "100%",
    backgroundSize: "cover",
    opacity: "0.75"
  },
  title: {
    ...theme.typography,
    color: "red",
    fontSize: "5rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "3.5rem"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.75rem"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5rem"
    }
  },
  subtitle: {
    ...theme.typography,
    //color: "red",
    color: theme.palette.common.red,
    fontSize: "3rem",
    fontWeight: "Bold",
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.6rem"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem"
    }
  },
  itemText: {
    marginTop: "1.5rem",
    width: "65%",
    height: "30vh",
    borderRadius: "1rem",
    textAlign: "center",
    backgroundColor: theme.palette.secondary.background,
    padding: "0.5rem",
    [theme.breakpoints.down("md")]: {
      width: "68%",
      height: "28vh"
    },
    [theme.breakpoints.down("sm")]: {
      width: "75%",
      height: "25vh"
    },
    [theme.breakpoints.down("xs")]: {
      width: "82%",
      height: "20vh"
    }
  },
  itemAvatar: {
    width: "60%",
    height: "40vh",
    [theme.breakpoints.down("md")]: {
      height: "35vh"
    },
    [theme.breakpoints.down("xs")]: {
      height: "30vh"
    }
  },
  avatar: {
    width: "15rem",
    height: "15rem",
    margin: "auto",
    marginTop: "1rem",
    [theme.breakpoints.down("md")]: {
      width: "12rem",
      height: "12rem"
    },
    [theme.breakpoints.down("xs")]: {
      width: "10rem",
      height: "10rem"
    }
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Box className={classes.box}>
        <Paper elevation={0} className={classes.paperContainer}>
          <Grid container direction="column" alignItems="center" spacing={4}>
            <Grid item className={classes.itemText}>
              <Typography className={classes.title}>
                [...Now, NavigateToTheNext]
              </Typography>
              <Typography className={classes.subtitle}>
                " Coding Bootcamp Grad Ready To Build! "
              </Typography>
            </Grid>
            <Grid item className={classes.itemAvatar}>
              <Avatar
                alt="Robert Peng Avatar"
                src={robertAvatar}
                className={classes.avatar}
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Fragment>
  );
};

export default Home;
