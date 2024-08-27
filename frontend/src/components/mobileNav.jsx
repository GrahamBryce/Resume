import React, { useState, useRef, useEffect } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null); 

  // Function to handle clicks outside of the nav
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false); // Close the nav if the click is outside
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      // Remove event listener when the menu is closed
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {!isOpen && (
        <button onClick={() => setIsOpen(true)}>
          <CiMenuFries className='text-[32px] text-accent pointer-event-auto' />
        </button>
      )}

      {/* Right-side gray background overlay with text */}
      {isOpen && (
        <div
          ref={navRef} // Attach the ref to the nav container
          className="fixed top-0 right-0 h-full w-1/3 bg-gray-800 bg-opacity-90 z-40 flex flex-col items-start p-6"
        >
          {/* Close (X) Icon */}
          <button
            className="self-end mb-6"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes className="text-[32px] text-white" />
          </button>

          {/* Navigation Links */}
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `block mb-4 text-xl ${isActive ? 'text-accent underline' : 'hover:text-accent'} transition-all`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
}

export default MobileNav;