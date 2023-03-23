import React from 'react';
import './ContactLink.css';

export const ContactLink = () => {
  return (
    <a className="contacts__link" href="/cv">
      <i className="fa-regular fa-envelope"></i>
    </a>
  );
};

//props: href, classa pro ikonku
