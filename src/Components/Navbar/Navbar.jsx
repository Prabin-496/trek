import React, { useState } from 'react';
import './Navbar.css';

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
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav-contact'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;