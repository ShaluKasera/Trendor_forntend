import React from "react";
import { motion } from "framer-motion";
import { MdOutlineStar } from "react-icons/md";
import img1 from "/images/home-section1.jpeg";


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay },
  }),
};

const Section5 = () => {
  return (
    <div className="container mx-auto px-4 md:!py-12 py-0 mb-10">
     
      <motion.div
        className="flex flex-col md:flex-row gap-0 md:h-[400px]"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        
        <div
          className="w-full md:w-1/2 h-[250px] md:h-full bg-cover bg-center shadow-md"
          style={{ backgroundImage: `url(${img1})` }}
        ></div>

        <div className="w-full md:w-1/2 h-[250px] md:h-full bg-green-700 p-6 md:p-8 text-white flex flex-col justify-center items-center shadow-md">
          <ul className="flex justify-center gap-2 text-2xl mb-4">
            {[...Array(5)].map((_, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.2, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MdOutlineStar />
              </motion.li>
            ))}
          </ul>
          <p className="text-center text-sm md:text-base font-segoe max-w-md">
            Amazing platform for sharing my pitch and connecting with investors. Highly recommend for startups!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Section5;
