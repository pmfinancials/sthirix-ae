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

          {/* <Image
            src="/Sthirixae.jpeg"
            alt="Sthirix UAE"
            className="rounded-full"
            width={700}
            height={800}
          /> */}
        </div>
      </div>
    </section>
  );
}
