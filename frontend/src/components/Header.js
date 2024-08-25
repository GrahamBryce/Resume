import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import Nav from './nav.jsx';
import MobileNav from "./mobileNav.jsx"
// import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
// import { Button } from "@material-tailwind/react";


function Header() {
  return (
    <header className="py-8 lg:py-12 text-white">
      <div className='container mx-auto flex justify-between items-center'>
        <Link to="/">
          <h1 className='text-4xl font-semibold'>
            Bryce<span className="text-accent">.</span>
          </h1>
        </Link>
        <div className='hidden xl:flex lg:flex text-white items-center gap-8'>
          <Nav />

        </div>
        {/* mobile nav */}
        <div className='xl:hidden  lg:hidden white'>
          <MobileNav/>
        </div>
      </div>
    </header>
  );
}

export default Header;