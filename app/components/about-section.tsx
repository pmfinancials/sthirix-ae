import { pillars } from "../lib/site-content";

export function AboutSection() {
  return (
    <section id="about" className="page-section">
      <div className="content-width">
        <div className="section-header">
          <div className="section-label">About Sthirix</div>
          <h2>Built on a foundation of compliance.</h2>
          <p className="section-intro">
            Sthirix Financial Services LLC is a UAE mainland entity licensed and
            regulated under Category 5 for financial introduction and promotion
            activities. Our role is intentionally narrow, transparent, and
            compliance-led.
          </p>
        </div>

        <div className="about-layout">
          <div className="about-story panel">
            <p>
              We operate under the framework established by Federal Decree Law
              No. 33 of 2023. Our responsibility is to introduce qualified
              clients to regulated global forex brokers and provide market
              information, educational resources, and compliant promotional
              services.
            </p>
            <p>
              We never execute trades, hold client funds, or manage investment
              portfolios. That distinction matters, and we make it explicit
              across every client interaction and every communication.
            </p>
            <p>
              Every engagement is structured to be transparent about scope,
              limitations, and the fact that the underlying trading relationship
              sits with a separately licensed executing broker.
            </p>
          </div>

          <div className="pillar-grid">
            {pillars.map((pillar, index) => (
              <div className="pillar-card" key={pillar.title}>
                <div className="pillar-index">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h4>{pillar.title}</h4>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
