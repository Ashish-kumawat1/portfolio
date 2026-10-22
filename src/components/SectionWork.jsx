import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function SectionWork() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: '01 / CONCEPT',
      type: 'verdant',
      title: 'Verdant — a greener storefront',
      category: 'DESIGN + DEVELOPMENT / COMMERCE',
      description:
        'Making plant shopping feel less overwhelming. An editorial storefront pairs a guided plant finder with a fast, accessible path to checkout.',
      fullDescription:
        'Verdant bridges the gap between botanical care and digital commerce. By introducing an intuitive plant diagnostic finder, customers discover specimens suited for their exact lighting, humidity, and pet considerations, leading to a 34% drop in return rates and an immersive, calm shopping flow.',
      builtWith: 'Next.js · Shopify · GSAP',
      designGoal: 'A calmer path to purchase',
      highlights: [
        'Custom quiz algorithm matching ambient light conditions with botanical resilience',
        'Fluid page transitions with GSAP and accessible zero-layout-shift micro-animations',
        'Sub-second cart mutations with headless Shopify Storefront API and server actions',
      ],
    },
    {
      id: '02 / CONCEPT',
      type: 'orbit',
      title: 'Orbit — clarity in the numbers',
      category: 'PRODUCT ENGINEERING / SAAS',
      description:
        'Turning fragmented business data into a focused daily view. A modular dashboard brings key signals, clear reporting and role based access together.',
      fullDescription:
        'Orbit unifies SaaS operational metrics from Stripe, PostgreSQL, and CRM webhooks into an ultra-fast real-time telemetry dashboard. Designed for speed, keyboard navigation, and zero data clutter, enabling leadership to make informed decisions without wading through spreadsheet chaos.',
      builtWith: 'React · Node.js · PostgreSQL',
      designGoal: 'Less noise. Better decisions.',
      highlights: [
        'Real-time aggregation engine handling over 50,000 hourly webhook events',
        'Optimized SVG canvas time-series charts rendering 10k data points at 60 FPS',
        'Granular role-based access control (RBAC) with instantaneous permission updates',
      ],
    },
  ];

  return (
    <section
      id="work"
      className="section-responsive work-section"
      style={{
        borderTop: '1px solid var(--border-light)',
        position: 'relative',
        background: 'var(--bg-primary)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: 'clamp(36px, 6vw, 72px)',
          }}
        >
          <div>
            <div className="section-label">
              <span>03 / Selected Work</span>
            </div>
            <h2 className="section-title">Ideas, brought to life.</h2>
          </div>

          <p
            style={{
              maxWidth: '380px',
              fontSize: 'clamp(1rem, 2vw, 1.1rem)',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              marginTop: '8px',
            }}
          >
            Two illustrative case studies. Different challenges, the same care from root to release.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
            gap: 'clamp(24px, 4vw, 40px)',
            marginBottom: 'clamp(36px, 5vw, 64px)',
          }}
          className="projects-grid"
        >
          {/* Project 1: Verdant */}
          <div
            onClick={() => setSelectedProject(projects[0])}
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease',
            }}
            className="project-card-wrapper"
          >
            {/* Visual Mockup Preview */}
            <div
              style={{
                background: '#F7F4EE',
                border: '1px solid #E2DCD1',
                borderRadius: '18px',
                padding: 'clamp(16px, 3vw, 24px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s var(--transition-smooth)',
              }}
              className="mockup-preview-box mockup-verdant"
            >
              {/* Fake Verdant Navbar */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.78rem',
                  color: '#4A463F',
                  fontFamily: 'var(--font-sans)',
                  paddingBottom: '12px',
                  borderBottom: '1px solid rgba(0,0,0,0.06)',
                }}
              >
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 600, color: '#1E1C1A' }}>
                  verdant
                </span>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span className="mock-hide-on-mobile">Our story</span>
                  <span className="mock-hide-on-mobile">Journal</span>
                  <span>Shop</span>
                  <span style={{ fontWeight: 600 }}>Bag (0)</span>
                </div>
              </div>

              {/* Mockup Body with Left Text and Right Photo */}
              <div
                className="mockup-verdant-body"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1fr',
                  gap: '16px',
                  alignItems: 'center',
                  flex: 1,
                  paddingTop: '16px',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      letterSpacing: '0.12em',
                      color: '#8A8276',
                      marginBottom: '6px',
                    }}
                  >
                    A LITTLE CLOSER TO NATURE
                  </div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.4rem, 2.3vw, 2.1rem)',
                      lineHeight: 1.1,
                      color: '#1C1917',
                      marginBottom: '8px',
                    }}
                  >
                    Bring the<br />outside in.
                  </h4>
                  <p
                    style={{
                      fontSize: '0.78rem',
                      color: '#6A635B',
                      lineHeight: 1.45,
                      marginBottom: '14px',
                    }}
                  >
                    Thoughtfully grown greenery for the spaces you call home.
                  </p>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      background: '#1F2E23',
                      color: '#FFFFFF',
                      fontSize: '0.72rem',
                      padding: '5px 12px',
                      borderRadius: '9999px',
                    }}
                  >
                    <span>Find your plant</span>
                    <ArrowUpRight size={11} />
                  </div>
                </div>

                <div
                  className="mockup-img-container"
                  style={{
                    height: '100%',
                    minHeight: '130px',
                    maxHeight: '210px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
                  }}
                >
                  <img
                    src="/verdant-plant.jpg"
                    alt="Verdant plant mockup"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Metadata and Description Below */}
            <div style={{ marginTop: '20px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  gap: '8px',
                  marginBottom: '6px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.45rem, 2.2vw, 1.65rem)',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span>Verdant — a greener storefront</span>
                  <ArrowUpRight size={18} style={{ color: 'var(--accent-crimson)', flexShrink: 0 }} />
                </h3>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  01 / CONCEPT
                </span>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  color: 'var(--accent-crimson)',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                }}
              >
                DESIGN + DEVELOPMENT / COMMERCE
              </div>

              <p
                style={{
                  fontSize: '0.94rem',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                  marginBottom: '18px',
                }}
              >
                Making plant shopping feel less overwhelming. An editorial storefront pairs a guided plant finder with a fast, accessible path to checkout.
              </p>

              {/* Two Column Specs */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '14px',
                  paddingTop: '14px',
                  borderTop: '1px solid var(--border-light)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                }}
              >
                <div>
                  <div style={{ color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                    BUILT WITH
                  </div>
                  <div style={{ color: 'var(--text-primary)' }}>Next.js · Shopify · GSAP</div>
                </div>

                <div>
                  <div style={{ color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                    DESIGN GOAL
                  </div>
                  <div style={{ color: 'var(--text-primary)' }}>A calmer path to purchase</div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: Orbit */}
          <div
            onClick={() => setSelectedProject(projects[1])}
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease',
            }}
            className="project-card-wrapper"
          >
            {/* Visual Mockup Preview (Dark UI) */}
            <div
              style={{
                background: '#161B22',
                border: '1px solid #30363D',
                borderRadius: '18px',
                padding: 'clamp(16px, 3vw, 24px)',
                display: 'grid',
                gridTemplateColumns: '90px 1fr',
                gap: '16px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
                color: '#E6EDF3',
                transition: 'all 0.3s var(--transition-smooth)',
              }}
              className="mockup-preview-box mockup-orbit"
            >
              {/* Left Mini Sidebar */}
              <div
                className="mockup-orbit-sidebar"
                style={{
                  borderRight: '1px solid #21262D',
                  paddingRight: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  fontSize: '0.68rem',
                  color: '#8B949E',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FFFFFF', fontWeight: 600 }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', border: '2px solid #58A6FF' }} />
                  <span>orbit</span>
                </div>
                <div style={{ color: '#58A6FF', fontWeight: 500 }}>Overview</div>
                <div>Analytics</div>
                <div>Customers</div>
                <div>Reports</div>
                <div>Settings</div>
              </div>

              {/* Main Content Area */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>A clearer overview.</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.62rem', color: '#8B949E' }}>
                    <span>Last 30 days</span>
                    <ChevronDown size={10} />
                  </div>
                </div>

                {/* 3 Metric Cards */}
                <div
                  className="mockup-orbit-metrics"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '6px',
                  }}
                >
                  <div style={{ background: '#21262D', padding: '6px 8px', borderRadius: '6px' }}>
                    <div style={{ fontSize: '0.58rem', color: '#8B949E' }}>Revenue</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, margin: '2px 0' }}>$48.2k</div>
                    <div style={{ fontSize: '0.54rem', color: '#3FB950' }}>↗ +18%</div>
                  </div>

                  <div style={{ background: '#21262D', padding: '6px 8px', borderRadius: '6px' }}>
                    <div style={{ fontSize: '0.58rem', color: '#8B949E' }}>Users</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, margin: '2px 0' }}>2,460</div>
                    <div style={{ fontSize: '0.54rem', color: '#3FB950' }}>↗ +12%</div>
                  </div>

                  <div style={{ background: '#21262D', padding: '6px 8px', borderRadius: '6px' }}>
                    <div style={{ fontSize: '0.58rem', color: '#8B949E' }}>Retention</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, margin: '2px 0' }}>92.4%</div>
                    <div style={{ fontSize: '0.54rem', color: '#3FB950' }}>↗ +3%</div>
                  </div>
                </div>

                {/* Chart Area */}
                <div style={{ background: '#21262D', padding: '8px', borderRadius: '6px' }}>
                  <div style={{ fontSize: '0.62rem', color: '#8B949E', marginBottom: '4px' }}>Revenue over time</div>
                  <svg viewBox="0 0 400 70" style={{ width: '100%', height: '44px' }}>
                    <path
                      d="M0 60 Q 60 45, 120 50 T 240 25 T 320 35 T 400 10"
                      fill="none"
                      stroke="#3FB950"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Metadata and Description Below */}
            <div style={{ marginTop: '20px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  gap: '8px',
                  marginBottom: '6px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.45rem, 2.2vw, 1.65rem)',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span>Orbit — clarity in the numbers</span>
                  <ArrowUpRight size={18} style={{ color: 'var(--accent-crimson)', flexShrink: 0 }} />
                </h3>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  02 / CONCEPT
                </span>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  color: 'var(--accent-crimson)',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                }}
              >
                PRODUCT ENGINEERING / SAAS
              </div>

              <p
                style={{
                  fontSize: '0.94rem',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                  marginBottom: '18px',
                }}
              >
                Turning fragmented business data into a focused daily view. A modular dashboard brings key signals, clear reporting and role based access together.
              </p>

              {/* Two Column Specs */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '14px',
                  paddingTop: '14px',
                  borderTop: '1px solid var(--border-light)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                }}
              >
                <div>
                  <div style={{ color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                    BUILT WITH
                  </div>
                  <div style={{ color: 'var(--text-primary)' }}>React · Node.js · PostgreSQL</div>
                </div>

                <div>
                  <div style={{ color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                    DESIGN GOAL
                  </div>
                  <div style={{ color: 'var(--text-primary)' }}>Less noise. Better decisions.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Bottom Ribbon */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '20px',
            borderTop: '1px solid var(--border-light)',
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(0.66rem, 1.6vw, 0.72rem)',
            letterSpacing: '0.12em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div>CONCEPT BUILDS / FICTIONAL BRANDS / DEMONSTRATION DATA</div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--text-primary)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-crimson)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-primary)')}
          >
            <span>More experiments on GitHub</span>
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
