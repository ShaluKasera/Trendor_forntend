import React from "react";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { RiFacebookCircleLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-gray-200 px-6 py-12 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Connect Section */}
        <div>
          <h2 className="Goldman text-2xl md:!text-4xl mb-3">Connect</h2>
          <p className="font-segoe text-sm md:text-base mb-4">
            Share your vision through engaging video content.
          </p>
          <ul className="flex gap-4 text-2xl md:text-3xl">
            <li className="hover:text-yellow-300 transition">
              <TbBrandLinkedin />
            </li>
            <li className="hover:text-yellow-300 transition">
              <FaInstagram />
            </li>
            <li className="hover:text-yellow-300 transition">
              <FiTwitter />
            </li>
            <li className="hover:text-yellow-300 transition">
              <RiFacebookCircleLine />
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="Goldman text-2xl md:!text-4xl mb-3">Contact Us</h2>
          <p className="font-segoe text-sm md:text-base">
            ceo@gausej.tech
          </p>
        </div>

        {/* Feedback Section */}
        <div>
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
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
