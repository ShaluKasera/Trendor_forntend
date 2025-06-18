import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 text-center">
      {/* Sad Emoji */}
      <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-yellow-400 relative flex items-center justify-center shadow-[0_0_40px_#facc15]">
        {/* Eyes */}
        <div className="absolute w-4 h-4 md:w-5 md:h-5 bg-black rounded-full left-1/4 top-1/3"></div>
        <div className="absolute w-4 h-4 md:w-5 md:h-5 bg-black rounded-full right-1/4 top-1/3"></div>

        {/* Sad Mouth */}
        <div className="absolute w-12 h-12 md:w-16 md:h-16 border-b-4 border-black rounded-full bottom-5 rotate-180"></div>
      </div>

 
      <p className="text-white text-xl md:text-2xl !mt-10">Oops! We couldn’t find that page.</p>
      <p className="text-gray-400 mt-1 text-sm md:text-base max-w-md">
        Even our emoji is sad. Let's get you back on track.
      </p>

      
      <Link
        to="/"
        className="mt-6 inline-block border-2 border-yellow-400 !text-yellow-400 px-6 py-2 rounded-lg text-lg font-semibold hover:bg-yellow-400 hover:!text-black !no-underline transition duration-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default PageNotFound;
