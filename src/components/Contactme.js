import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import emailjs from "emailjs-com";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID;
const userID = process.env.REACT_APP_USER_ID;

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    width: "50%",
    marginTop: "1rem",
    marginBottom: "1rem",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("md")]: {
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "95%",
    },
  },
  contactform: {
    textAlign: "Center",
  },
  emailTitle: {
    fontSize: "2rem",
    marginBottom: "0.5rem",
    marginRight: "auto",
  },
  emailItem: {
    width: "80%",
    marginBottom: "1rem",
  },
  emailButton: {
    marginBottom: "1rem",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  checkBoxes: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default function Contactme() {
  const classes = useStyles();
  const initialEmailValues = {
    recruiter: false,
    company: false,
    others: false,
    subject: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [emailValues, setEmailValues] = useState(initialEmailValues);
  const [emailSent, setEmailSent] = useState(false);

  function redirectToThankYou() {
    console.log("called!");
    setEmailSent(true);
  }

  function sendEmail(e) {
    e.preventDefault();
    //console.log("e target", e.target);

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log(result.text);
        redirectToThankYou();
      },
      (error) => {
        console.log(error.text);
      }
    );
    setEmailValues(initialEmailValues);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    //console.log("e target", e.target);
    setEmailValues({
      ...emailValues,
      [name]: value,
    });
  }

  function handleChangeCheck(e) {
    const { name, checked } = e.target;
    //console.log("e target", e.target);
    setEmailValues({
      ...emailValues,
      [name]: checked,
    });
  }

  useEffect(() => {
    setEmailValues(emailValues);
  }, [emailValues]);

  useEffect(() => {
    if (emailSent === true) {
      setEmailSent(false);
    }
  }, [emailSent]);

  const checkBoxes = (
    <FormControl>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={emailValues.recruiter}
              onChange={handleChangeCheck}
              name="recruiter"
              color="primary"
              value={emailValues.recruiter}
            />
          }
          label="Recruiter"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={emailValues.company}
              onChange={handleChangeCheck}
              name="company"
              color="primary"
              value={emailValues.company}
            />
          }
          label="Company HR/Hiring manager"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="others"
              color="primary"
              onChange={handleChangeCheck}
              checked={emailValues.others}
              value={emailValues.others}
            />
          }
          label="Others"
        />
      </FormGroup>
    </FormControl>
  );

  const emailForm = (
    <Paper className={classes.paper}>
      <form className={classes.contactform} onSubmit={sendEmail}>
        <Grid container direction="column">
          <Grid item>
            <Typography className={classes.emailTitle}>Email Robert</Typography>
          </Grid>
          <Grid item className={classes.checkBoxes}>
            {checkBoxes}
          </Grid>
          <Grid item>
            <TextField
              id="subject"
              label="Subject"
              variant="outlined"
              name="subject"
              value={emailValues.subject}
              onChange={handleChange}
              className={classes.emailItem}
            />
          </Grid>
          <Grid item>
            <TextField
              id="name"
              label="Your Name"
              variant="outlined"
              name="name"
              value={emailValues.name}
              onChange={handleChange}
              className={classes.emailItem}
            />
          </Grid>
          <Grid item>
            <TextField
              id="email"
              label="Your Email (Required)"
              variant="outlined"
              name="email"
              value={emailValues.email}
              onChange={handleChange}
              className={classes.emailItem}
            />
          </Grid>
          <Grid item>
            <TextField
              id="phone"
              label="Your Phone# (Optional)"
              variant="outlined"
              name="phone"
              value={emailValues.phone}
              onChange={handleChange}
              className={classes.emailItem}
            />
          </Grid>
          <Grid item>
            <TextField
              id="message"
              label="Message"
              name="message"
              multiline
              rows={3}
              variant="outlined"
              value={emailValues.message}
              onChange={handleChange}
              className={classes.emailItem}
            />
          </Grid>
          <Grid item>
            <Button
              type="submit"
              variant="contained"
              size="large"
              color="primary"
              className={classes.emailButton}
            >
              Send Email
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );

  if (emailSent === false) {
    return emailForm;
  } else {
    return <Redirect to="/thankyou" />;
  }
}