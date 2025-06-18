import React from "react";
import { motion } from "framer-motion";
import img1 from "/images/Product-hunt-button.png";
import img2 from "/images/section-2.jpeg";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay },
  }),
};

const Section2 = () => {
  return (
    <div className="text-center p-3 md:p-10 bg-white overflow-hidden">
    
      <button
        className="w-52 h-14 bg-no-repeat bg-center bg-contain mx-auto mb-10"
        style={{ backgroundImage: `url(${img1})` }}
        aria-label="Product Hunt Button"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={0.1}
      >
        <span className="sr-only">Product Hunt</span>
      </button>

    
      <div className="flex flex-col-reverse lg:flex-row md:!p-10 p-2 items-center justify-center gap-10">
        {/* Left Text Content */}
        <motion.div
          className="w-full lg:w-1/2  text-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0.2}
        >
          <p className="font-bold text-3xl md:text-4xl lg:text-5xl Goldman mb-4">
            Empowering Entrepreneurs Through Video Content
          </p>
          <p className="text-base md:text-lg text-gray-500 font-segoe mb-6">
            At Gausej, we connect entrepreneurs, startups, and investors,
            providing a platform to share impactful video content, pitches,
            demos, and podcasts that inspire collaboration and drive innovation.
          </p>
          <p className="text-green-600 font-bold text-4xl md:text-5xl lg:text-6xl mb-0">
            20+
          </p>
          <p className="text-gray-500 text-lg font-segoe">Join Us</p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src={img2}
            alt="Entrepreneur Content"
            className="w-full h-auto rounded-3xl shadow-lg"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Section2;
