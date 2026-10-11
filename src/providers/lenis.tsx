"use client";

import { ReactLenis } from "lenis/react";
import { LazyMotion, domAnimation } from "motion/react";
import FollowCursor from "@/components/effects/follow-cursor";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LazyMotion features={domAnimation}>
      <ReactLenis root options={{ duration: 1.3 }}>
        <FollowCursor />
        {children}
      </ReactLenis>
    </LazyMotion>
  );
}
