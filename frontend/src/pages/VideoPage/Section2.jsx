import React from "react";
import { motion } from "framer-motion";
import img1 from "/images/section-2.jpeg";
import img2 from "/images/home-section1.jpeg";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay },
  }),
};

const Section2 = () => {
  return (
    <div className="px-4 container md:px-10 lg:px-24 py-20 overflow-hidden bg-white">
      {/* Heading */}
      <motion.p
        className="font-bold text-3xl md:text-4xl lg:text-5xl Goldman text-center text-gray-800 mb-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.1}
      >
        Video Content
      </motion.p>

      <motion.p
        className="text-center font-segoe text-gray-500 !mb-20 max-w-lg mx-auto"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.2}
      >
        Upload and share your entrepreneurial video projects with ease.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {[img1, img2].map((img, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3 + i * 0.1}
          >
            <div
              className="h-[250px] md:h-[350px] bg-cover bg-center rounded-3xl shadow-md"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.5}
        >
          <p className="text-xl md:text-2xl text-center md:!text-start font-bold text-gray-800 mb-2 Goldman">
            Pitch Ideas
          </p>
          <p className="text-gray-500 text-center md:!text-start text-sm md:text-base font-segoe">
            Showcase your innovative business concepts and attract investors.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.6}
          className="text-center md:!text-end"
        >
          <Link
            to="/"
            className="!no-underline !text-gray-500 border-2 px-5 py-3 hover:!text-white transition-all duration-300 hover:bg-gray-600 rounded-4xl inline-block"
          >
            Upload
          </Link>
        </motion.div>
      </div>

      {/* Second Row - Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {[img2, img1].map((img, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.7 + i * 0.1}
          >
            <div
              className="h-[250px] md:h-[350px] bg-cover bg-center rounded-3xl shadow-md"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          </motion.div>
        ))}
      </div>

      {/* Second Row - Texts/Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.9}
        >
          <p className="text-xl md:text-2xl text-center md:!text-start font-bold text-gray-800 mb-2 Goldman">
            Product Demos
          </p>
          <p className="text-gray-500 text-sm text-center md:!text-start md:text-base font-segoe">
            Present your products effectively to engage potential customers.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1.0}
          className="text-center md:!text-end"
        >
          <Link
            to="/"
            className="!no-underline !text-gray-500 border-2 px-5 py-3 hover:!text-white transition-all duration-300 hover:bg-gray-600 rounded-4xl inline-block"
          >
            Share
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Section2;
