import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];

function MobileNav() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button>
          <CiMenuFries className='text-[32px] text-accent pointer-event-auto' />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="dropdown-content"
          sideOffset={5} 
        >
          {links.map((link) => (
            <DropdownMenu.Item asChild key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? 'dropdown-item text-accent flex flex-col ' : 'dropdown-item'
                }
              >
                {link.name}
              </NavLink>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default MobileNav;
