import React from 'react';
import './ThemeSwitcher.css';

export const ThemeSwitcher = () => {
  return (
    <div className="dark__mode">
      <label htmlFor="checkbox" className="theme__switcher">
        <input type="checkbox" />
        <div className="slider round"></div>
      </label>
    </div>
  );
};
