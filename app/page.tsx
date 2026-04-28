import Link from "next/link";
import ClientScripts from "./components/ClientScripts";

export default function Home() {
  return (
    <>
      <section className="hero" id="home">
        <video className="hero-bg-video" autoPlay muted loop playsInline>
          <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-label reveal-hero" style={{ ["--delay" as any]: "0ms" }}>
              Electrical Specialists
            </div>
            <h1 className="hero-slogan reveal-hero" style={{ ["--delay" as any]: "150ms" }}>
              <span className="slogan-word">Power.</span>
              <span className="slogan-word">Done.</span>
              <span className="slogan-word">Right.</span>
            </h1>
            <div className="hero-buttons reveal-hero" style={{ ["--delay" as any]: "420ms" }}>
              <a href="#contact" className="btn btn-primary">
                <span>Get a Quote</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a href="#services" className="btn btn-ghost">
                <span>View Services</span>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator reveal-hero" style={{ ["--delay" as any]: "750ms" }}>
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      <section className="brands">
        <div className="brands-wrap" id="brandsWrap">
          <div className="brands-track" id="brandsTrack">
            <div className="brand-item"><img src="/assets/brands/brand-1.png" alt="Brand Partner" /></div>
            <div className="brand-item"><img src="/assets/brands/brand-2.png" alt="Brand Partner" /></div>
            <div className="brand-item"><img src="/assets/brands/brand-3.png" alt="Brand Partner" /></div>
            <div className="brand-item"><img src="/assets/brands/brand-4.png" alt="Brand Partner" /></div>
            <div className="brand-item"><img src="/assets/brands/brand-5.png" alt="Brand Partner" /></div>
            <div className="brand-item"><img src="/assets/brands/brand-6.png" alt="Brand Partner" /></div>
          </div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-visual reveal-left">
              <div className="about-image-wrap">
                <div className="about-image-placeholder">
                  <div className="about-image-inner">
                    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M40 8L52 32H68L56 48L60 72L40 60L20 72L24 48L12 32H28L40 8Z" fill="var(--primary)" opacity="0.15" />
                      <path d="M40 16L49 32H61L51 44L54 60L40 52L26 60L29 44L19 32H31L40 16Z" stroke="var(--primary)" strokeWidth="1.5" fill="none" />
                      <circle cx="40" cy="40" r="8" fill="var(--primary)" opacity="0.8" />
                    </svg>
                  </div>
                </div>
                <div className="about-tag about-tag-1 reveal-tag-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  Licensed & Insured
                </div>
                <div className="about-tag about-tag-2 reveal-tag-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                  Fully Qualified Team
                </div>
              </div>
            </div>

            <div className="about-content reveal-right">
              <div className="section-label">About Us</div>
              <h2 className="section-title">Melbourne&apos;s Trusted<br /><em>Electrical Partner</em></h2>
              <p className="about-lead">
                Fortune Electrical is a Croydon-based electrical company delivering high-end electrical, data, security, and facility management services across Melbourne and wider Victoria.
              </p>
              <p className="about-body">
                We also provide AV and automation solutions through a network of trusted specialist contractors, ensuring every aspect of a project is handled to the highest standard.
              </p>
              <p className="about-body">
                Working across residential, commercial, and industrial sectors, we&apos;ve built a reputation for reliability, quality workmanship, and efficient delivery. Our clients value our responsiveness, clear communication, and the attention to detail we bring to every job.
              </p>
              <div className="about-highlight">
                <div className="highlight-bar"></div>
                <p>It&apos;s the small details — the 1%ers — that set our work apart and consistently elevate the final result.</p>
              </div>
              <p className="about-body">
                With over 7 years of industry experience, a fully qualified team, and comprehensive insurance, Fortune Electrical is a trusted partner for clients who expect a professional, seamless finish — a job done right the first time.
              </p>

              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number" data-target="7">0</span>
                  <span className="stat-suffix">+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number" data-target="200">0</span>
                  <span className="stat-suffix">+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number stat-number-text">High</span>
                  <span className="stat-label">Satisfaction Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services section section-dark" id="services">
        <div className="container">
          <div className="section-header reveal-up">
            <div className="section-label section-label-light">What We Do</div>
            <h2 className="section-title section-title-light">End-to-End Electrical<br /><em>Expertise</em></h2>
            <p className="section-subtitle">From a single power point to a full commercial fit-out — we&apos;ve got it covered.</p>
          </div>

          <div className="services-grid">

            <Link href="/residential" className="service-card reveal-scale" style={{ ["--delay" as any]: "0ms" }}>
              <div className="service-icon">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="14" width="36" height="26" rx="3" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 14V10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" stroke="currentColor" strokeWidth="2" />
                  <path d="M24 22v8M20 26h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="service-title">Residential Electrical</h3>
              <p className="service-desc">New builds, renovations, switchboard upgrades, power points, lighting, and everything in between. Premium finishes for premium homes.</p>
              <div className="service-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </Link>

            <Link href="/commercial" className="service-card reveal-scale" style={{ ["--delay" as any]: "80ms" }}>
              <div className="service-icon">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="8" width="40" height="32" rx="3" stroke="currentColor" strokeWidth="2" />
                  <path d="M4 18h40" stroke="currentColor" strokeWidth="2" />
                  <rect x="10" y="24" width="8" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="30" y="24" width="8" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M22 24v10M22 29h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="service-title">Commercial Electrical</h3>
              <p className="service-desc">Office fit-outs, retail spaces, hospitality venues, and strata. We deliver on time, on budget, with zero disruption to your operations.</p>
              <div className="service-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </Link>

            <Link href="/industrial" className="service-card reveal-scale" style={{ ["--delay" as any]: "160ms" }}>
              <div className="service-icon">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4L4 14v6c0 13 8.4 24 20 28 11.6-4 20-15 20-28v-6L24 4z" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 24l6 6 10-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="service-title">Industrial Electrical</h3>
              <p className="service-desc">High-voltage systems, machinery wiring, three-phase power, and industrial fit-outs. Built to withstand the toughest environments.</p>
              <div className="service-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </Link>

            <Link href="/data-communications-security" className="service-card reveal-scale" style={{ ["--delay" as any]: "0ms" }}>
              <div className="service-icon">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="6" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                  <rect x="28" y="6" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                  <rect x="6" y="28" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                  <rect x="28" y="28" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="service-title">Data & Communications</h3>
              <p className="service-desc">Structured cabling, NBN, Cat6/fibre installations, server rooms, and network infrastructure. Fast, reliable connectivity solutions.</p>
              <div className="service-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </Link>

            <Link href="/data-communications-security" className="service-card reveal-scale" style={{ ["--delay" as any]: "80ms" }}>
              <div className="service-icon">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="20" r="8" stroke="currentColor" strokeWidth="2" />
                  <path d="M24 28v14M18 42h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M10 12a18 18 0 0 1 28 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M6 8a24 24 0 0 1 36 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
                </svg>
              </div>
              <h3 className="service-title">Security Systems</h3>
              <p className="service-desc">CCTV, access control, intercoms, and alarm systems. Protect what matters with intelligently designed security solutions.</p>
              <div className="service-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </Link>

            <Link href="/data-communications-security" className="service-card reveal-scale" style={{ ["--delay" as any]: "160ms" }}>
              <div className="service-icon">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="10" width="30" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
                  <path d="M34 18h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-6" stroke="currentColor" strokeWidth="2" />
                  <path d="M14 30v8M22 30v8M10 38h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="38" cy="36" r="4" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M38 33v3l2 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="service-title">AV & Automation</h3>
              <p className="service-desc">Home theatre, multi-room audio, smart home automation, and building management. Delivered through our trusted specialist network.</p>
              <div className="service-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </Link>

          </div>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="container">
          <div className="section-header reveal-up">
            <div className="section-label">Our Work</div>
            <h2 className="section-title">Recent <em>Projects</em></h2>
            <p className="section-subtitle section-subtitle-dark">Quality workmanship, every time. A selection of recent installations across Melbourne.</p>
          </div>

          <div className="projects-grid">

            <div className="project-card project-card-large reveal-fade" style={{ ["--delay" as any]: "0ms" }}>
              <div className="project-bg project-bg-1"></div>
              <div className="project-overlay">
                <div className="project-info">
                  <span className="project-tag">Residential</span>
                  <h3 className="project-title">Full Home Rewire & Switchboard Upgrade</h3>
                </div>
              </div>
            </div>

            <div className="project-card reveal-fade" style={{ ["--delay" as any]: "80ms" }}>
              <div className="project-bg project-bg-2"></div>
              <div className="project-overlay">
                <div className="project-info">
                  <span className="project-tag">Commercial</span>
                  <h3 className="project-title">Office Fit-Out & Data Cabling</h3>
                </div>
              </div>
            </div>

            <div className="project-card reveal-fade" style={{ ["--delay" as any]: "160ms" }}>
              <div className="project-bg project-bg-3"></div>
              <div className="project-overlay">
                <div className="project-info">
                  <span className="project-tag">Security</span>
                  <h3 className="project-title">CCTV & Access Control System</h3>
                </div>
              </div>
            </div>

            <div className="project-card reveal-fade" style={{ ["--delay" as any]: "0ms" }}>
              <div className="project-bg project-bg-4"></div>
              <div className="project-overlay">
                <div className="project-info">
                  <span className="project-tag">Industrial</span>
                  <h3 className="project-title">Three-Phase Industrial Install</h3>
                </div>
              </div>
            </div>

            <div className="project-card reveal-fade" style={{ ["--delay" as any]: "80ms" }}>
              <div className="project-bg project-bg-5"></div>
              <div className="project-overlay">
                <div className="project-info">
                  <span className="project-tag">AV & Automation</span>
                  <h3 className="project-title">Smart Home Integration</h3>
                </div>
              </div>
            </div>

            <div className="project-card project-card-cta reveal-fade" style={{ ["--delay" as any]: "160ms" }}>
              <div className="project-cta-content">
                <div className="project-cta-icon">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="24" cy="24" r="20" />
                    <path d="M24 16v16M16 24h16" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>Your Project Here</h3>
                <p>Let&apos;s build something great together.</p>
                <a href="#contact" className="btn btn-primary btn-sm">Start a Project</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="testimonials section section-dark" id="testimonials">
        <div className="container">
          <div className="section-header reveal-up">
            <div className="section-label section-label-light">Client Reviews</div>
            <h2 className="section-title section-title-light">What Our Clients<br /><em>Say About Us</em></h2>
          </div>

          <div className="testimonials-slider">
            <div className="testimonials-track" id="testimonialsTrack">

              <div className="testimonial-card">
                <div className="testimonial-stars">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <blockquote className="testimonial-text">
                  &quot;Fortune Electrical did an exceptional job on our full home renovation. The attention to detail was outstanding — everything was neat, on time, and exactly what we asked for. Couldn&apos;t recommend them highly enough.&quot;
                </blockquote>
                <div className="testimonial-author">
                  <div className="author-avatar">SR</div>
                  <div className="author-info">
                    <span className="author-name">Sarah R.</span>
                    <span className="author-loc">Croydon, VIC — Residential Client</span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-stars">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <blockquote className="testimonial-text">
                  &quot;We used Fortune Electrical for a full office fit-out including data cabling and lighting. Professional from start to finish. They kept us informed throughout and the end result was perfect. Will be using them for all future projects.&quot;
                </blockquote>
                <div className="testimonial-author">
                  <div className="author-avatar">MT</div>
                  <div className="author-info">
                    <span className="author-name">Michael T.</span>
                    <span className="author-loc">Melbourne CBD — Commercial Client</span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-stars">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <blockquote className="testimonial-text">
                  &quot;Responsive, reliable, and quality work every time. We&apos;ve used Fortune Electrical across multiple industrial sites and they never disappoint. The team is knowledgeable and efficient.&quot;
                </blockquote>
                <div className="testimonial-author">
                  <div className="author-avatar">JL</div>
                  <div className="author-info">
                    <span className="author-name">James L.</span>
                    <span className="author-loc">Dandenong, VIC — Industrial Client</span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-stars">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <blockquote className="testimonial-text">
                  &quot;Had Fortune Electrical install a full CCTV and alarm system at our retail store. Clean install, great communication, and the system works flawlessly. Highly professional team.&quot;
                </blockquote>
                <div className="testimonial-author">
                  <div className="author-avatar">AK</div>
                  <div className="author-info">
                    <span className="author-name">Amanda K.</span>
                    <span className="author-loc">Ringwood, VIC — Commercial Client</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="testimonials-nav">
              <button className="t-nav-btn" id="tPrev" aria-label="Previous">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <div className="t-dots" id="tDots"></div>
              <button className="t-nav-btn" id="tNext" aria-label="Next">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
          </div>

        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="container">
          <div className="contact-grid">

            <div className="contact-info reveal-left">
              <div className="section-label">Get In Touch</div>
              <h2 className="section-title">Let&apos;s Discuss<br /><em>Your Project</em></h2>
              <p className="contact-intro">Whether it&apos;s a quote, a question, or a large-scale project — we&apos;d love to hear from you. We&apos;ll get back to you promptly.</p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div>
                    <span className="contact-detail-label">Location</span>
                    <span className="contact-detail-value">Croydon, Melbourne VIC</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <div>
                    <span className="contact-detail-label">Phone</span>
                    <span className="contact-detail-value"><a href="tel:0431820530">0431 820 530</a></span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </div>
                  <div>
                    <span className="contact-detail-label">Email</span>
                    <span className="contact-detail-value">admin@fortuneelectrical.com.au</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  </div>
                  <div>
                    <span className="contact-detail-label">Hours</span>
                    <span className="contact-detail-value">Mon–Fri 7:00am – 5:00pm</span>
                  </div>
                </div>
              </div>

              <div className="service-areas">
                <span className="area-label">Service Areas:</span>
                <div className="map-embed-wrap">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228664!2d145.2042467!3d-37.8596703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab27e81401b808b1%3A0x5074283ff1cfc3ca!2sFortune%20Electrical!5e0!3m2!1sen!2sau!4v1711400000000"
                    width="100%"
                    height={280}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Fortune Electrical service area map"
                  />
                </div>
              </div>
            </div>

            <div className="contact-form-wrap reveal-right">
              <div className="form-card">
                <div className="form-success" id="formSuccess">
                  <div className="form-success-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thanks for reaching out. We&apos;ll get back to you within 24 hours.</p>
                </div>

                <form
                  action="https://formspree.io/f/xqewvgwa"
                  method="POST"
                  id="contactForm"
                  noValidate
                >

                  <h3 className="form-title">Request a Quote</h3>
                  <p className="form-subtitle">We&apos;ll respond within 24 hours.</p>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name <span className="required">*</span></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Smith"
                        required
                        autoComplete="name"
                      />
                      <span className="field-error" id="nameError">Please enter your name.</span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address <span className="required">*</span></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        required
                        autoComplete="email"
                      />
                      <span className="field-error" id="emailError">Please enter a valid email.</span>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="04XX XXX XXX"
                        autoComplete="tel"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">Service Required</label>
                      <select id="service" name="service" defaultValue="">
                        <option value="" disabled>Select a service…</option>
                        <option>Residential Electrical</option>
                        <option>Commercial Electrical</option>
                        <option>Industrial Electrical</option>
                        <option>Data & Communications</option>
                        <option>Security Systems</option>
                        <option>AV & Automation</option>
                        <option>Other / Not Sure</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group form-group-full">
                    <label htmlFor="message">Project Details <span className="required">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project — location, scope, timeline, any questions…"
                      rows={5}
                      required
                    ></textarea>
                    <span className="field-error" id="messageError">Please describe your project.</span>
                  </div>

                  <button type="submit" className="btn btn-primary btn-full" id="submitBtn">
                    <span className="btn-text">Send Message</span>
                    <span className="btn-loading" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" opacity="0.3" /><path d="M12 2a10 10 0 0 1 10 10" /></svg>
                    </span>
                    <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </button>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ClientScripts />
    </>
  );
}
