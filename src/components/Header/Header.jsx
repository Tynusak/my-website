import React from 'react';
import './Header.css';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { Navigation } from '../Navigation/Navigation';

export const Header = ({ switchTheme }) => {
  return (
    <header>
      <ThemeSwitcher switchTheme={switchTheme} />
      <Navigation />
    </header>
  );
};
