import React from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export const CVPage = ({ switchTheme }) => {
  return (
    <>
      <Header switchTheme={switchTheme} />
      <main> Na stránce CV se pracuje.</main>
      <Footer />
    </>
  );
};
