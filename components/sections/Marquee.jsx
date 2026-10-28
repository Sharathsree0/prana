import { marquee } from "@/data/site";

// Scrolling chips. The list is rendered twice so the loop never shows a gap.
export default function Marquee() {
  return (
    <div className="marquee" aria-hidden>
      <div className="mq-track">
        {[0, 1].map((k) => (
          <div className="mq-group" key={k}>
            {marquee.map((t) => (
              <span className="mq-pill" key={t}>{t}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}