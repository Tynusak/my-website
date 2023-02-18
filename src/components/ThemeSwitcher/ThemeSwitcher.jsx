import React from 'react';

import './ThemeSwitcher.css';

export const ThemeSwitcher = ({ switchTheme }) => {
  return (
    <div className="dark__mode">
      <label className="theme__switcher" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" onChange={switchTheme} />
        <div className="slider round"></div>
      </label>
    </div>
  );
};
