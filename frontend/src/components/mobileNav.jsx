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
          className='dropdown-content flex flex-col gap-4 p-4 color-black bg-gray shadow-lg rounded-md'
          sideOffset={5}
        >
          {links.map((link) => (
            <DropdownMenu.Item key={link.name} asChild>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block px-4 py-2 ${isActive ? 'text-accent underline' : 'hover:text-accent'} transition-all`
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

// import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
// import React from 'react';
// import { CiMenuFries } from 'react-icons/ci';
// import { NavLink } from 'react-router-dom';

// const links = [
//   { name: 'Home', path: '/' },
//   { name: 'Resume', path: '/resume' },
//   { name: 'Contact', path: '/contact' },
// ];

// function MobileNav() {
//   return (
//     <DropdownMenu.Root>
//       <DropdownMenu.Trigger asChild>
//         <button>
//           <CiMenuFries className='text-[32px] text-accent pointer-event-auto' />
//         </button>
//       </DropdownMenu.Trigger>

//       <DropdownMenu.Portal>
//         <DropdownMenu.Content
//           className='dropdown-content flex flex-col gap-4'
//           sideOffset={5} 
//         >
//           {links.map((link) => (
//             <DropdownMenu.Item className='border-b-2' asChild key={link.name}>
//               <NavLink
//                 to={link.path}
//                 className={({ isActive }) =>
//                   isActive ? '  hover:text-accent transition-all xl:hidden dropdown-item' : ''
//                 }
//               >
//                 {link.name}
//               </NavLink>
//             </DropdownMenu.Item>
//           ))}
//         </DropdownMenu.Content>
//       </DropdownMenu.Portal>
//     </DropdownMenu.Root>
//   );
// }

// export default MobileNav;
