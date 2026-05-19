"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "../lib/site-content";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* <div className="reg-banner">
        <strong>Regulated Entity:</strong> Sthirix Financial Services LLC | UAE
        Capital Market Authority (CMA) | CAT 5 License - Introduction &
        Promotion | <strong>CMA License No: [YOUR LICENSE NUMBER]</strong>
      </div> */}

      <header className="site-header">
        <div className="content-width nav-shell">
          <Link href="/#home" className="logo" onClick={closeMenu}>
            <Image
              src="/sthirix.png"
              alt="Sthirix"
              width={220}
              height={64}
              className="logo-mark"
              priority
            />
          </Link>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={isMenuOpen}
            aria-controls="primary-menu"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            aria-label="Primary"
            id="primary-menu"
            className={`primary-nav${isMenuOpen ? " is-open" : ""}`}
          >
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={closeMenu}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#contact" className="nav-cta" onClick={closeMenu}>
                  Get in Touch
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="content-width footer-top">
        <div className="footer-brand">
          <Link href="/#home" className="logo">
            <Image
              src="/sthirix.png"
              alt="Sthirix"
              width={220}
              height={64}
              className="logo-mark footer-logo-mark"
            />
          </Link>
          <p>
            Sthirix Financial Services LLC is licensed and regulated by the UAE
            Capital Market Authority under Category 5 for the introduction and
            promotion of financial services.
          </p>
        </div>

        <div className="footer-col">
          <h5>Navigation</h5>
          <Link href="/#about">About</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#compliance">Compliance</Link>
          <Link href="/#markets">Markets</Link>
          <Link href="/#contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h5>Legal & Compliance</h5>
          <a href="#">Risk Warning</a>
          <a href="#">Privacy Policy (PDPL)</a>
          <a href="#">Terms of Use</a>
          <a href="#">Complaints Procedure</a>
          <a href="https://www.sca.gov.ae" target="_blank" rel="noreferrer">
            CMA Official Website
          </a>
        </div>
      </div>

      <div className="content-width footer-bottom">
        <div className="footer-legal">
          <strong>Important Legal Notice & Risk Disclosure</strong>
          Sthirix Financial Services LLC is licensed by the Capital Market
          Authority (CMA) of the United Arab Emirates under Category 5
          (Introduction and Promotion). We do not execute orders, manage
          portfolios, or hold client funds. Trading foreign exchange carries
          significant risk and may not be suitable for all investors.
        </div>

        <div className="footer-reg">
          <span className="reg-num">CMA CAT 5</span>
          <span className="footer-reg-copy">
            &copy; 2026 Sthirix Financial Services LLC. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
