"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ show }: { show: boolean }) => {
  const exitAnimation = {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="flex items-center justify-center h-screen bg-black fixed top-0 left-0 w-full z-50"
          exit={exitAnimation}
        >
          <svg
            className="loader"
            width="100"
            height="100"
            viewBox="0 0 114 113"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_12_16)">
              <path
                className="traceable"
                d="M5.53784 54.8264H57.54L101.335 5.53772H5.53784V54.8264V82.7505L57.54 106.172L101.335 83.9273L57.54 54.8264"
                fill="black"
              />
              <path
                className="traceable"
                d="M5.53784 54.8264H57.54L101.335 5.53772H5.53784V54.8264ZM5.53784 54.8264V82.7505L57.54 106.172L101.335 83.9273L57.54 54.8264"
                stroke="#CCCCCC"
                strokeWidth="11.0755"
                strokeMiterlimit="10"
              />
              <path
                className="traceable"
                d="M101.335 13.5453L65.5422 53.3922L101.335 77.9161"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_12_16">
                <rect width="113.665" height="112.311" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
