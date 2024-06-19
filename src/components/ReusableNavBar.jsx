import React from 'react';
import { Link } from 'react-router-dom'; 
const ReusableNavBar = ({ links }) => {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        {links.map((link, index) => (
          <li key={index} className="nav-item">
            <Link to={link.path} className="nav-link">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ReusableNavBar;
