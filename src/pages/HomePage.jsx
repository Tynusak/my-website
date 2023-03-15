import React from 'react';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { H1 } from '../components/headlines/H1/H1';
import { Footer } from '../components/Footer/Footer';

export const HomePage = ({ switchTheme, theme }) => {
  return (
    <>
      <Header switchTheme={switchTheme} theme={theme} />
      <Main home={true}>
        <H1 text="Kristýna Švandová" home={true} />
      </Main>
      <Footer />
    </>
  );
};
