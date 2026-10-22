import React from 'react';

export default function SectionHowWeWork() {
  const steps = [
    {
      num: '01',
      title: 'Plant the seed',
      description: 'A conversation about your idea, your people and what success should look like.',
      phase: 'DISCOVER & DEFINE',
    },
    {
      num: '02',
      title: 'Shape the branches',
      description: 'A clear direction, a considered prototype and a plan we both believe in.',
      phase: 'DESIGN & PROTOTYPE',
    },
    {
      num: '03',
      title: 'Build with care',
      description: 'Thoughtful engineering, regular previews and space for your feedback.',
      phase: 'DEVELOP & REFINE',
    },
    {
      num: '04',
      title: 'Let it flourish',
      description: 'Test, launch and hand over. With the documentation and support to keep growing.',
      phase: 'LAUNCH & SUPPORT',
    },
  ];

  return (
    <section
      id="how-we-work"
      className="section-responsive how-we-work-section"
      style={{
        borderTop: '1px solid var(--border-light)',
        position: 'relative',
        background: 'var(--bg-primary)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 'clamp(36px, 6vw, 84px)' }}>
          <div className="section-label">
            <span>07 / How We Work</span>
          </div>
          <h2 className="section-title">
            From a small seed to something lasting.
          </h2>
        </div>

        {/* Workflow Diagram & Steps */}
        <div style={{ position: 'relative' }}>
          {/* Subtle curved connecting branch line (SVG) behind steps - hidden when columns wrap */}
          <div
            className="workflow-connecting-line"
            style={{
              position: 'absolute',
              top: '20px',
              left: '4%',
              right: '4%',
              height: '30px',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          >
            <svg
              viewBox="0 0 1000 40"
              preserveAspectRatio="none"
              style={{ width: '100%', height: '100%', overflow: 'visible' }}
            >
              <path
                d="M0 20 Q 250 5, 500 20 T 1000 20"
                fill="none"
                stroke="#D8D1C3"
                strokeWidth="1.5"
                strokeDasharray="4,4"
              />
            </svg>
          </div>

          {/* 4 Steps Grid */}
          <div
            className="workflow-steps-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
              gap: 'clamp(24px, 4vw, 40px)',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {steps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '240px',
                }}
              >
                <div>
                  {/* Number Badge Pill */}
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: '#FFFFFF',
                      border: '1px solid var(--accent-crimson-border)',
                      color: 'var(--accent-crimson)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.82rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 'clamp(18px, 3vw, 28px)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    }}
                  >
                    {step.num}
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.45rem, 2.3vw, 1.75rem)',
                      fontWeight: 400,
                      color: 'var(--text-primary)',
                      marginBottom: '12px',
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: 'clamp(0.88rem, 1.8vw, 0.94rem)',
                      lineHeight: 1.6,
                      color: 'var(--text-secondary)',
                      marginBottom: '20px',
                    }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Phase Tag */}
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.12em',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border-light)',
                  }}
                >
                  {step.phase}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
