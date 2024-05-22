"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const ProfileCard = () => {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true });

  return (
    <motion.main
      ref={cardRef}
      style={{
        transform: isCardInView ? "none" : "translateY(600px)",
        opacity: isCardInView ? 1 : 0,
        transition: "all 1s",
      }}
      className="max-w-[765px] flex flex-col gap-11 py-[80px] px-[40px] sm:p-[80px] md:p-[90px] lg:p-[100px] bg-black rounded-t-[80px] rounded-b-[50px] sm:rounded-t-[150px] sm:rounded-b-[80px] white-color-toggle">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white z-50">
        Sameh Makkie
      </h2>
      <p className="text-md md:text-lg lg:text-xl text-white leading-[30px] md:leading-[40px] lg:leading-[50px] z-50 white-color-toggle">
        Front-End Developer (React & Next.js) with a passion for building
        user-centric web applications. Proven ability to develop
        high-performance, scalable, and maintainable React components and
        Next.js applications. Skilled in crafting intuitive UIs, implementing
        robust features, and adhering to best practices for clean and
        maintainable code.
      </p>
    </motion.main>
  );
};

export default ProfileCard;
