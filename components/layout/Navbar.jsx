"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/site";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Light / dark theme
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  // Turn the bar into a floating pill after scrolling a little
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu with the Esc key
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        {/* Mobile only: hamburger (left) */}
        <button
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

        {/* Logo. Later, replace the text with: <Image src="/logo.png" alt="PranaHomeNursing" width={140} height={40} /> */}
        <a href="#home" className="logo" onClick={closeMenu}>
          <b>PranaHome</b>Nursing
        </a>

        {/* Desktop links + button */}
        <div className="nav-links">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <a className="btn nav-cta" href="#contact">Book Now</a>
        </div>

        {/* Theme toggle (right) */}
        <button className="theme" onClick={() => setDark(!dark)} aria-label="Toggle dark mode">
          {dark ? "☀" : "☾"}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={closeMenu}>{l.label}</a>
            ))}
            <a className="btn nav-cta" href="#contact" onClick={closeMenu}>Book Now</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}