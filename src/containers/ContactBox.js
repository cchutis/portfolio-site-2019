import React from 'react';

const ContactBox = () => {
    return (
        <div className="contact-box">
            <div className="contact-top-row">
                <button className="contact-button">Github</button>
                <button className="contact-button">Linkedin</button>
                <button className="contact-button">Medium</button>
            </div>
            <div className="contact-bottom-row">
                <button className="contact-button">Resume</button>
                <button className="contact-button">Projects</button>
                <button className="contact-button">Contact</button>
            </div>
        </div>
    );
}

export default ContactBox;
