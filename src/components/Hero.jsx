import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center mt-20 px-6 py-10 sm:py-16 sm:px-12 gap-8 sm:gap-12 relative overflow-hidden">
      
      {/* Hero Left Side */}
      <motion.div
        className="w-full sm:w-1/2 text-center sm:text-left ml-0 sm:ml-20 space-y-4 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Floating Leaf Positioned near heading */}
        <motion.img
          src={assets.leaf}
          alt="Leaf"
          className="absolute top-0 right-0 w-30 sm:w-20"
          initial={{ x: 100, y: -40, rotate: -30, opacity: 0 }}
          animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        <div className="mb-4">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold patua-one-regular"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Healthy
          </motion.h1>
          <motion.h1
            className="text-4xl sm:text-5xl font-bold patua-one-regular"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Fresh <span className="text-[#e09d69]">Fruits!</span>
          </motion.h1>
        </div>

        <motion.p
          className="font-light text-xl sm:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Order Now For Fresh Healthy Life
        </motion.p>

        <motion.p
          className="text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Healthy and yummy food for fresh morning breakfast.
          <br />
          Eat daily for good health and mind. Order now and get
          <br />
          <strong>20% off</strong> on your first order.
        </motion.p>

        <motion.a
          href="#"
          className="inline-block bg-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-600 transition-all"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Order Now
        </motion.a>
      </motion.div>

      {/* Hero Right Side */}
      <div className="w-full sm:w-1/2 flex justify-center relative z-0">
        <motion.img
          src={assets.fruit_plate}
          alt="Fruit Plate"
          className="w-full max-w-sm sm:max-w-md h-auto object-contain"
          initial={{ x: 200, rotate: 360, opacity: 0 }}
          animate={{ x: 0, rotate: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default Hero;
