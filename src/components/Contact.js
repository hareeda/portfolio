import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c05yr0v",  // Replace with your EmailJS Service ID
        "template_ktvs9ib", // Replace with your EmailJS Template ID
        form.current,
        "00tx1LbGmIr_bk5DF"   // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          setMessageSent(true);
          form.current.reset(); // Clear the form
        },
        (error) => {
          console.log("Message failed:", error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <h1>Let's Connect!</h1>
      <p>Have a project in mind or just want to chat? Feel free to reach out.</p>

      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope />
          <span>hareeda33@gmail.com</span>
        </div>
        <div className="contact-item">
          <FaPhone />
          <span>+91 70345 52233</span>
        </div>
        <div className="contact-item">
          <FaLinkedin />
          <a href="https://linkedin.com/in/hareeda-suresh" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/hareeda-suresh
          </a>
        </div>
      </div>

      <div className="contact-map-form">
        <h2>Send Me a Message</h2>
        <p>Looking for a skilled Automation QA Engineer? Let’s collaborate!</p>
        {messageSent && <p className="success-message">Message sent successfully! 🎉</p>}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
