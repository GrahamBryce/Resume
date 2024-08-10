// import React from 'react';
// import { AnimatePresence } from 'framer-motion';
// import { usePathName } from './nav'

// const PageTransition = ({children}) =>{
//   return(
//     <AnimatePresence>
//     <div key={usePathName}>
//       <motion.div 
//         initial={{ opacity: 1 }}
//         animate={{
//           opacity: 0,
//           transition: { delay: 1, duration: 0.4, ease: 'easeInOut' },
//         }}
//         className='h-screen w-screen fixed bg-primary top-0 pointer-events-none'
//       />
//     </div>
//     {children}
//     </AnimatePresence>
//   )
// }

// export default PageTransition


import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();

  console.log('Rendering PageTransition for:', location.pathname);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="h-screen w-screen fixed bg-primary top-0"
        onAnimationStart={() => console.log('Outer animation started')}
        onAnimationComplete={() => console.log('Outer animation completed')}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="relative h-full w-full"
          onAnimationStart={() => console.log('Inner animation started')}
          onAnimationComplete={() => console.log('Inner animation completed')}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
