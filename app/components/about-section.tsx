import { pillars } from "../lib/site-content";

export function AboutSection() {
  return (
    <section id="about" className="page-section">
      <div className="content-width">
        <div className="about-simple-head">
          <div className="section-label">About Sthirix</div>
          <h2>Built on a foundation of compliance.</h2>
          <p className="section-intro">
            Sthirix Financial Services LLC is a UAE mainland entity licensed
            under Category 5 for financial introduction and promotion
            activities. Operating under Federal Decree Law No. 33 of 2023, we
            provide compliant market education, promotional support, and client
            introductions to regulated global forex brokers. We do not execute
            trades, manage portfolios, or hold client funds.
          </p>
        </div>

        <div className="about-pillar-rail">
          {pillars.map((pillar, index) => (
            <article className="about-pillar-card" key={pillar.title}>
              <div className="about-pillar-topline">
                <div className="pillar-index">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <span className="about-pillar-rule" aria-hidden="true" />
              </div>
              <h4>{pillar.title}</h4>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
