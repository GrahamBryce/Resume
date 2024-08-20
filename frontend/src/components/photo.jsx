import React from "react";

import { motion } from "framer-motion";
import IMG_4613 from "../assets/IMG_4613.jpg";

const Photo = () =>{
  return(
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity:1 }}
        transition={{ delay: 1.4, duration: 0.4, ease: "easeIn" }}
        >
          {/* might be able to refactor this to get rid of the double styling */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{opacity:1}}
            transition={{ delay: 1.4, duration: 0.4, ease: "easeInOut" }}
            className="w-[300px] h-[300px] mix-blend-lighten xl:h-[498px] rounded-full">
          <img
            src={IMG_4613}
            alt="Professional Headshot"
            className="object-contain rounded-full m-auto xl:h-[auto] lg:h-[300px] sm:h-[300px] md:h-[300px]"
          />
        </motion.div>
      </motion.div>
    </div>
  );  
}

export default Photo;