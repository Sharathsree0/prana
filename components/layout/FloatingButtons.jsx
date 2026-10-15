"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/data/site";
import { Icons } from "@/components/ui/Icons";

// Floating WhatsApp button + back-to-top arrow (shows after scrolling).
export default function FloatingButtons() {
  const [showUp, setShowUp] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowUp(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="float">
      <motion.a className="wa" href={site.whatsappLink} aria-label="Chat on WhatsApp"
        animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
        {Icons.whatsapp}
      </motion.a>
      <AnimatePresence>
        {showUp && (
          <motion.button className="up" aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑</motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
