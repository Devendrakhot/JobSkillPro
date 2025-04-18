import React from 'react';
import { motion } from 'framer-motion';

const CareerPath = () => {
  return (
    <div className="relative w-full h-[800px]">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 800 800"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M 100 700 Q 400 700 400 600 Q 400 500 400 400 Q 400 300 400 200 Q 400 100 700 100"
          stroke="#fb8200"
          strokeWidth="4"
          fill="none"
          className="curved-path"
        />
      </svg>
    </div>
  );
};

export default CareerPath;