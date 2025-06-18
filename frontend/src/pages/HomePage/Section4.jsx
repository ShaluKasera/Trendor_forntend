import React from "react";
import { motion } from "framer-motion";
import img1 from "/images/section-2.jpeg";
import img2 from "/images/home-section1.jpeg";
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay },
  }),
};
const Section4 = () => {
  return (
    <div className="px-3 py-20 overflow-hidden">
    <motion.p
           className="font-bold text-3xl md:text-4xl lg:text-5xl Goldman text-center text-gray-800 mb-4"
           variants={fadeInUp}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           custom={0.1}
         >
           Video Showcase
         </motion.p>
   
         <motion.p
           className="text-center font-segoe text-gray-500 mb-16 max-w-3xl mx-auto"
           variants={fadeInUp}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           custom={0.2}  
         >
           A platform for entrepreneurs to share their video content.
         </motion.p>
      
    </div>
  )
}

export default Section4
