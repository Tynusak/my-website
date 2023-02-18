import React from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export const PortfolioPage = ({ switchTheme, theme }) => {
  return (
    <>
      <Header switchTheme={switchTheme} theme={theme} />
      <main> Na stránce Portfolio se pracuje</main>
      <Footer />
    </>
  );
};
