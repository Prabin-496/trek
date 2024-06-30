import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='nav'>
      <div className="nav-logo">Himalayan Spirit</div>
      <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Package">Package</Link>
        </li>
        <li>
        <Link to="/About">About</Link>
        </li>
        <li className='nav-contact'>
        <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;