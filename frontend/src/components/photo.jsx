import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import IMG_4613 from "../assets/IMG_4613.jpg";

const Photo = () => {
  return (
    <AnimatePresence>
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.4, ease: "easeIn" }}
        className="relative"
      >
        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.4, ease: "easeInOut" }}
          className="absolute w-[300px] h-[300px] xl:w-[490px] xl:h-[490px] rounded-full"
          style={{ top: ".3rem" }} // Single top positioning for all screen sizes
        >
          <img
            src={IMG_4613}
            alt="Professional Headshot"
            className="w-auto xl:
                xl:top-[.2rem]
                xl:left-[0.48rem]
                lg:left-[.25rem]
                md:left-[.25rem]
                sm:left-[.25rem]
                lg:bottom-[.05rem]
                md:bottom-[.05rem]
                sm:bottom-[.05rem]
                relative
            h-full object-contain rounded-full"
          />
        </motion.div>

        {/* Animated SVG */}
        <motion.svg
          className="w-[310px] xl:w-[510px] h-[310px] xl:h-[510px]"
          fill="transparent"
          viewBox="0 0 510 510"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#20B2AA"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 72 72"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
    </AnimatePresence>
  );
};

export default Photo;
// import React from "react";
// import { motion } from "framer-motion";
// import IMG_4613 from "../assets/IMG_4613.jpg";

// const Photo = () => {
//   return (
//     <div className="w-full h-full relative flex justify-center items-center">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.4, duration: 0.4, ease: "easeIn" }}
//         className="relative"
//       >
//         {/* Image Container */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 0.4, ease: "easeInOut" }}
//           className="absolute w-[300px] h-[300px] xl:w-[498px] xl:h-[498px] rounded-full"
//           style={{ top: ".3rem" }} // Single top positioning for all screen sizes
//         >
//           <img
//             src={IMG_4613}
//             alt="Professional Headshot"
//             className="w-auto h-full object-contain rounded-full"
//           />
//         </motion.div>

//         {/* Animated SVG */}
//         <motion.svg
//           className="w-[310px] xl:w-[510px] h-[310px] xl:h-[510px]"
//           fill="transparent"
//           viewBox="0 0 510 510"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <motion.circle
//             cx="253"
//             cy="253"
//             r="250"
//             stroke="#20B2AA"
//             strokeWidth="4"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             initial={{ strokeDasharray: "24 10 0 0" }}
//             animate={{
//               strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 72 72"],
//               rotate: [120, 360],
//             }}
//             transition={{
//               duration: 20,
//               repeat: Infinity,
//               repeatType: "reverse",
//             }}
//           />
//         </motion.svg>
//       </motion.div>
//     </div>
//   );
// };

// export default Photo;





// before img on everything but lg
// opacity: 1;
//     will-change: auto;
//     position: absolute;
//     top: .3rem;
//     left: 2.5rem;