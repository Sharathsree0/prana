"use client";
import { useEffect, useRef } from "react";
import { frames } from "@/data/site";

const src = (i) =>
  `${frames.path}${String(i + (frames.start ?? 1)).padStart(frames.digits, "0")}.${frames.ext}`;

// Wraps the sections between the hero and the footer.
// A pinned <canvas> plays the frames as the visitor scrolls through them.
export default function StoryBackground({ children }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const imgs = [];
    let current = -1;
    let raf = 0;

    // Draw one frame "cover" style. If it hasn't loaded, use the nearest earlier one.
    const draw = (index) => {
      let img = imgs[index];
      if (!img || !img.naturalWidth) {
        img = null;
        for (let k = index; k >= 0; k--) {
          if (imgs[k] && imgs[k].naturalWidth) { img = imgs[k]; break; }
        }
      }
      if (!img) return;
      const cw = canvas.width, ch = canvas.height;
      const s = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
      const w = img.naturalWidth * s, h = img.naturalHeight * s;
      ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      draw(Math.max(current, 0));
    };

    // Pick the frame from how far we have scrolled through this wrapper
    const update = () => {
      raf = 0;
      const rect = wrap.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 0;
      const idx = Math.round(p * (frames.count - 1));
      if (idx !== current) { current = idx; draw(idx); }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };

    // Preload all frames
    for (let i = 0; i < frames.count; i++) {
      const im = new Image();
      im.onload = () => { if (i === Math.max(current, 0)) draw(i); };
      im.src = src(i);
      imgs.push(im);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);
    resize();
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

    return (
    <div className="story" ref={wrapRef}>
      <div className="story-layer" aria-hidden>
        <div className="story-bg">
          <canvas ref={canvasRef} />
          <div className="story-tint" />
        </div>
      </div>
      <div className="story-content">{children}</div>
    </div>
  );
}