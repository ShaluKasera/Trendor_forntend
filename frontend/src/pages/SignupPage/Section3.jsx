import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay },
  }),
};

const Section3 = () => {
  const images = [
    "https://images.unsplash.com/photo-1696332367547-578f572f2cf8?auto=format&fit=crop&w=656&h=448",
    "https://images.unsplash.com/photo-1653753336046-72a1d70bb9f7?auto=format&fit=crop&w=656&h=448",
  ];

  return (
    <div className="px-4 md:!px-16 py-10 bg-white h-[900px] md:h-[500px] ">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Text Section */}
        <div className="w-full md:w-1/3 ">
          <p className="font-bold text-3xl md:text-4xl lg:text-5xl Goldman text-gray-800 mb-4">
            Empowering Entrepreneurs Together
          </p>
          <p className="text-gray-500 font-segoe mb-6 max-w-md">
            A platform for startups and investors to share and discover
            innovative video content and connect with each other.
          </p>
        </div>

        {/* Image Grid Section */}
        <div className="w-full md:w-2/3 grid md:grid-cols-2 grid-col-1 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.3 + i * 0.1}
            >
              <div
                className="h-[250px] md:h-[400px] bg-cover bg-center rounded-3xl shadow-md"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
