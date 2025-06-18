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
    <div className="px-4 md:px-10 lg:px-24 py-20 overflow-hidden bg-white">
     
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
        className="text-center font-segoe text-gray-500 !mb-20 max-w-3xl mx-auto"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.2}
      >
        A platform for entrepreneurs to share their video content.
      </motion.p>

    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:!px-32 md:!px-20 px-2  md:!gap-16 gap-10">
        {/* Block 1 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
        >
          <div
            className="h-[250px] md:h-[400px] bg-cover bg-center rounded-3xl shadow-md mb-4"
            style={{ backgroundImage: `url(${img1})` }}
          ></div>
          <p className="text-xl md:text-2xl font-bold text-gray-800 mb-2 Goldman">
            Startup Pitches
          </p>
          <p className="text-gray-500 text-sm md:text-base font-segoe">
            Watch innovative pitches from startups and entrepreneurs today.
          </p>
        </motion.div>

        {/* Block 2 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.4}
        >
          <div
            className="h-[250px] md:h-[400px] bg-cover bg-center rounded-3xl shadow-md mb-4"
            style={{ backgroundImage: `url(${img2})` }}
          ></div>
          <p className="text-xl md:text-2xl font-bold text-gray-800 mb-2 Goldman">
            Product Demos
          </p>
          <p className="text-gray-500 text-sm md:text-base font-segoe">
            Explore engaging product demonstrations from various businesses.
          </p>
        </motion.div>

        {/* Block 3 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.5}
        >
          <div
            className="h-[250px] md:h-[400px] bg-cover bg-center rounded-3xl shadow-md mb-4"
            style={{ backgroundImage: `url(${img2})` }}
          ></div>
          <p className="text-xl md:text-2xl font-bold text-gray-800 mb-2 Goldman">
            Podcasts Available
          </p>
          <p className="text-gray-500 text-sm md:text-base font-segoe">
            Listen to insightful podcasts from industry experts and innovators.
          </p>
        </motion.div>

        {/* Block 4 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.6}
        >
          <div
            className="h-[250px] md:h-[400px] bg-cover bg-center rounded-3xl shadow-md mb-4"
            style={{ backgroundImage: `url(${img1})` }}
          ></div>
          <p className="text-xl md:text-2xl font-bold text-gray-800 mb-2 Goldman">
            Join Us
          </p>
          <p className="text-gray-500 text-sm md:text-base font-segoe">
            Sign up to upload and share your video content.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Section4;
