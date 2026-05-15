import { marketPairs } from "../lib/site-content";

export function MarketsSection() {
  return (
    <section id="markets" className="page-section">
      <div className="content-width">
        <div className="section-header">
          <div className="section-label">Markets</div>
          <h2>Global FX exposure through regulated broker relationships.</h2>
          <p className="section-intro">
            Through relationships with regulated executing brokers, Sthirix
            introduces clients to a range of major forex currency pairs.
            Trading itself is undertaken with the broker.
          </p>
        </div>

        <div className="markets-grid">
          {marketPairs.map((market) => (
            <div key={market.pair} className="market-card panel">
              <div className="pair">{market.pair}</div>
              <div className="desc">{market.description}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="content-width section-top-gap">
        <div className="split-showcase">
          <div className="panel">
            <div className="section-label">Execution Model</div>
            <h3 className="panel-title">
              Sthirix introduces. The broker executes.
            </h3>
            <p className="section-intro">
              Sthirix does not operate a platform or execute trades on behalf of
              clients. The listed pairs are examples of markets available
              through separately licensed executing brokers.
            </p>
          </div>

          <div className="panel">
            <div className="section-label">Risk Context</div>
            <h3 className="panel-title">
              Past performance is not indicative of future results.
            </h3>
            <p className="section-intro">
              Trading forex involves significant risk of loss. Prospective
              clients should assess experience, objectives, and risk appetite
              carefully before proceeding with any trading relationship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
