import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  paperContainer: {
    backgroundImage: `url(laptopCoffee.jpg)`,
    height: "90vh",
    width: "100%",
    backgroundSize: "cover",
    opacity: "0.5"
  },
  
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.paperContainer}>
      <Box>
      <Typography >
        Home Here
      </Typography>
    </Box>
    </Paper>
  );
};

export default Home;
