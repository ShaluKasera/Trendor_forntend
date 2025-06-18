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

const Section3 = () => {
  return (
    <div className="bg-[#f9f7e1] px-3 py-20 overflow-hidden">
     
      <motion.p
        className="font-bold text-3xl md:text-4xl lg:text-5xl Goldman text-center text-gray-800 mb-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.1}
      >
        Video Content Hub
      </motion.p>

      <motion.p
        className="text-center font-segoe text-gray-500 mb-16 max-w-3xl mx-auto"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.2}  
      >
        Connect entrepreneurs, startups, and investors through engaging video
        content and showcase your innovative ideas.
      </motion.p>

     
      <div className="flex flex-col lg:flex-row gap-10 items-center mb-20 justify-center">
        {/* Card 1 */}
        <motion.div
          className="relative w-full max-w-md lg:max-w-none lg:w-[40%] md:h-[320px] h-[220px] bg-cover bg-center rounded-3xl shadow-md"
          style={{ backgroundImage: `url(${img1})` }}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
        >
          <motion.div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 bg-white h-[180px] p-3 md:!p-10  text-center shadow-xl w-[90%] ">
            <p className="text-xl md:text-2xl font-bold text-gray-800 mb-2 Goldman">
              Investor Engagement
            </p>
            <p className="text-gray-500 text-sm md:text-base font-segoe">
              Attract investors by showcasing your projects through captivating
              video content and interactive presentations.
            </p>
          </motion.div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="relative w-full max-w-md lg:max-w-none lg:w-[40%] md:h-[320px] h-[220px] bg-cover bg-center rounded-3xl shadow-md mt-24 lg:mt-0"
          style={{ backgroundImage: `url(${img2})` }}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.5}
        >
          <motion.div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 bg-white h-[180px] p-3 md:!p-10  text-center shadow-xl w-[90%] ">
            <p className="text-xl md:text-2xl font-bold text-gray-800 mb-2 Goldman">
              Upload Your Videos
            </p>
            <p className="text-gray-500 text-sm md:text-base font-segoe">
              Easily upload pitches, product demos, and podcasts to share with
              potential investors and audiences.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section3;
