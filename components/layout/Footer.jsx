import { site, footerLinks, footerCare } from "@/data/site";
import { Icons } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          {/* Brand */}
          <div className="fbrand">
            <div className="logo"><b>PranaHome</b>Nursing</div>
            <p className="fdesc">Professional home nursing and elderly care services delivered with compassion.</p>
            <div className="soc">
              <a href={site.facebook} aria-label="Facebook">{Icons.facebook}</a>
              <a href={site.instagram} aria-label="Instagram">{Icons.instagram}</a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4>Links</h4>
            <ul>{footerLinks.map((l) => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}</ul>
          </div>

          {/* Our Care */}
          <div>
            <h4>Our Care</h4>
            <ul>{footerCare.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>

          {/* Contact */}
          <div className="fcontact">
            <h4>Contact Us</h4>
            <ul>
              <li><span className="lbl">Phone</span><a href={`tel:+91${site.phone}`}>+91 {site.phone}</a></li>
              <li><span className="lbl">WhatsApp</span><a href={site.whatsappLink}>+91 {site.whatsapp}</a></li>
              <li><span className="lbl">Email</span><a href={`mailto:${site.emailFooter}`}>{site.emailFooter}</a></li>
            </ul>
          </div>
        </div>

        <div className="copy">© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}