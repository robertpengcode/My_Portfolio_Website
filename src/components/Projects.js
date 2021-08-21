import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    width: "80%",
    //marginLeft: "auto",
    //textAlign: "center",
    height: "40vh"
  },  
  box: {
    backgroundColor: theme.palette.primary.main,
    height: "14rem",
    width: "21rem",
  }
}));

const Projects = () => {
  const classes = useStyles();
  const projects = (
    <Grid container direction="column">
      <Grid item>
        <Grid container direction="column" justify="flex-start" className={classes.container}>
          <Grid item>2021</Grid>
          <Grid item>
            <Grid container justify="space-around">
              <Grid item>
                <Box className={classes.box}>image</Box>
                <Typography>text</Typography>
              </Grid>
              <Grid item>
                <Box className={classes.box}>image</Box>
                <Typography>text</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" justify="flex-start" className={classes.container}>
          <Grid item>2020</Grid>
          <Grid item>
            <Grid container justify="space-around" > 
              <Grid item>
                <Box className={classes.box}>image</Box>
                <Typography>text</Typography>
              </Grid>
              <Grid item>
                <Box className={classes.box}>image</Box>
                <Typography>text</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" justify="flex-start" className={classes.container}>
          <Grid item>2019</Grid>
          <Grid item>
            <Grid container justify="space-around">
              <Grid item>
                <Box className={classes.box}>image</Box>
                <Typography>text</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Fragment>
      <Typography variant="h4">My Projects</Typography>
      {projects}
    </Fragment>
  );
};

export default Projects;
