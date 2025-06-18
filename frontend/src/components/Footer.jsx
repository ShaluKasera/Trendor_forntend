import React from "react";
import { motion } from "framer-motion";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { RiFacebookCircleLine } from "react-icons/ri";

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay },
  }),
};

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-gray-200 px-6 py-12 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Connect Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0.1}
        >
          <p className="Goldman text-2xl md:!text-4xl mb-3">Connect</p>
          <p className="font-segoe text-sm md:text-base mb-4">
            Share your vision through engaging video content.
          </p>
          <ul className="flex gap-4 text-3xl md:text-4xl">
            <li className="transition-transform duration-300 hover:-translate-y-2 hover:text-yellow-300">
              <TbBrandLinkedin />
            </li>
            <li className="transition-transform duration-300 hover:-translate-y-2 hover:text-yellow-300">
              <FaInstagram />
            </li>
            <li className="transition-transform duration-300 hover:-translate-y-2 hover:text-yellow-300">
              <FiTwitter />
            </li>
            <li className="transition-transform duration-300 hover:-translate-y-2 hover:text-yellow-300">
              <RiFacebookCircleLine />
            </li>
          </ul>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0.3}
        >
          <h2 className="Goldman text-2xl md:!text-4xl mb-3">Contact Us</h2>
          <p className="font-segoe text-sm md:text-base">ceo@gausej.tech</p>
        </motion.div>

        {/* Feedback Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0.5}
        >
          <h2 className="Goldman text-2xl md:!text-4xl mb-3">Feedback</h2>
          <form className="bg-gray-200 rounded-xl p-4 flex flex-col gap-3">
            <input
              type="text"
              placeholder="Name"
              className="px-3 py-2 rounded-md text-black input"
            />
            <textarea
              placeholder="Message"
              className="px-3 py-2 rounded-md text-black resize-none h-24 input"
            ></textarea>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 transition-all duration-300 py-2 !rounded"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
