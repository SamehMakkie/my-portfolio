"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const skills = [
  "React",
  "Next JS",
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "Redux",
  "Tailwind CSS",
  "Git",
  "Github",
  "Firebase",
  "Node JS",
  "Express",
  "API Integration",
];

const Skills = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const skillsParentRef = useRef<HTMLDivElement>(null);
  const isHeadingView = useInView(headingRef, { once: true });
  const isSkillsView = useInView(skillsParentRef, { once: true });

  return (
    <section className="w-full min-h-screen flex flex-col px-5 sm:px-16 py-28 md:px-32">
      <motion.h2
        ref={headingRef}
        style={{
          transform: isHeadingView ? "none" : "translateY(600px)",
          opacity: isHeadingView ? 1 : 0,
          transition: "all 1s",
        }}
        className="text-black text-[30vw] sm:text-[17vw] font-bold">
        Skills
      </motion.h2>
      <motion.div
        ref={skillsParentRef}
        style={{
          transform: isSkillsView ? "none" : "translateY(400px)",
          opacity: isSkillsView ? 1 : 0,
          transition: "all 1s",
        }}
        className="flex gap-5 flex-wrap gap-y-10 items-center">
        <div className="w-[325px] hidden lg:block"></div>
        {skills.map((skill, index) => (
          <div
            key={index}
            className="h-fit border border-black text-black text-md px-10 py-3 rounded-full">
            {skill}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
