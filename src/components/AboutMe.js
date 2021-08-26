import React, { Fragment } from "react";
import jsImg from "./../pics/js.svg";
import pyImg from "./../pics/py.svg";
import reactImg from "./../pics/react.svg";
import materialuiImg from "./../pics/materialui.svg";
import nodeImg from "./../pics/node.svg";
import expressImg from "./../pics/express.svg";
import reduxImg from "./../pics/redux.svg";
import htmlImg from "./../pics/html.svg";
import cssImg from "./../pics/css.svg";
import postgresqlImg from "./../pics/postgresql.svg";
import mongodbImg from "./../pics/mongodb.svg";
import awsImg from "./../pics/aws.svg";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";
//import zIndex from "@material-ui/core/styles/zIndex";

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    backgroundImage: `url(laptopCoffee2.jpg)`,
    height: "82vh",
    width: "100%",
    backgroundSize: "cover",
    opacity: "0.8",
  },
  title: {
    ...theme.typography,
    color: "white",
    fontSize: "1.75rem",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.25rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  text: {
    ...theme.typography,
    color: "white",
    fontSize: "1.2rem",
    lineHeight: "2.5rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.1rem",
      lineHeight: "2.3rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      lineHeight: "1.8rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      lineHeight: "1.6rem",
    },
  },
  itemText: {
    //border: "solid",
  },
  itemSkills: {
    marginTop: "auto",
    marginBottom: "auto",
  },
  image: {
    width: "100px",
    height: "100px",
    [theme.breakpoints.down("md")]: {
      width: "70px",
      height: "70px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "60px",
      height: "60px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "50px",
      height: "50px",
    },
  },
}));

const AboutMe = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Box>
        <Paper elevation={0} className={classes.paperContainer}>
          <Grid container direction="row" justify="space-around" spacing={4}>
            <Grid
              item
              className={classes.itemText}
              xs={11}
              sm={11}
              md={7}
              lg={6}
            >
              <Typography className={classes.title}>
                An Accountant Steps Into The Programming World
              </Typography>
              <Typography className={classes.text}>
                I started my career as an accountant. Throughout the years, I
                realized the efficiency and quality of my work heavily relied on
                the ability to retrieve precise data from the company’s database
                and to make magic in my Excel spreadsheets. After getting
                involved in many system-improving projects and utilizing Visual
                Basic for Applications (VBA) in my day-to-day accounting work, I
                started to navigate into modern programming languages such as
                Python and Javascript. During the time I attended class at
                General Assembly (GA) in New York City, I built my first
                Javascript shooting game for my son. Even though he liked the
                Pokemon game built by my classmate more, that didn’t discourage
                me from becoming a professional programmer. During the tough
                time of the pandemic in 2020, I graduated from the part-time
                software engineering program at Fullstack Academy in New York
                City. The pair programming and team projects allowed me to
                experience the real-world software development process. Now
                that  I have built my 2021 projects with modern React Hooks and
                Material-UI, I’m confident that now I can launch my software
                engineering career.
              </Typography>
            </Grid>
            <Grid
              item
              className={classes.itemSkills}
              xs={11}
              sm={11}
              md={4}
              lg={5}
            >
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <Grid container>
                    <Grid item className={classes.image}>
                      <Image src={htmlImg} />
                    </Grid>
                    <Grid item className={classes.image}>
                      <Image src={cssImg} />
                    </Grid>
                    <Grid item className={classes.image}>
                      <Image src={materialuiImg} />
                    </Grid>
                    <Grid item className={classes.image}>
                      <Image src={jsImg} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container>
                    <Grid item className={classes.image}>
                      <Image src={reactImg} />
                    </Grid>
                    <Grid item className={classes.image}>
                      <Image src={reduxImg} />
                    </Grid>
                    <Grid item className={classes.image}>
                      <Image src={nodeImg} />
                    </Grid>
                    <Grid item className={classes.image}>
                      <Image src={expressImg} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container>
                    <Grid item className={classes.image}>
                      <Image src={postgresqlImg} />
                    </Grid>
                    <Grid item className={classes.image}>
                      <Image src={mongodbImg} />
                    </Grid>
                    <Grid item className={classes.image}>
                      <Image src={awsImg} />
                    </Grid>
                    <Grid item className={classes.image}>
                      <Image src={pyImg} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Fragment>
  );
};

export default AboutMe;
