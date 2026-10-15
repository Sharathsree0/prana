"use client";
import { motion } from "framer-motion";
import { stats } from "@/data/site";
import { rise } from "@/lib/motion";
import Counter from "@/components/ui/Counter";

export default function Stats() {
  return (
    <div className="wrap stats">
      {stats.map((s) => (
        <motion.div className="stat" key={s.label} {...rise}>
          <Counter to={s.value} decimals={s.decimals} suffix={s.suffix} />
          <span>{s.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
