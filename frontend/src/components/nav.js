import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];

function Nav() {
  return (
    <nav>
      <ul className="flex gap-8 text-base">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? 'text-accent underline' : 'text-white hover:text-accent'
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;