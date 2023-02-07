import React from 'react';
import './NavButton.css';

export const NavButton = ({ onClick, isOpen }) => {
  return (
    <button className="nav__button" onClick={() => onClick()} id="nav__button">
      <i
        className={isOpen ? 'fa-solid fa-bars fa-xmark' : 'fa-solid fa-bars'}
      ></i>
    </button>
  );
};
