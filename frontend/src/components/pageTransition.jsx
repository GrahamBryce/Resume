import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div id='b'
        key={location.pathname}
        initial={{ opacity: 0, backgroundColor: '#000000'}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0, ease: 'easeIn' }}
        className="h-screen w-100% bg-primary top-0 pointer-events-unset"
        onAnimationStart={() => console.log('Outer animation started')}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: .7, duration: 0.4 }}
          className="relative h-full w-full"
          onAnimationStart={() => console.log('Inner animation started')}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
// import React from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import { useLocation } from 'react-router-dom';

// const PageTransition = ({ children }) => {
//   const location = useLocation();

//   // console.log('Rendering PageTransition for:', location.pathname);

//   return (
//     <AnimatePresence mode="wait" initial={false}>
//       <motion.div id='b'
//         key={location.pathname}
//         initial={{ opacity: 0, backgroundColor: '#000000'}}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0, ease: 'easeIn' }}
//         className="h-screen w-screen fixed bg-primary top-0 pointer-events-unset"
//         onAnimationStart={() => console.log('Outer animation started')}
//       >
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ delay: .7, duration: 0.4 }}
//           className="relative h-full w-full"
//           onAnimationStart={() => console.log('Inner animation started')}
//         >
//           {children}
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default PageTransition;