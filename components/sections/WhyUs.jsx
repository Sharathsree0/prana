"use client";
import { motion } from "framer-motion";
import { whyUs } from "@/data/site";
import { rise } from "@/lib/motion";

export default function WhyUs() {
  return (
    <section className="why" id="about">
      <div className="wrap">
        <motion.h2 {...rise}>Why families choose <em>PranaHome</em></motion.h2>
        <p className="sub">Trust is the whole job when someone you love needs care.</p>
        <div className="whygrid">
          {whyUs.map((w) => (
            <motion.div className="item" key={w.title} {...rise}>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
