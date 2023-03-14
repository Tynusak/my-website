import React from 'react';
import './Main.css';

export const Main = ({ home }) => {
  return (
    <main className={home ? 'main main--home' : 'main'}>
      <div className={home ? 'base base--home' : 'base'}></div>
    </main>
  );
};
