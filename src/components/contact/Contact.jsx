import React from "react";
import "./Contact.css";
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
// import {BsWhatsapp} from 'react-icons/bs'
const Contact = () => {
  return (
    <section id="contact">
      <h5> Get In Touch</h5>
      <h2> Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option"> 
          <MdOutlineEmail className="contact__option-icon"/>
            <h4> Email </h4>
            <h5> saislam@Davidson.edu</h5>
            <a target='_blank' rel="noreferrer" href="mailto:saislam@Davidson.edu"> Send a message</a>
          </article>

          <article className="contact__option"> 
          <RiMessengerLine className="contact__option-icon"/>
            <h4> Messenger </h4>
            <h5> Safwan Islam</h5>
            <a target='_blank' rel="noreferrer" href="https://m.me/safwan.islam20"> Send a message</a>
          </article>

          {/* <article className="contact__option"> 
          <BsWhatsapp className="contact__option-icon"/>
            <h4> WhatsApp </h4>
            <h5> Send a WhatsApp DM! </h5>
            <a target='_blank' href='https://api.whatsapp.com/send?=+13165161210'> Send a message</a>
          </article> */}

        </div>

        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary"> Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
