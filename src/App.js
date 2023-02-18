import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CVPage } from './pages/CVPage';
import { PortfolioPage } from './pages/PortfolioPage';

export const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cv" element={<CVPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
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
