import React from "react";
import emailjs from 'emailjs-com';

const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID;
const userID = process.env.REACT_APP_USER_ID;

export default function Contactme() {

    function sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm(serviceID, templateID, e.target, userID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
  
    return (
      <form className="contact-form" onSubmit={sendEmail}>
        <label>Subject</label>
        <input type="text" name="subject" />
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    );
  }