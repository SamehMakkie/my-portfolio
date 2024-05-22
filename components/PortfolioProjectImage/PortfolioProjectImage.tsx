"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

interface IProjectImageProps {
  imgSrc: string;
  altText: string;
  maxW?: string;
  isRounded?: boolean;
}

const PortfolioProjectImage: React.FC<IProjectImageProps> = ({
  imgSrc,
  altText,
  maxW = "",
  isRounded = true,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const isImgInView = useInView(imgRef, { once: true });

  const maximumWidth = maxW ? maxW : "lg:max-w-[70%]";
  const roundedStyles = isRounded
    ? "rounded-[45px] sm:rounded-[75px] lg:rounded-[100px] "
    : "";

  return (
    <motion.img
      ref={imgRef}
      style={{
        transform: isImgInView ? "none" : "translateY(200px)",
        opacity: isImgInView ? 1 : 0,
        transition: "all 1s",
      }}
      src={imgSrc}
      alt={altText}
      className={"w-full object-cover " + roundedStyles + maximumWidth}
    />
  );
};

export default PortfolioProjectImage;
