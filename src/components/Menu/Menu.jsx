import React from 'react';
import './Menu.css';

export const Menu = ({ items, isOpen, onClick }) => {
  return (
    <nav className={isOpen ? 'nav__menu' : 'nav__menu nav__closed'}>
      {items.map((item) => (
        <a
          className="nav__link"
          href={item.link}
          key={item.item}
          onClick={() => onClick()}
        >
          {item.item}
        </a>
      ))}
      <a href="https://ksvandova.netlify.app/cv">Test</a>
    </nav>
  );
};
