import React from 'react';
import { motion } from 'framer-motion';

const Section2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true, amount: 1 }}
      className="w-[80%] max-w-[1200px] h-[300px] md:h-[400px] md:mb-32 mb-20 bg-cover bg-center mt-5 rounded-3xl mx-auto"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1694878982074-d8d4bc4581b9?auto=format&fit=crop&w=1080&h=1054')",
      }}
    >
    </motion.div>
  );
};

export default Section2;
