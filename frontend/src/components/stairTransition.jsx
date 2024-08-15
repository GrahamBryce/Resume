
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Stairs from './stairs';
import { CiMenuFries } from 'react-icons/ci'

function StairTransition() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <div key={location.pathname}>
        <div id='a' className='h-screen w-screen fixed top-0 left-0 right-0 z-40 flex pointer-events-none'>
          <Stairs/>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default StairTransition;