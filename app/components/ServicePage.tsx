import Link from "next/link";
import type { ReactNode } from "react";

type Feature = {
  title: string;
  desc: string;
};

type ServicePageProps = {
  label: string;
  title: ReactNode;
  intro: string;
  features: Feature[];
};

export default function ServicePage({ label, title, intro, features }: ServicePageProps) {
  return (
    <>
      <section className="service-hero section">
        <div className="container">
          <div className="service-hero-inner">
            <div className="section-label">{label}</div>
            <h1 className="section-title service-hero-title">{title}</h1>
            <p className="service-hero-intro">{intro}</p>
            <div className="service-hero-actions">
              <Link href="/#contact" className="btn btn-primary">
                <span>Request a Quote</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/#services" className="btn btn-ghost btn-ghost-dark">
                <span>All Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="service-features section section-dark">
        <div className="container">
          <div className="section-header">
            <div className="section-label section-label-light">What&apos;s Included</div>
            <h2 className="section-title section-title-light">
              Our <em>Capabilities</em>
            </h2>
          </div>
          <div className="service-features-grid">
            {features.map((f) => (
              <div key={f.title} className="service-feature-card">
                <div className="service-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="service-feature-title">{f.title}</h3>
                <p className="service-feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta section">
        <div className="container">
          <div className="service-cta-inner">
            <h2 className="section-title">
              Ready to <em>Get Started?</em>
            </h2>
            <p className="service-cta-text">
              Tell us about your project and we&apos;ll respond within 24 hours.
            </p>
            <Link href="/#contact" className="btn btn-primary">
              <span>Get in Touch</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
