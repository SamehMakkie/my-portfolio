"use client";
import React, { useRef } from "react";
import ProjectSection from "./ProjectSection/ProjectSection";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Sweetify",
    titleSpan: "",
    imgSrc: "/sweetify.png",
    altImgText: "Sweetify hero image",
    description:
      "Project 1Sweetify, a sweet sharing recipe website, caters specifically to chefs. Designed with a beautiful custom aesthetic and meticulously crafted code utilizing modern web technologies like Next.js (React), TypeScript, Tailwind CSS, and Firebase services (Authentication and Cloud storage), Sweetify prioritizes both a delightful user experience and robust functionality. Complex features like advanced recipe search with filtering and a comprehensive dashboard for recipe and user management empower chefs to curate and share their creations with ease.",
    githubLink: "https://github.com/SamehMakkie/sweetify",
    liveLink: "https://sweetify-navy.vercel.app/",
  },
  {
    title: "DoP",
    titleSpan: "(Dream of Pixels)",
    imgSrc: "/DoP Shrank Logo.png",
    altImgText: "DoP (Dream of Pixels) logo",
    maxW: "max-w-[512px]",
    isImgRounded: false,
    description:
      "Empower PC gamers with DoP, a digital store built with React & Next.js for a modern, responsive design. Advanced search with intricate filtering lets them find their perfect game. Authentication, robust validation, and modern tech create a seamless experience.",
    githubLink: "https://github.com/SamehMakkie/dop-front-end",
    liveLink: "",
  },
  {
    title: "Real estate",
    titleSpan: "",
    imgSrc: "/real-estate.jpeg",
    altImgText: "Real estate image",
    description:
      "Unleash powerful real estate search with this Next.js & TypeScript website. Secure Firebase auth, seamless image uploads, and Algolia's AI-powered search empower users. Owners add & manage listings via a user-friendly dashboard.",
    githubLink: "https://github.com/SamehMakkie/real-estate",
    liveLink: "",
  },
];

const PortfolioProjects = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isHeadingView = useInView(headingRef, { once: true });

  return (
    <div className="w-full flex flex-col p-20 pb-48 sm:p-24 sm:pb-56 md:p-44 md:pb-72 gap-[200px] md:gap-[384px] rounded-[150px] sm:rounded-[200px] md:rounded-[300px] bg-black white-color-toggle">
      <motion.h2
        ref={headingRef}
        style={{
          transform: isHeadingView ? "none" : "translateY(200px)",
          opacity: isHeadingView ? 1 : 0,
          transition: "all 1s",
        }}
        className="text-[6vw] sm:text-[5vw] md:text-[6vw] lg:text-[75px] font-bold text-white white-color-toggle">
        Highlighted <br />
        <span className="font-light">Projects</span>
      </motion.h2>
      <div className="flex flex-col gap-96 items-center white-color-toggle">
        {projects.map((project, index) => (
          <ProjectSection key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioProjects;
