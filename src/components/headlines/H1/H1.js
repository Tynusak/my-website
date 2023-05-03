import './H1.css';

export const H1 = ({ text, home }) => {
  return (
    <h1 className={home ? 'base__title base__title--home' : 'base__title'}>
      {text}
    </h1>
  );
};
