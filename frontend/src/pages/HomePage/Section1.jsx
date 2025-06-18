import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const Section1 = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/home-section1.jpeg')" }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      {/* 4 Corner Videos */}
      {[
        { pos: "top-4 left-4", title: "Top Left" },
        { pos: "top-4 right-4", title: "Top Right" },
        { pos: "bottom-4 left-4", title: "Bottom Left" },
        { pos: "bottom-4 right-4", title: "Bottom Right" },
      ].map((v, i) => (
        <motion.iframe
          key={i}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 + 0.3, duration: 0.6 }}
          className={`absolute ${v.pos} w-32 h-20 md:w-96 md:h-56 rounded-lg z-10`}
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title={`${v.title} Video`}
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ))}

      {/* Center Content */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-10"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center max-w-3xl w-full px-4">
          <motion.p
            className="text-white text-3xl md:text-4xl lg:text-6xl font-extrabold Goldman mb-6 leading-tight"
            variants={fadeInUp}
          >
            Showcase Your Vision with Engaging Videos
          </motion.p>

          <motion.p
            className="text-white font-segoe text-sm md:text-xl mb-8"
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Connect entrepreneurs, startups, and investors through impactful
            video content and innovative ideas.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            variants={fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/"
              className="!no-underline text-white border border-transparent px-6 py-2 rounded-full text-lg hover:bg-yellow-300 hover:!text-black transition-all duration-300 font-bold"
            >
              Upload
            </Link>
            <Link
              to="/"
              className="!no-underline text-white px-9 py-2 rounded-full text-lg font-bold"
            >
              Join
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Section1;
