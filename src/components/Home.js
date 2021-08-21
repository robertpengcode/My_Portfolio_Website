import React, {Fragment} from "react";
import robertAvatar from "./../photos/robertPeng.png";
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
    //fontWeight: "Bold",
  },
  subtitle: {
    ...theme.typography,
    color: "red",
    fontSize: "3rem",
    fontWeight: "Bold",
  },
  itemText: {
    width: "60%",
    height: "30vh",
    //border: "solid",
    textAlign: "center",
  },
  itemAvatar: {
    width: "60%",
    height: "40vh",
    //border: "solid"
  },
  avatar: {
    width: "15rem",
    height: "15rem",
    margin: "auto",
    marginTop: "1rem"
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
                Now, Navigate To The Next...
              </Typography>
              <Typography className={classes.subtitle}>
                ~ Bootcamp Grad Ready To Build! ~
              </Typography>
            </Grid>
            <Grid item className={classes.itemAvatar}>
              <Avatar
                alt="RobertPengAvatar"
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
