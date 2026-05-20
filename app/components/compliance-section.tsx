import Image from "next/image";
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
                <div className="comp-num">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="compliance-certs">
            <div className="compliance-visual panel">
              <div className="panel-kicker">Regulated Presence</div>
              <h3>Structured oversight and disciplined client communication.</h3>
              <p className="cert-detail">
                Every introduction, disclosure, and promotional interaction is
                framed around scope clarity, regulatory discipline, and client
                protection expectations.
              </p>

              <div className="compliance-image-frame">
                <Image
                  src="/Sthirixae.jpeg"
                  alt="Sthirix compliance and regulatory visual"
                  width={700}
                  height={820}
                  className="compliance-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
