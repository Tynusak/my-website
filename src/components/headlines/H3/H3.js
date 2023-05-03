import './H3.css';

export const H3 = ({ text, home }) => {
  return (
    <h3 className={home ? 'subheadline subheadline--home' : 'subheadline'}>
      {text}
    </h3>
  );
};
