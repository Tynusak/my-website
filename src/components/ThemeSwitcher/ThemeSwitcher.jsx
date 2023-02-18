import React from 'react';

import './ThemeSwitcher.css';

export const ThemeSwitcher = ({ switchTheme, theme }) => {
  return (
    <div className="dark__mode">
      <label className="theme__switcher" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={switchTheme}
          value={theme}
          defaultChecked={theme === 'dark' ? true : false}
        />
        <div className="slider round"></div>
      </label>
    </div>
  );
};
