import React from "react";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/home-section1.jpeg')" }}
    >
      {/* Black overlay only on the background */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0 " />
      <iframe
        className="absolute top-4 left-4 w-32 h-20 md:w-96 md:h-56  rounded-lg z-10"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Top Left Video"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <iframe
        className="absolute top-4 right-4 w-32 h-20 md:w-96 md:h-56  rounded-lg z-10"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Top Right Video"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <iframe
        className="absolute bottom-4 left-4 w-32 h-20 md:w-96 md:h-56  rounded-lg z-10"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Bottom Left Video"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <iframe
        className="absolute bottom-4 right-4 w-32 h-20 md:w-96 md:h-56 rounded-lg z-10"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Bottom Right Video"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* Centered Text Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center max-w-3xl w-full px-4">
          <p className="text-white text-3xl md:text-4xl lg:text-6xl font-extrabold Goldman mb-6 leading-tight">
            Showcase Your Vision with Engaging Videos
          </p>
          <p className="text-white font-segoe text-sm md:text-xl mb-8">
            Connect entrepreneurs, startups, and investors through impactful
            video content and innovative ideas.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/"
              className="!no-underline text-white border border-transparent px-6 py-2 rounded-full text-lg hover:bg-yellow-300 hover:!text-black transition-all duration-300 font-bold"
            >
              Upload
            </Link>
            <Link
              to="/"
              className="!no-underline text-white   px-9 py-2 rounded-full text-lg font-bold"
            >
              Join
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
