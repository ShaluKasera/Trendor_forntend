import React from "react";
import { motion } from "framer-motion";

const Section1 = () => {
  const content = [
    {
      img: "https://images.unsplash.com/photo-1682056598904-9aa7ea5e8991?auto=format&fit=crop&w=656&h=528",
      title:"Upload Your Videos",
      text: "Pitch your startup idea with clarity and impact.",
    },
    {
      img: "https://images.unsplash.com/photo-1699962699910-b2a5e9d44757?auto=format&fit=crop&w=656&h=528",
       title:"Join Our Community",
      text: "Attract investors with visual storytelling.",
    },
    {
      img: "https://images.unsplash.com/photo-1694109016554-9a52bff4e9f1?auto=format&fit=crop&w=656&h=504",
       title:"Share your story and attract interest from investors and collaborators.",
      text: "Build trust by showcasing your team and vision.",
    },
  ];

  return (
    <div className="bg-[#202021] md:p-5 py-5 md:px-16 text-gray-200">
      <p className="font-bold text-3xl md:text-4xl lg:text-5xl Goldman text-center mb-4">
        Video Content Upload
      </p>
      <p className="text-center font-segoe px-2 mb-16 max-w-xl mx-auto">
        Easily share your videos with entrepreneurs, investors, and startups on
        our platform.
      </p>

      <div className="flex gap-3 flex-col md:flex-row items-stretch">
        {content.map((item, index) => (
          <div
            key={index}
            className="w-[80%] mx-auto md:w-1/3 flex flex-col rounded-t-3xl overflow-hidden"
          >
            <div className="h-[200px] md:h-[250px] overflow-hidden rounded-t-3xl">
              <motion.img
                src={item.img}
                alt="section-img"
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
              />
            </div>
            <div className="bg-white font-segoe text-gray-600 px-4 py-4 md:h-[200px] h-[150px] text-center  items-center flex flex-col justify-center  min-h-[100px]">
              <p className="Goldman text-gray-900 text-xl font-semibold">
                {item.title}
              </p>
              <p className="text-sm">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;
