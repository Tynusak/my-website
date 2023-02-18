import React from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export const HomePage = ({ switchTheme }) => {
  return (
    <>
      <Header switchTheme={switchTheme} />
      <main>Homepage</main>
      <Footer />
    </>
  );
};
