// Shared scroll-reveal animation. Spread it on any motion element: <motion.div {...rise}>
export const rise = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-70px" },
  transition: { duration: 0.65 },
};
