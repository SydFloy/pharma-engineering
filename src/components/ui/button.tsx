"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as motion from "motion/react-m";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none select-none cursor-pointer capitalize",
  {
    variants: {
      variant: {
        default: "bg-primary text-black shadow-xs hover:opacity-95 active:opacity-80",
        secondary: "bg-muted text-black shadow-xs hover:bg-neutral-200 active:bg-neutral-300",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-black",
        ghost: "hover:bg-accent",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-4 py-2 has-[>svg]:px-3 text-[16px]",
        sm: "rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "px-5 py-3 rounded-xl text-[18px] has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const MotionButton = motion.create("button" as React.ElementType);
const MotionSlot = motion.create(Slot as React.ElementType);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Motion = asChild ? MotionSlot : MotionButton;

  return (
    <Motion
      initial={{ scale: 1 }}
      whileTap={{ scale: size === "lg" ? 1 : 0.93 }}
      transition={{ ease: [0, 1, 0, 1], delay: 0, duration: 0.03 }}
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...(props as any)}
    />
  );
}

export { Button, buttonVariants };
