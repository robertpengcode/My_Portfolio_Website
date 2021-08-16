import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  paperContainer: {
    backgroundImage: `url(laptopCoffee2.jpg)`,
    height: "70vh",
    width: "100%",
    backgroundSize: "cover",
    opacity: "0.5"
  },
  text: {
    ...theme.typography,
    color: "black",
    fontSize: "1.5rem"
  }
}));

const AboutMe = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Box>
        <Typography className={classes.text}>
          I started my career as an accountant. Throughout the years, I realized
          the efficiency and quality of my work heavily relied on the ability to
          retrieve precise data from the company’s database and to make magic in
          my Excel spreadsheets. After getting involved in many system-improving
          projects and utilizing Visual Basic for Applications (VBA) in my
          day-to-day accounting work, I started to navigate into modern
          programming languages such as Python and Javascript. During the time I
          attended class at General Assembly (GA) in New York City, I built my
          first Javascript shooting game for my son. Even though he liked the
          Pokemon game built by my classmate more, that didn’t discourage me
          from becoming a professional programmer. During the tough time of the
          pandemic in 2020, I graduated from the part-time software engineering
          program at Fullstack Academy in New York City. The pair programming
          and team projects allowed me to experience the real-world software
          development process. Now that  I have built my 2021 projects with
          modern React Hooks and Material-UI, I’m confident that I can launch my
          software engineering career.
        </Typography>
        <Paper elevation={0} className={classes.paperContainer}></Paper>
      </Box>
    </Fragment>
  );
};

export default AboutMe;
