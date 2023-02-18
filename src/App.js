import React from 'react';
import './App.css';
import useLocalStorage from 'use-local-storage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CVPage } from './pages/CVPage';
import { PortfolioPage } from './pages/PortfolioPage';

export const App = () => {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  return (
    <div className="base" data-theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage switchTheme={switchTheme} theme={theme} />}
          />
          <Route
            path="/cv"
            element={<CVPage switchTheme={switchTheme} theme={theme} />}
          />
          <Route
            path="/portfolio"
            element={<PortfolioPage switchTheme={switchTheme} theme={theme} />}
          />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
