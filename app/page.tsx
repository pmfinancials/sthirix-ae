import Link from "next/link";
import { AboutSection } from "./components/about-section";
import { ComplianceSection } from "./components/compliance-section";
import { ContactSection } from "./components/contact-section";
import { MarketsSection } from "./components/markets-section";
import { ServicesSection } from "./components/services-section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="page-main">
      <section id="home" className="home-hero">
        <div className="content-width home-hero-grid">
          <div className="hero-copy hero-copy-wide">
            <div className="hero-top">
              <div className="hero-copy-col">
                <div className="hero-badge">
                  CMA Licensed - UAE Capital Market Authority
                </div>

                <h1>
                  Built for
                  <br />
                  Global <span>Traders.</span>
                </h1>

                <p className="hero-sub">
                  Sthirix connects UAE-based investors with regulated global
                  forex trading opportunities. We operate as a Category 5
                  introduction and promotion firm under the UAE Capital Market
                  Authority.
                </p>
              </div>

              <div className="hero-image-shell">
                <Image
                  src="/newimage.png"
                  alt="Global market activity visual"
                  width={480}
                  height={560}
                  className="hero-image"
                  priority
                />
              </div>
              {/* <Image
                src="/Economic Events.png"
                alt="Sthirix UAE"
                width={420}
                height={420}
                className="rounded-full object-cover"
              /> */}
            </div>

            <div className="cta-group">
              <Link href="/#contact" className="btn-primary">
                Speak to an Advisor
              </Link>
              <Link href="/#compliance" className="btn-secondary">
                View License Scope
              </Link>
            </div>

            <div className="hero-points">
              <div className="hero-point">
                <span className="hero-point-label">Licensed Scope</span>
                <strong>Introduction & Promotion Only</strong>
              </div>
              <div className="hero-point">
                <span className="hero-point-label">Jurisdiction</span>
                <strong>United Arab Emirates</strong>
              </div>
              <div className="hero-point">
                <span className="hero-point-label">Client Positioning</span>
                <strong>Transparent, compliant, non-custodial</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="content-width">
          <div className="risk-warning">
            <div className="risk-title">Risk Warning</div>
            <p>
              <strong>
                Trading foreign exchange (forex) on margin carries a high level
                of risk and may not be suitable for all investors.
              </strong>{" "}
              Sthirix Financial Services LLC is licensed by the UAE Capital
              Market Authority (CMA) under Category 5 for introduction and
              promotion activities only. We do not execute trades, hold client
              funds, or provide portfolio management services.
            </p>
          </div>
        </div>
      </section>

      <AboutSection />
      <ServicesSection />
      <ComplianceSection />
      <MarketsSection />
      <ContactSection />
    </main>
  );
}
