import React, { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  containerAll: {
    width: "100%",
  },
  containerYear: {
    //border: "solid",
  },
  imgBox: {
    //backgroundColor: theme.palette.primary.main,
    height: "12rem",
    width: "18rem",
    //border: "solid red",
  },
  imgBoxOkinawa: {
    height: "12rem",
    width: "18rem",
    //border: "solid red",
    border: `${theme.palette.primary.main} solid 0.1rem`,
    backgroundImage: `url(okinawaImg.png)`,
    backgroundSize: "cover",
  },
  text: {
    backgroundColor: theme.palette.secondary.main,
    height: "6rem",
    width: "18rem",
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
                <Grid container direction="column">
                    <Link target="_blank"
                      href="https://robertpengcode.github.io/1945-OKINAWA/" >
                        <Grid item className={classes.imgBoxOkinawa}></Grid>
                    </Link>
                  <Grid item>
                    <Typography className={classes.text}>text</Typography>
                  </Grid>
                </Grid>
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
