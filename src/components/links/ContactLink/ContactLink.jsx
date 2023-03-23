import React from 'react';
import './ContactLink.css';

export const ContactLink = ({ link, iconClass }) => {
  return (
    <a className="contacts__link" href={link} target="_blank" rel="noreferrer">
      <i className={iconClass}></i>
    </a>
  );
};

//props: href, classa pro ikonku
