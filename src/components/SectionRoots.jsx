import React from 'react';

function WebsitePreview() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: 'clamp(260px, 45vw, 380px)',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
        border: '1px solid var(--border-light)',
        backgroundColor: '#fff',
      }}
    >
      <iframe
        src="https://sakuratreee.netlify.app/"
        title="Sakura Tree website preview"
        loading="lazy"
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          border: 0,
        }}
      />
    </div>
  );
}

export default function SectionRoots() {
  return (
    <section
      id="roots"
      className="section-responsive"
      style={{
        borderTop: '1px solid var(--border-light)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: 'clamp(32px, 5vw, 56px)' }}>
          <div className="section-label">
            <span>01 / The Roots</span>
          </div>
          <h2 className="section-title">
            Good things grow<br />
            from good foundations.
          </h2>
        </div>

        {/* Two Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.15fr)',
            gap: 'clamp(32px, 5vw, 56px)',
            alignItems: 'center',
          }}
          className="roots-grid"
        >
          {/* Left Column: Website Preview */}
          <div>
            <WebsitePreview />
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                marginTop: '16px',
              }}
            >
              The seed / Sakura Tree, reimagined.
            </div>
          </div>

          {/* Right Column: Bio & Core Beliefs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <p
              style={{
                fontSize: '1.25rem',
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                fontWeight: 400,
              }}
            >
              I’m Ashish, an independent developer at the intersection of design and engineering. I turn early ideas into considered digital experiences — balancing the expressive with the practical, from the first sketch to the final deployment.
            </p>

            {/* Core Values Sub-List */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '28px',
                paddingTop: '16px',
                borderTop: '1px solid var(--border-light)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ color: 'var(--accent-crimson)' }}>↳</span>
                <span>Design-minded</span>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ color: 'var(--accent-crimson)' }}>↳</span>
                <span>Detail-driven</span>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ color: 'var(--accent-crimson)' }}>↳</span>
                <span>Independently yours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
