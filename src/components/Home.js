import React, { useEffect } from "react";
import robertAvatar from "./../pics/robertPeng.png";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    backgroundImage: `url(homebg.jpg)`,
    height: "110vh",
    width: "100%",
    backgroundSize: "cover",
    opacity: "1",
    marginTop: "-6rem",
  },
  title: {
    ...theme.typography,
    //color: "red",
    color: theme.palette.common.white,
    fontSize: "4rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  subtitle: {
    ...theme.typography,
    marginTop: "1rem",
    color: theme.palette.common.white,
    fontSize: "3rem",
    fontWeight: "Bold",
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.6rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
  itemText: {
    marginTop: "10rem",
    width: "65%",
    height: "30vh",
    borderRadius: "1rem",
    textAlign: "center",
    //backgroundColor: theme.palette.secondary.background,
    padding: "0.5rem",
    [theme.breakpoints.down("md")]: {
      width: "68%",
      height: "28vh",
    },
    [theme.breakpoints.down("sm")]: {
      width: "75%",
      height: "25vh",
    },
    [theme.breakpoints.down("xs")]: {
      width: "82%",
      height: "20vh",
    },
  },
  itemAvatar: {
    width: "60%",
    height: "40vh",
    [theme.breakpoints.down("md")]: {
      height: "35vh",
    },
    [theme.breakpoints.down("xs")]: {
      height: "30vh",
    },
  },
  avatar: {
    width: "15rem",
    height: "15rem",
    margin: "auto",
    marginTop: "-2rem",
    marginBottom: "2rem",
    [theme.breakpoints.down("md")]: {
      width: "12rem",
      height: "12rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "10rem",
      height: "10rem",
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  useEffect(() => {
    document.title = "Home Robert Peng";
  }, []);

  return (
    <Box className={classes.box} id="main" tabIndex="-1" role="main">
      <Paper elevation={0} className={classes.paperContainer}>
        <Grid container direction="column" alignItems="center" spacing={4}>
          <Grid item className={classes.itemText}>
            <Typography variant="h1" className={classes.title}>
              Hello! I'm Robert Peng
            </Typography>
            <Typography variant="h2" className={classes.subtitle}>
              Web 3.0 Developer
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
  );
};

export default Home;
