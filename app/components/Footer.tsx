"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const FOOTER_SERVICES: Array<{ href: string; label: string }> = [
  { href: "/residential", label: "Residential" },
  { href: "/commercial", label: "Commercial" },
  { href: "/industrial", label: "Industrial" },
  { href: "/data-communications-security", label: "Data & Comms" },
  { href: "/data-communications-security", label: "Security Systems" },
  { href: "/data-communications-security", label: "AV & Automation" },
];

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const anchor = (id: string) => (isHome ? `#${id}` : `/#${id}`);
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href={isHome ? "#home" : "/"} className="footer-logo">
                <img src="/assets/footer-logo.png" alt="Fortune Electrical" className="footer-logo-img" />
                <span>Fortune Electrical</span>
              </Link>
              <p className="footer-tagline">Power Done Right.</p>
              <p className="footer-desc">
                Premium electrical services across Melbourne and Victoria. Licensed, insured, and committed to quality.
              </p>
              <div className="footer-social">
                <a
                  href="https://www.instagram.com/fortune.elec?igsh=dDFvNHIxMWlnYXNx"
                  className="social-link"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-nav-col">
              <h4 className="footer-heading">Navigation</h4>
              <ul className="footer-links">
                <li><Link href={anchor("home")}>Home</Link></li>
                <li><Link href={anchor("about")}>About</Link></li>
                <li><Link href={anchor("services")}>Services</Link></li>
                <li><Link href={anchor("projects")}>Projects</Link></li>
                <li><Link href={anchor("contact")}>Contact</Link></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-links">
                {FOOTER_SERVICES.map((s, i) => (
                  <li key={`${s.href}-${i}`}>
                    <Link href={s.href}>{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-contact-col">
              <h4 className="footer-heading">Contact</h4>
              <ul className="footer-contact-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Croydon, Melbourne VIC
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a href="tel:0431820530">0431 820 530</a>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href="mailto:admin@fortuneelectrical.com.au">admin@fortuneelectrical.com.au</a>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Mon–Fri 7:00am – 5:00pm
                </li>
              </ul>
              <Link href={anchor("contact")} className="btn btn-primary btn-sm footer-cta">Get a Quote</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {year} Fortune Electrical Pty Ltd. All rights reserved.</p>
          <p>Croydon, Melbourne VIC · ABN: 36 694 864 152 · Licensed Electrician</p>
        </div>
      </div>
    </footer>
  );
}
