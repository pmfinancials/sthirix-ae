"use client";

import { FormEvent, useState } from "react";
import { enquiryOptions } from "../lib/site-content";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  enquiryType: string;
  message: string;
};

const initialFormValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  enquiryType: "",
  message: "",
};

export function ContactSection() {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      const data = (await response.json()) as {
        error?: string;
        message?: string;
      };

      if (!response.ok) {
        throw new Error(
          data.error ?? "Unable to submit your enquiry right now.",
        );
      }

      setFormValues(initialFormValues);
      setStatus({
        type: "success",
        message:
          data.message ??
          "Your enquiry has been sent successfully. Our team will be in touch.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to submit your enquiry right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

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
          <form className="contact-form panel" onSubmit={handleSubmit}>
            <div className="panel-kicker">Send an Enquiry</div>
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formValues.firstName}
                onChange={(event) =>
                  setFormValues((current) => ({
                    ...current,
                    firstName: event.target.value,
                  }))
                }
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formValues.lastName}
                onChange={(event) =>
                  setFormValues((current) => ({
                    ...current,
                    lastName: event.target.value,
                  }))
                }
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formValues.email}
              onChange={(event) =>
                setFormValues((current) => ({
                  ...current,
                  email: event.target.value,
                }))
              }
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (UAE +971...)"
              value={formValues.phone}
              onChange={(event) =>
                setFormValues((current) => ({
                  ...current,
                  phone: event.target.value,
                }))
              }
              required
            />
            <select
              name="enquiryType"
              value={formValues.enquiryType}
              onChange={(event) =>
                setFormValues((current) => ({
                  ...current,
                  enquiryType: event.target.value,
                }))
              }
              className="bg-black text-white border border-white/20"
              required
            >
              <option value="" disabled className="text-gray-400">
                Enquiry Type
              </option>

              {enquiryOptions.map((option) => (
                <option
                  key={option}
                  value={option}
                  className="bg-black text-white"
                >
                  {option}
                </option>
              ))}
            </select>
            <textarea
              name="message"
              placeholder="Your message..."
              value={formValues.message}
              onChange={(event) =>
                setFormValues((current) => ({
                  ...current,
                  message: event.target.value,
                }))
              }
              required
            />
            <p className="contact-disclaimer">
              By submitting this form, you confirm that you understand Sthirix
              is licensed for introduction and promotion only. Your data will be
              processed in accordance with applicable privacy requirements.
            </p>
            <button
              className="submit-btn"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit Enquiry"}
            </button>
            {status.type !== "idle" ? (
              <p
                className={`form-status ${
                  status.type === "error" ? "is-error" : "is-success"
                }`}
              >
                {status.message}
              </p>
            ) : null}
          </form>

          <div className="contact-info">
            <div className="info-item panel">
              <h4>Office Address</h4>
              <p>
                Sthirix Financial Services LLC
                <br />
                306, Aspect Tower, Zone-B, Business Bay,
                <br />
                Dubai, United Arab Emirates
              </p>
            </div>
            <div className="info-item panel">
              <h4>Email</h4>
              <p>
                <a href="mailto:compliance@sthirix.ae">compliance@sthirix.ae</a>
                <br />
              </p>
            </div>
            <div className="info-item panel">
              <h4>Phone</h4>
              <p>
                <a href="tel:+971000000000">+971 44 26 8300</a>
              </p>
            </div>
            <div className="info-item panel">
              <h4>Complaints</h4>
              <p className="info-detail">
                Clients who are not satisfied with our handling of a complaint
                have the right to escalate to the UAE Capital Market Authority.
                <br />
                <a
                  href="https://www.sca.gov.ae"
                  target="_blank"
                  rel="noreferrer"
                >
                  CMA Website
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
