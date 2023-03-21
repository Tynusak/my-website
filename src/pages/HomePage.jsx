import React from 'react';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { H1 } from '../components/headlines/H1/H1';
import { H3 } from '../components/headlines/H3/H3';
import { Footer } from '../components/Footer/Footer';

export const HomePage = ({ switchTheme, theme }) => {
  return (
    <>
      <Header switchTheme={switchTheme} theme={theme} />
      <Main home={true}>
        <div>
          <H1 text="Kristýna Švandová" home={true} />
          <H3 text="Junior Frontend developer" home={true} />
        </div>
        <div></div>
      </Main>
      <Footer />
    </>
  );
};
