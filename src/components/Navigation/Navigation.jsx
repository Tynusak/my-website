import React, { useState } from 'react';
import './Navigation.css';
import { NavButton } from '../buttons/NavButton/NavButton';
import { Menu } from '../Menu/Menu';

export const Navigation = () => {
  const menuItems = [
    { name: 'home', path: '/' },
    { name: 'cv', path: '/cv' },
    { name: 'portfolio', path: '/portfolio' },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navigation">
      <NavButton onClick={handleMenu} isOpen={isOpen} />
      <Menu items={menuItems} isOpen={isOpen} onClick={handleMenu} />
    </div>
  );
};
