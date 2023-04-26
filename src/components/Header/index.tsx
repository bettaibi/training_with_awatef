import React from 'react';
import { Link } from 'react-router-dom';
import HeaderCSS from './Header.module.css'

const Header: React.FC = function () {
  return (
    <header>   
      <nav>
        <ul className={HeaderCSS.navLinks}>
          <li>
            <Link to="/" className={HeaderCSS.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/users" className={HeaderCSS.navLink}>
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;