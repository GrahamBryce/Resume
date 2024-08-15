import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];

function MobileNav() {
  return (
    <nav>Mobile Nav</nav>
  );
}

export default MobileNav;