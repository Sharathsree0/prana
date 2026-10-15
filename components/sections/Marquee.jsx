import { marquee } from "@/data/site";

// Scrolling strip. The list is rendered twice so the loop is seamless.
export default function Marquee() {
  return (
    <div className="marquee" aria-hidden>
      <div>
        {[0, 1].map((k) => (
          <span key={k}>{marquee.map((t) => <span key={t}>{t}<i>✦</i></span>)}</span>
        ))}
      </div>
    </div>
  );
}
