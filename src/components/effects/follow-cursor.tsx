"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface FollowCursorProps {
  size?: number;
  color?: string;
}

export default function FollowCursor({
  size = 8,
  color = "#6ece9d",
}: FollowCursorProps) {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [isVisible]);

  return (
    <motion.div
      className="pointer-events-none fixed hidden md:block"
      animate={{ x: position.x - size / 2, y: position.y - size / 2 }}
      transition={{
        type: "spring",
        mass: 0.5,
        damping: 20,
        stiffness: 300,
      }}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        zIndex: 9999,
        backgroundColor: color,
        opacity: isVisible ? 0.9 : 0,
      }}
    />
  );
}
