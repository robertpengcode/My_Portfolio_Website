import React, { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import Link from '@material-ui/core/Link';
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  containerAll: {
    width: "100%",
    marginBottom: "1rem",
  },
  containerYear: {
    //border: "solid",
  },
  projectContainer: {
    height: "20rem",
    width: "20rem",
  },
  imgBox: {
    height: "12rem",
    width: "18rem",
    //border: "solid red",
  },
  imgBoxOkinawa: {
    margin: "auto",
    marginTop: "1rem",
    height: "12rem",
    width: "18rem",
    //border: "solid red",
    border: `${theme.palette.primary.main} solid 0.2rem`,
    backgroundImage: `url(okinawaImg.png)`,
    backgroundSize: "cover",
  },
  text: {
    margin: "auto",
    marginTop: "0.5rem",
    fontSize: "1.2rem",
    textAlign: "center",
    height: "6rem",
    width: "18rem",
    //border: "solid red",
  },
  title: {
    marginLeft: "1rem",
    marginBottom: "1rem",
  },
  year: {
    ...theme.typography,
    width: "100%",
    fontSize: "1.2rem",
    fontWeight: "bold",
    height: "2rem",
    textAlign: "center",
  },
}));

const Projects = () => {
  const classes = useStyles();
  const projects = (
    <Grid container direction="column" className={classes.containerAll}>
      <Grid item>
        <Grid container direction="column" className={classes.containerYear}>
          <Grid item className={classes.year}>
            2021
          </Grid>
          <Grid item>
            <Grid container justify="space-evenly">
              <Grid item>
                <Box className={classes.imgBox}>image</Box>
                <Typography className={classes.text}>text</Typography>
              </Grid>
              <Grid item>
                <Box className={classes.imgBox}>image</Box>
                <Typography className={classes.text}>text</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" className={classes.containerYear}>
          <Grid item className={classes.year}>
            2020
          </Grid>
          <Grid item>
            <Grid container justify="space-evenly">
              <Grid item>
                <Box className={classes.imgBox}>image</Box>
                <Typography className={classes.text}>text</Typography>
              </Grid>
              <Grid item>
                <Box className={classes.imgBox}>image</Box>
                <Typography className={classes.text}>text</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item >
        <Grid container direction="column" className={classes.containerYear}>
          <Grid item className={classes.year}>
            2019
          </Grid>
          <Grid item>
            <Grid container justify="space-evenly">
              <Grid item>
                <Paper className={classes.projectContainer}>
                <Grid container direction="column">
                    <Link target="_blank"
                      href="https://robertpengcode.github.io/1945-OKINAWA/" >
                        <Grid item className={classes.imgBoxOkinawa}></Grid>
                    </Link>
                  <Grid item>
                    <Typography className={classes.text}>A shooting game using JavaScript, HTML, CSS, Bootstrap. The background is the battle of Okinawa happened in 1945.</Typography>
                  </Grid>
                </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Fragment>
      <Box className={classes.title}>
        <Typography variant="h4">My Projects</Typography>
      </Box>
      <Box>{projects}</Box>
    </Fragment>
  );
};

export default Projects;
