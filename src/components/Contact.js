import React from 'react';

function Contact({ personName, avatar }) {
  return (
    <div className="contact-item">
      <img src={avatar} alt={`${personName}'s avatar`} className="avatar" />
      <p className="username">{personName}</p>
    </div>
  );
}

export default Contact;