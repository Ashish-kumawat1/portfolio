import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function SectionNewBranches({ onOpenContact }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const services = [
    {
      num: '01',
      title: 'Websites with character',
      description: 'Distinctive brand and portfolio websites, built to be fast, accessible and easy to manage.',
      tags: 'CREATIVE DEVELOPMENT · CMS · COMMERCE',
    },
    {
      num: '02',
      title: 'Products with purpose',
      description: 'From your first MVP to a more mature product: interfaces, integrations and dependable systems.',
      tags: 'WEB APPS · DASHBOARDS · API INTEGRATIONS',
    },
    {
      num: '03',
      title: 'A little extra dimension',
      description: 'Immersive 3D moments and purposeful motion that make your digital presence feel alive.',
      tags: 'WEBGL · INTERACTION · CREATIVE CODING',
    },
  ];

  return (
    <section
      id="new-branches"
      className="section-responsive new-branches-section"
      style={{
        borderTop: '1px solid var(--border-light)',
        position: 'relative',
        background: 'var(--bg-primary)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.35fr)',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'flex-start',
          }}
          className="new-branches-grid"
        >
          {/* Left Column: Heading, Bio, CTA */}
          <div>
            <div className="section-label">
              <span>06 / New Branches</span>
            </div>

            <h2
              className="section-title"
              style={{
                marginBottom: 'clamp(18px, 3vw, 28px)',
              }}
            >
              What can we<br />
              grow together?
            </h2>

            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                marginBottom: 'clamp(24px, 4vw, 36px)',
                maxWidth: '440px',
              }}
            >
              One dedicated developer, from first conversation to launch. Thoughtful collaboration without the layers.
            </p>

            <button
              onClick={onOpenContact}
              className="btn-primary"
              style={{ marginBottom: 'clamp(20px, 3vw, 32px)' }}
            >
              <span>Tell me about your idea</span>
              <ArrowUpRight size={16} />
            </button>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
              }}
            >
              PROJECT-BASED / COLLABORATIVE / REMOTE
            </div>
          </div>

          {/* Right Column: 3 Service Rows */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {services.map((item, idx) => {
              const isHovered = hoveredIdx === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onClick={onOpenContact}
                  style={{
                    padding: 'clamp(22px, 4vw, 36px) 0',
                    borderBottom: '1px solid var(--border-light)',
                    borderTop: idx === 0 ? '1px solid var(--border-light)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'clamp(28px, 4vw, 40px) 1fr 24px',
                      gap: 'clamp(10px, 2vw, 16px)',
                      alignItems: 'baseline',
                      marginBottom: '10px',
                    }}
                  >
                    {/* Step Number */}
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'clamp(0.74rem, 1.8vw, 0.82rem)',
                        color: isHovered ? 'var(--accent-crimson)' : 'var(--text-muted)',
                        transition: 'color 0.2s',
                      }}
                    >
                      {item.num}
                    </span>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                        fontWeight: 400,
                        color: isHovered ? 'var(--accent-crimson)' : 'var(--text-primary)',
                        transition: 'color 0.2s',
                        lineHeight: 1.2,
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Arrow */}
                    <ArrowUpRight
                      size={20}
                      style={{
                        color: isHovered ? 'var(--accent-crimson)' : 'var(--text-muted)',
                        transform: isHovered ? 'translate(3px, -3px)' : 'none',
                        transition: 'all 0.2s',
                      }}
                    />
                  </div>

                  {/* Description & Tags */}
                  <div
                    className="service-row-desc"
                    style={{ paddingLeft: 'clamp(28px, 5vw, 56px)' }}
                  >
                    <p
                      style={{
                        fontSize: 'clamp(0.88rem, 1.8vw, 0.96rem)',
                        lineHeight: 1.6,
                        color: 'var(--text-secondary)',
                        marginBottom: '12px',
                      }}
                    >
                      {item.description}
                    </p>

                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        letterSpacing: '0.12em',
                        color: isHovered ? 'var(--accent-crimson)' : 'var(--text-muted)',
                        textTransform: 'uppercase',
                        transition: 'color 0.2s',
                      }}
                    >
                      {item.tags}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
