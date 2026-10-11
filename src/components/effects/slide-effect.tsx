"use client";

import { motion, type MotionProps } from "motion/react";

interface SlideEffectProps extends MotionProps {
  direction?: "top" | "bottom" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
  isSpring?: boolean;
  children: React.ReactNode;
}

export default function SlideEffect({
  children,
  direction = "top",
  delay = 0.1,
  duration = 0.7,
  isSpring = true,
  className,
}: SlideEffectProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: direction === "top" ? 70 : direction === "bottom" ? -70 : 0,
        x: direction === "left" ? 70 : direction === "right" ? -70 : 0,
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        type: isSpring ? "spring" : "tween",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
