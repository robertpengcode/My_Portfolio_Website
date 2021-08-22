import React, { Fragment } from "react";
import resumeInfo from "./resumeInfo";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import SmartphoneIcon from '@material-ui/icons/Smartphone';

const useStyles = makeStyles(theme => ({
  resumeContainer: {
    marginLeft: "2rem",
    width: "50%"
  },
  headContainer: {
    marginBottom: "1rem"
  },
  headTitle: {
    fontWeight: "bold"
  },
  headItem: {
    fontSize: "1rem",
    fontFamily: theme.typography.fontFamily,
    color: "Black"
  },
  categoryContainer: {
    marginBottom: "1rem"
  },
  categoryName: {
    fontSize: "1.2rem",
    fontFamily: theme.typography.fontFamily,
    color: "Black",
    fontWeight: "bold"
  },
  divider: {
    marginTop: "0.1rem",
    marginBottom: "0.1rem"
  },
  itemName: {
    marginLeft: "1rem",
    fontSize: "1rem",
    fontFamily: theme.typography.fontFamily,
    color: "Black",
    fontWeight: "bold"
  },
  item: {
    marginLeft: "1.5rem",
    fontSize: "1rem",
    fontFamily: theme.typography.fontFamily,
    color: "Black",
    //width: "80%",
    //border: "solid",
  },
  itemLocationTime: {
    marginRight: "1.5rem",
    fontSize: "1rem",
    fontFamily: theme.typography.fontFamily,
    color: "Black",
  },
}));

const ResumeItems = () => {
  const classes = useStyles();
  const resumeHead = (
    <Grid container direction="column" className={classes.headContainer}>
      <Grid item>
        <Typography variant="h5" className={classes.headTitle}>
          Robert (Jenpo) Peng, MBA, CPA - US Citizen
        </Typography>
      </Grid>
      <Grid item>
        <Grid container alignItems="center">
          <Grid item>
            <IconButton
              target="_blank"
              href="https://www.google.com/maps/place/Madison,+NJ+07940/@40.7585776,-74.4358955,14z/data=!3m1!4b1!4m5!3m4!1s0x89c3a64c7ad8e723:0x505fb91ef2dfeaad!8m2!3d40.7598227!4d-74.417097"
            >
              <HomeIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography className={classes.headItem}>
              Madison, NJ USA
            </Typography>
          </Grid>
          <Grid item>
            <IconButton>
              <EmailIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography className={classes.headItem}>
              jenpopeng@gmail.com (Preferred)
            </Typography>
          </Grid>
          <Grid item>
            <IconButton>
              <SmartphoneIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography className={classes.headItem}>
              (862)334-4083
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container alignItems="center">
          <Grid item>
            <IconButton
              target="_blank"
              href="https://www.linkedin.com/in/robert-jenpo-peng-0b1bbb49/"
            >
              <LinkedInIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Link
              target="_blank"
              href="https://linkedin.com/in/robert-jenpo-peng-0b1bbbb49"
              className={classes.headItem}
            >
              linkedin.com/in/robert-jenpo-peng-0b1bbbb49
            </Link>
          </Grid>
          <Grid item>
            <IconButton
              target="_blank"
              href="https://github.com/robertpengcode"
            >
              <GitHubIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Link
              target="_blank"
              href="https://github.com/robertpengcode"
              className={classes.headItem}
            >
              github.com/robertpengcode
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </Grid>
  );

  const categories = resumeInfo.map((category, id1) => (
    <Grid
      container
      key={id1}
      direction="column"
      className={classes.categoryContainer}
    >
      <Divider className={classes.divider} />
      <Grid item className={classes.categoryName}>
        {category.categoryName}
      </Grid>
      <Grid item>
        <Grid container direction="column">
          {category.items.map((item, id2) => (
            <Fragment key={id2}>
              <Grid item>
                <Grid container justify="space-between">
                  <Grid item className={classes.itemName}>
                    {item.itemName}
                  </Grid>
                  <Grid item className={classes.itemLocationTime}>
                    {item.locationOrTime}
                  </Grid>
                </Grid>
              </Grid>
              {item.descriptions.map((des, id3) => (
                <Grid item key={id3}>
                  <Grid container justify="space-between">
                    <Grid item className={classes.item}>
                      {des.des}
                    </Grid>
                    <Grid item className={classes.itemLocationTime}>
                      {des.time}
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Fragment>
          ))}
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </Grid>
  ));

  return (
    <Grid container direction="column" className={classes.resumeContainer}>
      <Grid item>{resumeHead}</Grid>
      <Grid item>{categories}</Grid>
    </Grid>
  );
};

export default ResumeItems;
