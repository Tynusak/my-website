import React from 'react';
import './Header.css';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { Navigation } from '../Navigation/Navigation';

export const Header = ({ switchTheme, theme }) => {
  return (
    <header>
      <ThemeSwitcher switchTheme={switchTheme} theme={theme} />
      <Navigation />
    </header>
  );
};
