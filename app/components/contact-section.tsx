import { enquiryOptions } from "../lib/site-content";

export function ContactSection() {
  return (
    <section id="contact" className="page-section">
      <div className="content-width">
        <div className="section-header">
          <div className="section-label">Contact</div>
          <h2>Talk to a team that knows its regulatory lane.</h2>
          <p className="section-intro">
            Use this section for regulated introduction enquiries, compliance
            clarifications, partnership requests, or formal complaint-related
            communication.
          </p>
        </div>

        <div className="contact-grid">
          <form className="contact-form panel">
            <div className="panel-kicker">Send an Enquiry</div>
            <div className="form-row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Phone Number (UAE +971...)" />
            <select defaultValue="">
              <option value="" disabled>
                Enquiry Type
              </option>
              {enquiryOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <textarea placeholder="Your message..." />
            <p className="contact-disclaimer">
              By submitting this form, you confirm that you understand Sthirix
              is licensed for introduction and promotion only. Your data will be
              processed in accordance with applicable privacy requirements.
            </p>
            <button className="submit-btn" type="button">
              Submit Enquiry
            </button>
          </form>

          <div className="contact-info">
            <div className="info-item panel">
              <h4>Office Address</h4>
              <p>
                Sthirix Financial Services LLC
                <br />
                [Office Address, Floor, Building]
                <br />
                Dubai, United Arab Emirates
              </p>
            </div>
            <div className="info-item panel">
              <h4>Email</h4>
              <p>
                <a href="mailto:info@sthirix.com">info@sthirix.com</a>
                <br />
                <a href="mailto:compliance@sthirix.com">
                  compliance@sthirix.com
                </a>
              </p>
            </div>
            <div className="info-item panel">
              <h4>Phone</h4>
              <p>
                <a href="tel:+971000000000">+971 [XX XXX XXXX]</a>
              </p>
            </div>
            <div className="info-item panel">
              <h4>Complaints</h4>
              <p className="info-detail">
                Clients who are not satisfied with our handling of a complaint
                have the right to escalate to the UAE Capital Market Authority.
                <br />
                <a href="https://www.cma.gov.ae" target="_blank" rel="noreferrer">
                  www.cma.gov.ae
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
