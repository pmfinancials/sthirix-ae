import { complianceItems } from "../lib/site-content";

export function ComplianceSection() {
  return (
    <section id="compliance" className="page-section">
      <div className="content-width">
        <div className="section-header">
          <div className="section-label">Compliance</div>
          <h2>Compliance is the product, not the fine print.</h2>
          <p className="section-intro">
            Sthirix operates within the UAE Capital Market Authority framework,
            aligned with FDL33, fair communication standards, and core client
            protection expectations.
          </p>
        </div>

        <div className="compliance-grid">
          <div className="compliance-items">
            {complianceItems.map((item, index) => (
              <div className="comp-item panel" key={item.title}>
                <div className="comp-num">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <aside className="compliance-certs panel">
            <div className="panel-kicker">Regulatory Credentials</div>
            <h3>Direct, verifiable, and easy to audit.</h3>
            <div className="cert-badge">
              <div className="cert-title">UAE Capital Market Authority</div>
              <div className="cert-detail">
                Category 5 - Financial Introduction & Promotion
              </div>
              <div className="cert-detail cert-highlight">
                License No: [YOUR CMA LICENSE NO.]
              </div>
            </div>
            <div className="cert-badge">
              <div className="cert-title">Regulatory Framework</div>
              <div className="cert-detail">
                Federal Decree Law No. 33 of 2023
              </div>
              <div className="cert-detail">
                SCA Rulebook - Board Decision No. 13/R.M of 2021
              </div>
            </div>
            <div className="cert-badge">
              <div className="cert-title">Related Standards</div>
              <div className="cert-detail">
                UAE Federal AML Law No. 20 of 2018
              </div>
              <div className="cert-detail">
                UAE Federal Law No. 45 of 2021 (PDPL)
              </div>
            </div>
            <a
              href="https://www.cma.gov.ae"
              target="_blank"
              rel="noreferrer"
              className="verify-link"
            >
              Verify on CMA Official Register
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
