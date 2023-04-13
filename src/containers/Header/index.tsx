import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const Header: React.FC = () => {
  return (
    <header>
      <nav>
       
       
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/users" className="nav-link">
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;