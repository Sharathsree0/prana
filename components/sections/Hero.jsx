"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site, heroWords, heroBanners } from "@/data/site";
import Orbit from "@/components/ui/Orbit";

const SLIDE_SECONDS = 5; // change to 3 for faster slides

export default function Hero() {
  const [slide, setSlide] = useState(0);

  // Auto-advance the banner. Resets whenever the visitor clicks a dot.
  useEffect(() => {
    if (heroBanners.length < 2) return;
    const id = setInterval(() => setSlide((s) => (s + 1) % heroBanners.length), SLIDE_SECONDS * 1000);
    return () => clearInterval(id);
  }, [slide]);

  return (
    <header className="hero">
      {/* Banner slideshow (same photos in light and dark mode) */}
      <div className="hero-bg">
        <AnimatePresence>
          <motion.div
            key={slide}
            className="hero-slide"
            style={{ backgroundImage: `url(${heroBanners[slide]})` }}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          />
        </AnimatePresence>
        <div className="hero-overlay" />
      </div>

      <div className="wrap">
        <div>
          <h1>
            {heroWords.map((word, i) => (
              <motion.span key={i} className="hw" style={{ color: i > 2 ? "var(--g2)" : undefined }}
                initial={{ opacity: 0, y: 40, rotate: 3 }} animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.6 }}>{word}</motion.span>
            ))}
          </h1>
          <motion.p className="lead" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
            Verified nurses and caregivers for your loved ones across Kerala and Tamil Nadu, available 24/7.
          </motion.p>
          <motion.div className="row" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="btn" href={site.whatsappLink}>Chat on WhatsApp</motion.a>
            <a className="btn line" href={`tel:${site.phone}`}>Call {site.phone}</a>
          </motion.div>
          <motion.div className="badges" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }}>
            <span>★ 4.9 care rating</span><span>500+ families</span><span>24/7 support</span>
          </motion.div>
        </div>
        <Orbit />
      </div>

      {/* Slide dots */}
      {heroBanners.length > 1 && (
        <div className="hero-dots">
          {heroBanners.map((_, i) => (
            <button key={i} className={i === slide ? "active" : ""} onClick={() => setSlide(i)} aria-label={`Show banner ${i + 1}`} />
          ))}
        </div>
      )}
    </header>
  );
}