import React from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export const PortfolioPage = ({ switchTheme }) => {
  return (
    <>
      <Header switchTheme={switchTheme} />
      <main> Na stránce Portfolio se pracuje</main>
      <Footer />
    </>
  );
};
