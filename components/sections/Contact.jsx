"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { site, serviceOptions } from "@/data/site";
import { rise } from "@/lib/motion";
import { Icons } from "@/components/ui/Icons";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // No backend yet: later, send the form data to Firebase here.
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact">
      <div className="wrap">
        <motion.h2 {...rise}>Get in <em>touch</em></motion.h2>
        <p className="sub">Tell us what you need and our team will call you back.</p>
        <div className="contact">
          <motion.div className="panel" {...rise}>
            <h3>Contact Information</h3>
            <div className="info"><div className="ico">{Icons.pin}</div><div><b>Our Location</b><small>{site.address}</small></div></div>
            <a className="info" href={`tel:${site.phone}`}><div className="ico">{Icons.phone}</div><div><b>Call Us</b><small>{site.phone}</small></div></a>
            <a className="info wa" href={site.whatsappLink}><div className="ico">{Icons.whatsapp}</div><div><b>WhatsApp / Message</b><small>{site.whatsapp}</small></div></a>
            <a className="info" href={`mailto:${site.emailForm}`}><div className="ico">{Icons.mail}</div><div><b>Email Address</b><small>{site.emailForm}</small></div></a>
            <div className="areas"><span>Kerala</span><span>Tamil Nadu</span><span>24/7 support</span></div>
          </motion.div>

          <motion.div className="panel" {...rise}>
            <h3>Send us a message</h3>
            <form onSubmit={onSubmit}>
              <div className="two">
                <div><label htmlFor="n">Your Name</label><input id="n" required placeholder="Enter your name" /></div>
                <div><label htmlFor="p">Phone Number</label><input id="p" required placeholder="+91..." /></div>
              </div>
              <label htmlFor="s">Service Required</label>
              <select id="s">{serviceOptions.map((o) => <option key={o}>{o}</option>)}</select>
              <label htmlFor="m">Message</label>
              <textarea id="m" rows={4} placeholder="How can we help?" />
              <motion.button whileTap={{ scale: 0.97 }} className="btn" type="submit">
                {sent ? "Thank you! We'll call you soon" : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
