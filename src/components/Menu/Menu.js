import { Link } from 'react-router-dom';
import './Menu.css';

export const Menu = ({ items, isOpen, onClick }) => {
  return (
    <nav className={isOpen ? 'nav__menu' : 'nav__menu nav__menu--closed'}>
      {items.map((item) => (
        <Link
          to={item.path}
          key={item.name}
          className="nav__link"
          onClick={() => onClick()}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};
