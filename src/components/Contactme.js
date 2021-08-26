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
    width: "50%",
    marginTop: "1rem",
    marginBottom: "1rem",
    marginLeft: "auto",
    marginRight: "auto",
  },
  contactform: {
    textAlign: "Center",
  },
  emailTitle: {
    fontSize: "2rem",
    marginBottom: "0.5rem",
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
}));

export default function Contactme() {
  const classes = useStyles();
  const initialEmailValues = {
    subject: "",
    name: "",
    email: "",
    phone: "",
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
      <form className={classes.contactform} onSubmit={sendEmail}>
        <Grid container direction="column">
          <Grid item>
            <Typography className={classes.emailTitle}>Email Robert</Typography>
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
              label="Your Email"
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
              label="Your Phone#"
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
              rows={5}
              //defaultValue="Default Value"
              variant="outlined"
              value={emailValues.message}
              onChange={handleChange}
              className={classes.emailItem}
            />
          </Grid>
          <Grid item>
            {/* <input type="submit" value="Send Email" /> */}
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
