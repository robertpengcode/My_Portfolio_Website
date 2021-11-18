import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  containerAll: {
    width: "100%",
    marginBottom: "1rem",
  },
  containerYear: {
    margin: "0.5rem",
  },
  title: {
    marginLeft: "1rem",
    marginBottom: "1rem",
  },
  heading1: {
    fontSize: "2.5rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  year: {
    ...theme.typography,
    width: "100%",
    fontSize: "1.2rem",
    fontWeight: "bold",
    height: "2rem",
    textAlign: "center",
  },
  projectContainer: {
    height: "25rem",
    width: "25rem",
    [theme.breakpoints.down("xs")]: {
      height: "22rem",
      width: "22rem",
    },
  },
  imgBoxOrganic: {
    margin: "auto",
    marginTop: "1rem",
    height: "12.5rem",
    width: "23rem",
    border: `${theme.palette.primary.main} solid 0.2rem`,
    backgroundImage: `url(iorganicfarmImg.png)`,
    backgroundSize: "cover",
    [theme.breakpoints.down("xs")]: {
      height: "11rem",
      width: "20rem",
    },
  },
  textOrganic: {
    margin: "auto",
    marginTop: "0.5rem",
    fontSize: "1.2rem",
    textAlign: "center",
    height: "9rem",
    width: "20rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.1rem",
    },
  },
  imgBoxClassroom: {
    margin: "auto",
    marginTop: "1rem",
    height: "12.5rem",
    width: "23rem",
    border: `${theme.palette.primary.main} solid 0.2rem`,
    backgroundImage: `url(iClassroomImg.png)`,
    backgroundSize: "cover",
    [theme.breakpoints.down("xs")]: {
      height: "11rem",
      width: "20rem",
    },
  },
  textClassroom: {
    margin: "auto",
    marginTop: "0.5rem",
    fontSize: "1.2rem",
    textAlign: "center",
    height: "9rem",
    width: "20rem",
  },
  imgBoxJAR: {
    margin: "auto",
    marginTop: "1rem",
    height: "12.5rem",
    width: "23rem",
    border: `${theme.palette.primary.main} solid 0.2rem`,
    backgroundImage: `url(jarImg.png)`,
    backgroundSize: "cover",
    [theme.breakpoints.down("xs")]: {
      height: "11rem",
      width: "20rem",
    },
  },
  textJAR: {
    margin: "auto",
    marginTop: "0.5rem",
    fontSize: "1.2rem",
    textAlign: "center",
    height: "9rem",
    width: "20rem",
  },
  imgBoxOkinawa: {
    margin: "auto",
    marginTop: "1rem",
    height: "16rem",
    width: "23rem",
    border: `${theme.palette.primary.main} solid 0.2rem`,
    backgroundImage: `url(okinawaImg.png)`,
    backgroundSize: "cover",
    [theme.breakpoints.down("xs")]: {
      height: "13.5rem",
      width: "20rem",
    },
  },
  textOkinawa: {
    margin: "auto",
    marginTop: "0.5rem",
    fontSize: "1.2rem",
    textAlign: "center",
    height: "6rem",
    width: "20rem",
  },
}));

const Projects = () => {
  const classes = useStyles();
  useEffect(() => {
    document.title = "Projects Robert Peng"
  }, [])
  const projects = (
    <Grid container direction="column" className={classes.containerAll}>
      <Grid item>
        <Grid container direction="column" className={classes.containerYear}>
          <Grid item className={classes.year}>
            2021
          </Grid>
          <Grid item>
            <Grid container justifyContent="space-evenly">
              <Grid item>
                <Paper className={classes.projectContainer}>
                  <Grid container direction="column">
                    <Link
                      target="_blank"
                      href="https://iorganicfarm-react.herokuapp.com/"
                      aria-label="visit iOrganicFarm website hosted on Heroku"
                    >
                      <Grid item className={classes.imgBoxOrganic}></Grid>
                    </Link>
                    <Grid item>
                      <Typography className={classes.textOrganic}>
                        A 2021 Fullstack Website Project by Robert Peng using
                        Node, Express, React (hooks), and MongoDB. An e-commerce
                        website where users can buy organic produce and
                        registered vendors can exchange them. Built with Web
                        Accessibility (WCAG 2.1) awareness.
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
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
            <Grid container justifyContent="space-evenly">
              <Grid item>
                <Paper className={classes.projectContainer}>
                  <Grid container direction="column">
                    <Link
                      target="_blank"
                      href="https://github.com/robertpengcode/graceShopper"
                      aria-label="Check JAR repository on Github"
                    >
                      <Grid item className={classes.imgBoxJAR}></Grid>
                    </Link>
                    <Grid item>
                      <Typography className={classes.textJAR}>
                        JAR, a Fullstack Academy group project by Josh, Andres,
                        and Robert using Node, Express, React, and PostgreSQL.
                        An e-commerce website where visitors can browse
                        essential goods during the stay-at-home period.
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.projectContainer}>
                  <Grid container direction="column">
                    <Link
                      target="_blank"
                      href="https://github.com/robertpengcode/iClassroom"
                      aria-label="Check iClassroom repository on Github"
                    >
                      <Grid item className={classes.imgBoxClassroom}></Grid>
                    </Link>
                    <Grid item>
                      <Typography className={classes.textClassroom}>
                        iClassroom, a Fullstack Academy group project by Tandid,
                        Aleks, Vinayak, and Robert using Node, Express, React,
                        and PostgreSQL. An online education platform where
                        teachers can assign homeworks to students and grade
                        them...
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" className={classes.containerYear}>
          <Grid item className={classes.year}>
            2019
          </Grid>
          <Grid item>
            <Grid container justifyContent="space-evenly">
              <Grid item>
                <Paper className={classes.projectContainer}>
                  <Grid container direction="column">
                    <Link
                      target="_blank"
                      href="https://robertpengcode.github.io/1945-OKINAWA/"
                      aria-label="visit 1945 Okinawa website hosted by Github"
                    >
                      <Grid item className={classes.imgBoxOkinawa}></Grid>
                    </Link>
                    <Grid item>
                      <Typography className={classes.textOkinawa}>
                        1945 OKINAWA, a shooting game using JavaScript, HTML,
                        CSS, Bootstrap. The background is the battle of Okinawa
                        happened in 1945.
                      </Typography>
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
    <Box id="main" role="main" tabIndex="-1">
      <Box className={classes.title} >
        <Typography variant="h1" className={classes.heading1}>My Projects</Typography>
      </Box>
      <Box>{projects}</Box>
    </Box>
  );
};

export default Projects;
