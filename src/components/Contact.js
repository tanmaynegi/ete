import React from "react";
import "../css/contact.css";
import cimg from "../assets/contact.svg";

export default function Contact() {
  return (
    <div id="contact-sec">
      <img className="conimg" src={cimg} alt="Contact" />
      <div className="cdetails">
        <div>
          <div className="cline1">
            <input type="text" id="name" placeholder="Name" required="true" />
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              required="true"
            />
          </div>
          <div className="cline2">
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              required="true"
            />
          </div>
          <textarea
            id="textarea"
            placeholder="Message"
            required="true"
            defaultValue={""}
          />
          <button type="submit">Send Message</button>
        </div>
      </div>
    </div>
  );
}
