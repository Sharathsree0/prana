import { site, footerLinks, footerCare } from "@/data/site";
import { Icons } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div>
            <div className="logo"><b>PranaHome</b>Nursing</div>
            <p className="fdesc">Professional home nursing and elderly care services delivered with compassion.</p>
            <div className="soc">
              <a href={site.facebook} aria-label="Facebook">{Icons.facebook}</a>
              <a href={site.instagram} aria-label="Instagram">{Icons.instagram}</a>
            </div>
          </div>
          <div>
            <h4>Links</h4>
            <ul>{footerLinks.map((l) => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}</ul>
          </div>
          <div>
            <h4>Our Care</h4>
            <ul>{footerCare.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
          <div>
            <h4>Contact Us</h4>
            <ul>
              <li><b>Phone:</b> +91{site.phone}, +91{site.whatsapp}</li>
              <li><b>Email:</b> {site.emailFooter}</li>
            </ul>
          </div>
        </div>
        <div className="copy">© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}
