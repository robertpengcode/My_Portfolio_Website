import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

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
    width: "80%",
  },
}));

export default function Contactme() {
  const classes = useStyles();
  const initialEmailValues = {
    subject: "",
    name: "",
    email: "",
    message: "",
  };

  const [emailValues, setEmailValues] = useState(initialEmailValues);

  function sendEmail(e) {
    e.preventDefault();
    //console.log("see e", e);
    //console.log("e target", e.target);

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    //e.target.reset();
    setEmailValues(initialEmailValues);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setEmailValues({
      ...emailValues,
      [name]: value,
    });
  }

  useEffect(() => {
    setEmailValues(emailValues);
  }, [emailValues]);

  return (
    <Paper className={classes.paper}>
      <form className="contact-form" onSubmit={sendEmail}>
        <Grid container direction="column">
          <Grid item>
            <Typography>Email Robert</Typography>
          </Grid>
          <Grid item>
            <TextField
              id="subject"
              label="Subject"
              variant="outlined"
              name="subject"
              value={emailValues.subject}
              onChange={handleChange}
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
            />
          </Grid>
          <Grid item>
            <TextField
              id="email"
              label="Your Email"
              variant="outlined"
              name="email"
              value={emailValues.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="message"
              label="Message"
              variant="outlined"
              name="message"
              value={emailValues.message}
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <input type="submit" value="Send Email" />
          </Grid>
        </Grid>
      </form>

      {/* <Button variant="contained" color="primary">
            Send Email
          </Button> */}

      {/* <label>Subject</label>
        <input type="text" name="subject" />
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" /> */}
    </Paper>
  );
}
