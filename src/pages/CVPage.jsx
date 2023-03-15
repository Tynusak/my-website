import React from 'react';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { H1 } from '../components/headlines/H1/H1';
import { H2 } from '../components/headlines/H2/H2';
import { H3 } from '../components/headlines/H3/H3';
import { Footer } from '../components/Footer/Footer';

export const CVPage = ({ switchTheme, theme }) => {
  return (
    <>
      <Header switchTheme={switchTheme} theme={theme} />
      <Main home={false}>
        <H1 text="Curricullum vitae" home={false} />
        <H2 text="Praxe" />
        <H3 text="2022 - 2023: Firma XXX" />
      </Main>
      <Footer />
    </>
  );
};
