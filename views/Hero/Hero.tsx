"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const firstWord = "Sameh".split("");
  const secondWord = "Makkie".split("");

  return (
    <section className="w-full h-screen py-2 flex items-end">
      <div>
        <motion.h1
          initial={{ y: 500 }} // start from a lower position and invisible
          animate={{ y: 0 }} // animate to its original position and visible
          transition={{ duration: 1 }} // control the duration of the animation
          className="relative text-7xl sm:text-9xl lg:text-[256px] lg:leading-[235px] inline-block">
          {firstWord.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: 500 }}
              animate={{ y: 0 }}
              transition={{
                delay: index * 0.2,
                type: "spring",
                damping: 20,
                stiffness: 50,
              }}
              className="inline-block">
              {letter}
            </motion.span>
          ))}
          <br />
          {secondWord.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: 500 }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.05 + index * 0.2,
                type: "spring",
                damping: 20,
                stiffness: 50,
              }}
              className="inline-block">
              {letter}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
