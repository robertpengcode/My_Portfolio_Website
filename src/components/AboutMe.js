import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  box: {},
  paperContainer: {
    backgroundImage: `url(laptopCoffee2.jpg)`,
    height: "82vh",
    width: "100%",
    backgroundSize: "cover",
    opacity: "0.8"
  },
  title: {
    ...theme.typography,
    color: "white",
    fontSize: "1.75rem",
    fontWeight: "bold"
  },
  text: {
    ...theme.typography,
    color: "white",
    fontSize: "1.2rem",
    lineHeight: "2.5rem"
  },
  itemText: {
    width: "45%",
    height: "75vh",
    //border: "solid",
  },
  itemSkills: {
    width: "45%",
    height: "75vh",
    //border: "solid",
  },
}));

const AboutMe = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Box className={classes.box}>
        <Paper elevation={0} className={classes.paperContainer}>
          <Grid container direction="row" justify="center" spacing={4}>
            <Grid item className={classes.itemText}>
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
            <Grid item className={classes.itemSkills}>
              Skills here here
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Fragment>
  );
};

export default AboutMe;
