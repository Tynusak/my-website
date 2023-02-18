import React from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export const HomePage = ({ switchTheme, theme }) => {
  return (
    <>
      <Header switchTheme={switchTheme} theme={theme} />
      <main>Homepage</main>
      <Footer />
    </>
  );
};
