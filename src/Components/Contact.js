import React from "react";
import "../CSS/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <div className="details">
        <p>Opening Hours:</p>
        <p>Mon-Sun 9:00 AM to 11:00 PM</p>
        <p>+91 9876543210</p>
      </div>

      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <br />
        <input type="text" name="name" />
        <br />
        <br />
        <label htmlFor="email">Email Address: </label>
        <br />
        <input type="email" name="email" />
        <br />
        <br />
        <label htmlFor="feedback">feedback </label>
        <br />
        <textarea rows={5} cols={35} type="feedback" name="feedback"></textarea>

        <br />
        <br />
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
