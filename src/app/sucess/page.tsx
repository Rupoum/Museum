"use client";
import React from "react";
import { motion } from "framer-motion";

const SuccessPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col justify-center items-center h-screen bg-green-100 text-green-800 text-2xl font-bold"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16 mb-4 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
      <div>Success</div>
    </motion.div>
  );
};

export default SuccessPage;
