"use client";
import { motion } from "framer-motion";
import { steps } from "@/data/site";
import { rise } from "@/lib/motion";

export default function HowItWorks() {
  return (
    <section className="pt-0">
      <div className="wrap">
        <motion.h2 {...rise}>Care starts in <em>three simple steps</em></motion.h2>
        <p className="sub">No hospital queues. No guesswork.</p>
        <div className="steps">
          {steps.map((s, i) => (
            <motion.div className="step" key={s.title}
              initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.18, duration: 0.6 }}>
              <div className="n">{i + 1}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
