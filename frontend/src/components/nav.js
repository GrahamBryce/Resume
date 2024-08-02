import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white hover:text-accent">
            Home
          </Link>
        </li>
        <li>
          <Link to="/resume" className="text-white hover:text-accent">
            Resume
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:text-accent">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;