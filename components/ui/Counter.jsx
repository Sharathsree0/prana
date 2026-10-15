"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

// Counts from 0 to `to` when scrolled into view.
export default function Counter({ to, decimals = 0, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (inView) animate(0, to, { duration: 1.8, ease: "easeOut", onUpdate: setValue });
  }, [inView, to]);

  return <b ref={ref}>{value.toFixed(decimals)}{suffix}</b>;
}
