"use client";
import React, { useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

const MouseFollower: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringTarget, setIsHoveringTarget] = useState(false);
  const [showMouseFollower, setShowMouseFollower] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    // Check if the device has a fine pointer (e.g., a mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setShowMouseFollower(mediaQuery.matches);

    // Add event listener to update the state if the media query changes
    const handleMediaChange = (event: MediaQueryListEvent) => {
      setShowMouseFollower(event.matches);
    };
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  useEffect(() => {
    if (!showMouseFollower) return;

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });

      const elementUnderCursor = document.elementFromPoint(event.clientX, event.clientY);
      if (elementUnderCursor && elementUnderCursor.classList.contains('white-color-toggle')) {
        setIsHoveringTarget(true);
      } else {
        setIsHoveringTarget(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showMouseFollower]);

  useEffect(() => {
    if (!showMouseFollower) return;

    const controlsX = animate(x, mousePosition.x, { type: "spring", stiffness: 300, damping: 30 });
    const controlsY = animate(y, mousePosition.y, { type: "spring", stiffness: 300, damping: 30 });

    return () => {
      controlsX.stop();
      controlsY.stop();
    };
  }, [mousePosition, showMouseFollower]);

  if (!showMouseFollower) {
    return null;
  }

  return (
    <motion.div
      className={`h-5 w-5 rounded-full fixed ${isHoveringTarget ? 'bg-white' : 'bg-black'}`}
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        pointerEvents: "none"
      }}
    />
  );
};

export default MouseFollower;
