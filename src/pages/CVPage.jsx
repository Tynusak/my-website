import React from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export const CVPage = ({ switchTheme, theme }) => {
  return (
    <>
      <Header switchTheme={switchTheme} theme={theme} />
      <main> Na stránce CV se pracuje.</main>
      <Footer />
    </>
  );
};
