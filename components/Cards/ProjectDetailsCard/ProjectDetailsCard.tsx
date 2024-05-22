"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

interface IProjectDetailsCardProps {
  title: string;
  titleSpan: string;
  description: string;
  githubLink: string;
  liveLink: string;
}

const ProjectDetailsCard: React.FC<IProjectDetailsCardProps> = ({
  title,
  titleSpan,
  description,
  githubLink,
  liveLink,
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const isDivInView = useInView(divRef, { once: true });

  return (
    <motion.div
      ref={divRef}
      style={{
        transform: isDivInView ? "none" : "translateY(200px)",
        opacity: isDivInView ? 1 : 0,
        transition: "all 1s",
      }}
      className="max-w-[594px] flex flex-col gap-5 lg:gap-10">
      <h2 className="text-white text-[32px] sm:text-[4.5vw] md:text-5xl font-bold">
        {title}{" "}
        <span className="font-light text-[20px] sm:text-[2.8vw] md:text-3xl">
          {titleSpan}
        </span>
      </h2>
      <p className="text-white text-[18px] sm:text-[2.1vw] md:text-xl leading-[35px] sm:leading-[30px] md:leading-[40px] font-light">
        {description}
      </p>
      <div className="w-full flex gap-5">
        <Link href={githubLink} target="_blank">
          <button className="btn btn-outline text-white hover:bg-white hover:text-black">
            <FaGithub className="h-4 w-4 md:h-6 md:w-6" /> Code
          </button>
        </Link>
        {liveLink && (
          <Link href={liveLink} target="_blank">
            <button className="btn btn-outline text-white hover:bg-white hover:text-black">
              <HiOutlineExternalLink className="h-4 w-4 md:h-6 md:w-6" /> Demo
            </button>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectDetailsCard;
