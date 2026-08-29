"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

import { cn } from "@/utils/cn";

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionOffset[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directionOffset[direction] }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.38, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function TextReveal({ children, className = "", as = "span" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const Component = motion[as] || motion.span;

  return (
    <Component
      ref={ref}
      initial={{ y: "100%" }}
      animate={isInView ? { y: 0 } : { y: "100%" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.38, 0.98] }}
      className={cn("inline-block overflow-hidden", className)}
    >
      {children}
    </Component>
  );
}
