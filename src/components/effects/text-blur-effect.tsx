"use client";

import { motion } from "motion/react";

interface TextBlurEffectProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span";
}

export default function TextBlurEffect({
  children,
  className,
}: TextBlurEffectProps) {
  return (
    <>
      {children.split("").map((char, i) => (
        <motion.span
          style={{ display: "inline-block", whiteSpace: "pre" }}
          key={i}
          initial={{ opacity: 0, filter: "blur(32px)", scale: 0.9, y: 20 }}
          animate={{ opacity: 1, filter: "blur(0)", scale: 1, y: 0 }}
          transition={{ delay: i * 0.035, ease: [1, 0, 0, 1], duration: 0.7 }}
          className={className}
        >
          {char}
        </motion.span>
      ))}
    </>
  );
}
