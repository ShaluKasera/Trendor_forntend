import React, { useState } from 'react';

import { motion, AnimatePresence } from "framer-motion";
const images = [
  "https://images.unsplash.com/photo-1614173644825-7be93344f65e?auto=format&fit=crop&w=945&h=922", 
  "https://images.unsplash.com/photo-1694878982234-58d53e0d1655?auto=format&fit=crop&w=656&h=640",
  "https://images.unsplash.com/photo-1585592049275-66497dae73d4?auto=format&fit=crop&w=656&h=640",
  "https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=640,fit=crop/cdn-builder-placeholders/asset-manager/1JM7_xehCVA.jpeg?w=1366&q=70&auto=format",
  "https://images.unsplash.com/photo-1495488170890-ee9e49ff335d?auto=format&fit=crop&w=945&h=922",
  ""
];

const Section1 = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomOut, setZoomOut] = useState(false);

  const handleClose = () => {
    setZoomOut(true);
    setTimeout(() => {
      setSelectedImage(null);
      setZoomOut(false);
    }, 300); 
  };

  return (
    <div className='container py-5'>
      <p className="font-bold text-3xl md:text-4xl lg:text-5xl Goldman text-center text-gray-800 mb-3">
        Gallery
      </p>
      <p className='text-center font-segoe text-gray-500 mb-16 max-w-3xl mx-auto'>
        Explore innovative pitches, demos, podcasts and content from entrepreneurs.
      </p>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">

        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(img)}
            className="overflow-hidden mt-5 rounded-xl md:h-[480px] md:!w-[500px] shadow-lg   cursor-pointer"
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-auto transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedImage}
              alt="Zoomed"
              className="max-h-[90vh] max-w-[90vw] object-contain"
              initial={{ scale: 0.8 }}
              animate={{ scale: zoomOut ? 1.1 : 1 }}
              exit={{ scale: 1.3 }}
              transition={{ duration: 0.3 }}
            />
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 text-white text-2xl  md:!text-4xl font-bold hover:!text-yellow-500"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Section1;
