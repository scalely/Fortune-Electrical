"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type AnchorId = "home" | "about" | "services" | "projects" | "contact";

const SERVICE_PAGES: Array<{ href: string; label: string }> = [
  { href: "/residential", label: "Residential" },
  { href: "/commercial", label: "Commercial" },
  { href: "/industrial", label: "Industrial" },
  { href: "/data-communications-security", label: "Data, Communications, Security/Access Control" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<AnchorId>("home");
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  const anchorHref = (id: AnchorId) => (isHome ? `#${id}` : `/#${id}`);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    function updateActive() {
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      const scrollY = window.scrollY + 120;
      let current: AnchorId = "home";
      sections.forEach((el) => {
        if (el.offsetTop <= scrollY) {
          const id = el.getAttribute("id") as AnchorId | null;
          if (id) current = id;
        }
      });
      setActiveSection(current);
    }

    window.addEventListener("scroll", updateActive, { passive: true });
    updateActive();
    return () => window.removeEventListener("scroll", updateActive);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const isServicesActive =
    SERVICE_PAGES.some((p) => pathname === p.href) ||
    (isHome && activeSection === "services");

  function navLinkClass(id: AnchorId) {
    return `nav-link${isHome && activeSection === id ? " active" : ""}`;
  }

  function closeMenu() {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  }

  return (
    <nav
      className={`navbar${scrolled ? " scrolled" : ""}`}
      id="navbar"
      ref={navRef}
    >
      <div className="nav-container">
        <Link href={isHome ? "#home" : "/"} className="nav-logo" onClick={closeMenu}>
          <img src="/assets/logo.png" alt="Fortune Electrical" className="logo-img" />
          <img src="/assets/logo-text.png" alt="Fortune Electrical" className="logo-text-img" />
        </Link>

        <ul className={`nav-links${menuOpen ? " open" : ""}`} id="navLinks">
          <li>
            <Link href={anchorHref("home")} className={navLinkClass("home")} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href={anchorHref("about")} className={navLinkClass("about")} onClick={closeMenu}>
              About
            </Link>
          </li>

          <li className={`nav-item-dropdown${mobileServicesOpen ? " mobile-open" : ""}`}>
            <Link
              href={anchorHref("services")}
              className={`nav-link nav-link-dropdown${isServicesActive ? " active" : ""}`}
              onClick={(e) => {
                if (window.matchMedia("(max-width: 768px)").matches) {
                  e.preventDefault();
                  setMobileServicesOpen((v) => !v);
                } else {
                  closeMenu();
                }
              }}
              aria-haspopup="true"
              aria-expanded={mobileServicesOpen}
            >
              Services
              <svg
                className="nav-link-caret"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </Link>
            <ul className="nav-dropdown" role="menu">
              {SERVICE_PAGES.map((page) => (
                <li key={page.href} role="none">
                  <Link
                    href={page.href}
                    className={`nav-dropdown-link${pathname === page.href ? " active" : ""}`}
                    onClick={closeMenu}
                    role="menuitem"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link href={anchorHref("projects")} className={navLinkClass("projects")} onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link
              href={anchorHref("contact")}
              className={`nav-link nav-cta${isHome && activeSection === "contact" ? " active" : ""}`}
              onClick={closeMenu}
            >
              Get a Quote
            </Link>
          </li>
        </ul>

        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          id="hamburger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
