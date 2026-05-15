import { processSteps, services } from "../lib/site-content";

export function ServicesSection() {
  return (
    <section id="services" className="page-section">
      <div className="content-width">
        <div className="section-header">
          <div className="section-label">Services</div>
          <h2>What we do, and what we deliberately do not do.</h2>
          <p className="section-intro">
            As a CMA Category 5 licensed firm, our activities are specifically
            defined. This section separates permitted activity from important
            operating boundaries.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.title}
              className={`service-item panel${
                service.note === "Scope Boundary" ? " service-item-warning" : ""
              }`}
            >
              <div className="panel-kicker">{service.note}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="content-width section-top-gap">
        <div className="panel">
          <div className="section-label">Engagement Flow</div>
          <h3 className="panel-title">
            How a client introduction typically progresses.
          </h3>
          <div className="step-list">
            {processSteps.map((step, index) => (
              <div className="step-item" key={step.title}>
                <div className="step-num">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
