import React from 'react';

const ContactBox = () => {
    return (
      <div className="contact-box">
        <div className="contact-top-row">
          <button className="contact-button animated">Github</button>
          <button className="contact-button animated">Linkedin</button>
          <button className="contact-button animated">Medium</button>
        </div>
        <div className="contact-bottom-row">
          <button className="contact-button animated">Resume</button>
          <button className="contact-button animated">Projects</button>
          <button className="contact-button animated">Contact</button>
        </div>
      </div>
    );
}

export default ContactBox;
