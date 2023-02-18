import React from 'react';

import './ThemeSwitcher.css';

export const ThemeSwitcher = () => {
  return (
    <div className="dark__mode">
      <label class="theme__switcher" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div class="slider round"></div>
      </label>
    </div>
  );
};
