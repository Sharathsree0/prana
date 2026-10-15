"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { orbitChips, logoSrc } from "@/data/site";

// Hero artwork: company logo in the centre with service chips orbiting it.
export default function Orbit() {
  const [logoOk, setLogoOk] = useState(true); // false if /public/logo.png is missing

  return (
    <div className="orbit">
      <div className="ring" />

      <motion.div className="logo-orb" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
        {logoOk ? (
          <img src={logoSrc} alt="PranaHomeNursing logo" onError={() => setLogoOk(false)} />
        ) : (
          <span className="logo-fallback"><b>Prana</b>Home</span>
        )}
      </motion.div>

      <motion.div style={{ position: "absolute", inset: 0 }} animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
        {orbitChips.map((chip, i) => {
          const angle = (i / orbitChips.length) * Math.PI * 2;
          return (
            <div className="chip" key={chip} style={{ left: `${50 + Math.cos(angle) * 48}%`, top: `${50 + Math.sin(angle) * 48}%` }}>
              <motion.span animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>{chip}</motion.span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}