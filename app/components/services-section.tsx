import { processSteps, services } from "../lib/site-content";

function StepIcon({ type }: { type: "enquiry" | "review" | "introduction" }) {
  if (type === "enquiry") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path
          d="M14 18c0-4.4 3.6-8 8-8h20c8.8 0 16 7.2 16 16s-7.2 16-16 16H30l-10 8v-8.8A15.9 15.9 0 0 1 14 28V18Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="26" cy="26" r="2.6" fill="currentColor" />
        <circle cx="36" cy="26" r="2.6" fill="currentColor" />
        <circle cx="46" cy="26" r="2.6" fill="currentColor" />
      </svg>
    );
  }

  if (type === "review") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path
          d="M22 10h20l6 6v18"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 14h28a4 4 0 0 1 4 4v14"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m24 24 3 3 5-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m24 34 3 3 5-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M36 25h8M36 35h5"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle
          cx="45"
          cy="45"
          r="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="m51 51 7 7"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path
        d="m19 33 6-13a4 4 0 0 1 3.6-2.4h3.6a4 4 0 0 1 3.7 2.4l2.4 5.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m45 33-6-13a4 4 0 0 0-3.6-2.4h-3.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m8 34 10-3 10 9a4.7 4.7 0 0 0 6.6 0l4.2-4.2a3 3 0 0 1 4.2 0l7.2 7.2a5.5 5.5 0 0 0 7.8 0L60 41"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m19 32-5 14M28 40l-4 10M40 38l-3 11M49 43l-3 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ServicesSection() {
  const stepIcons = ["enquiry", "review", "introduction"] as const;

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
        <div className="engagement-flow">
          <div className="engagement-flow-head">
            <div className="section-label">Engagement Flow</div>
            <div className="engagement-flow-title-row">
              <span className="engagement-flow-title-line" aria-hidden="true" />
              <h3 className="engagement-flow-title">
                <span>How a Client Introduction</span>
                <strong>Typically Progresses</strong>
              </h3>
              <span className="engagement-flow-title-line" aria-hidden="true" />
            </div>
          </div>

          <div className="engagement-flow-grid">
            <div className="engagement-flow-rail" aria-hidden="true">
              <span className="engagement-flow-rail-dot engagement-flow-rail-dot-left" />
              <span className="engagement-flow-rail-dot engagement-flow-rail-dot-right" />
            </div>

            {processSteps.map((step, index) => (
              <article className="flow-stage" key={step.title}>
                <div className="flow-stage-icon-wrap">
                  <div className="flow-stage-icon">
                    <StepIcon type={stepIcons[index]} />
                  </div>
                </div>

                <div className="flow-stage-card">
                  <div className="flow-stage-step">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
