"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/data/site";
import { rise } from "@/lib/motion";
import { Icons } from "@/components/ui/Icons";

export default function Services() {
  const [open, setOpen] = useState(0); // index of the expanded card, -1 = none
  const toggle = (i) => setOpen(open === i ? -1 : i);

  return (
    <section id="services" className="pt-sm">
      <div className="wrap">
        <motion.h2 {...rise}>Our <em>Care Services</em></motion.h2>
        <p className="sub">Tap a card to see what is included.</p>
        <div className="services">
          {services.map((s, i) => (
            <motion.div key={s.title} className="card" tabIndex={0} role="button" aria-expanded={open === i}
              onClick={() => toggle(i)} onKeyDown={(e) => e.key === "Enter" && toggle(i)}
              whileHover={{ y: -8 }} {...rise}>
              <div className="ico">{Icons[s.icon]}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <motion.div className="more" animate={{ maxHeight: open === i ? 140 : 0, opacity: open === i ? 1 : 0 }}>
                <ul>{s.points.map((x) => <li key={x}>{x}</li>)}</ul>
              </motion.div>
              <strong>{open === i ? "Show less" : "See what's included"}</strong>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
