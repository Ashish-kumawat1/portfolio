import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function SectionGrowthRings() {
  const [activeRing, setActiveRing] = useState(null);

  const careerSteps = [
    {
      id: '2024',
      period: '2024 — PRESENT',
      role: 'Independent developer',
      company: 'Freelance · Remote',
      description: 'Partnering directly with founders and design teams on thoughtful websites and web products.',
      ringIndex: 3,
    },
    {
      id: '2022',
      period: '2022 — 2024',
      role: 'Frontend developer',
      company: 'Moss Studio · Illustrative role',
      description: 'Built component systems, interactive brand websites and accessible product interfaces.',
      ringIndex: 2,
    },
    {
      id: '2021',
      period: '2021 — 2022',
      role: 'The first seeds',
      company: 'Personal projects · Open source',
      description: 'Learned by making, sharing small tools and turning curiosity into a daily practice.',
      ringIndex: 1,
    },
  ];

  return (
    <section
      id="growth"
      className="section-responsive growth-section"
      style={{
        backgroundColor: '#13241C',
        color: '#FAF7F2',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 1.25fr)',
            gap: 'clamp(36px, 6vw, 64px)',
            alignItems: 'center',
          }}
          className="growth-grid"
        >
          {/* Left Column: Title, Philosophy & Interactive Tree Growth Rings SVG */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                letterSpacing: '0.12em',
                color: '#8BA698',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              04 / Growth Rings
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
                fontWeight: 400,
                lineHeight: 1.08,
                color: '#FAF7F2',
                marginBottom: '20px',
              }}
            >
              Growing with<br />
              every build.
            </h2>

            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                lineHeight: 1.65,
                color: '#AFC5B9',
                maxWidth: '440px',
                marginBottom: '28px',
              }}
            >
              Every project adds a new ring: a lesson in collaboration, a sharper eye for detail, a better way to build.
            </p>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
                color: '#658273',
                textTransform: 'uppercase',
                marginBottom: 'clamp(24px, 4vw, 40px)',
              }}
            >
              SAMPLE CAREER PATH / EDITABLE ENTRIES
            </div>

            {/* Interactive Tree Cross-Section Growth Rings SVG */}
            <div
              className="growth-rings-wrapper"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '260px',
                height: '260px',
                margin: '10px 0',
              }}
            >
              <svg viewBox="0 0 260 260" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                {/* Center Pith */}
                <circle
                  cx="130"
                  cy="130"
                  r="12"
                  fill="#2A4537"
                  stroke="#3F6352"
                  strokeWidth="1.5"
                />

                {/* Ring 1 (2021) */}
                <ellipse
                  cx="130"
                  cy="130"
                  rx="38"
                  ry="36"
                  fill="none"
                  stroke={activeRing === '2021' ? '#E57373' : '#2A4537'}
                  strokeWidth={activeRing === '2021' ? '3' : '1.8'}
                  style={{ transition: 'all 0.3s', cursor: 'pointer' }}
                  onMouseEnter={() => setActiveRing('2021')}
                  onMouseLeave={() => setActiveRing(null)}
                  onClick={() => setActiveRing(activeRing === '2021' ? null : '2021')}
                />

                {/* Ring 2 (2022) */}
                <path
                  d="M130 60 C175 58, 205 90, 202 130 C200 172, 168 202, 130 200 C90 198, 58 168, 60 130 C62 90, 92 62, 130 60 Z"
                  fill="none"
                  stroke={activeRing === '2022' ? '#E57373' : '#345543'}
                  strokeWidth={activeRing === '2022' ? '3' : '1.8'}
                  style={{ transition: 'all 0.3s', cursor: 'pointer' }}
                  onMouseEnter={() => setActiveRing('2022')}
                  onMouseLeave={() => setActiveRing(null)}
                  onClick={() => setActiveRing(activeRing === '2022' ? null : '2022')}
                />

                {/* Ring 3 (2024 - Outer Cambium) */}
                <path
                  d="M130 20 C200 18, 242 68, 240 130 C238 195, 192 242, 130 240 C65 238, 20 192, 22 130 C24 65, 68 22, 130 20 Z"
                  fill="none"
                  stroke={activeRing === '2024' ? '#E57373' : '#456D58'}
                  strokeWidth={activeRing === '2024' ? '3.5' : '2'}
                  style={{ transition: 'all 0.3s', cursor: 'pointer' }}
                  onMouseEnter={() => setActiveRing('2024')}
                  onMouseLeave={() => setActiveRing(null)}
                  onClick={() => setActiveRing(activeRing === '2024' ? null : '2024')}
                />

                {/* Ambient Bark Border */}
                <path
                  d="M130 10 C210 8, 252 58, 250 130 C248 205, 202 252, 130 250 C55 248, 8 202, 10 130 C12 55, 58 12, 130 10 Z"
                  fill="none"
                  stroke="#213A2D"
                  strokeWidth="2.5"
                  strokeDasharray="6,4"
                />
              </svg>

              <div
                style={{
                  position: 'absolute',
                  bottom: '-24px',
                  left: 0,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: '#658273',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                Hover or tap to examine annual rings
              </div>
            </div>
          </div>

          {/* Right Column: Vertical Timeline */}
          <div
            className="growth-timeline-container"
            style={{
              position: 'relative',
              paddingLeft: '32px',
            }}
          >
            {/* Continuous Vertical Timeline Line */}
            <div
              style={{
                position: 'absolute',
                left: '7px',
                top: '12px',
                bottom: '12px',
                width: '1px',
                backgroundColor: 'rgba(255, 255, 255, 0.18)',
              }}
            />

            {/* Timeline Steps */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(36px, 5vw, 56px)' }}>
              {careerSteps.map(step => {
                const isHovered = activeRing === step.id;
                return (
                  <div
                    key={step.id}
                    onMouseEnter={() => setActiveRing(step.id)}
                    onMouseLeave={() => setActiveRing(null)}
                    onClick={() => setActiveRing(isHovered ? null : step.id)}
                    style={{
                      position: 'relative',
                      cursor: 'pointer',
                      transition: 'transform 0.2s',
                      transform: isHovered ? 'translateX(6px)' : 'translateX(0)',
                    }}
                  >
                    {/* Timeline Node Dot */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-32px',
                        top: '4px',
                        transform: 'translateX(-50%)',
                        width: '15px',
                        height: '15px',
                        borderRadius: '50%',
                        backgroundColor: isHovered ? '#C84C49' : '#13241C',
                        border: '2px solid',
                        borderColor: isHovered ? '#E57373' : '#8BA698',
                        transition: 'all 0.3s',
                        boxShadow: isHovered ? '0 0 12px rgba(229, 115, 115, 0.6)' : 'none',
                      }}
                    />

                    {/* Period */}
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        letterSpacing: '0.12em',
                        color: isHovered ? '#E57373' : '#8BA698',
                        textTransform: 'uppercase',
                        marginBottom: '8px',
                        transition: 'color 0.2s',
                      }}
                    >
                      {step.period}
                    </div>

                    {/* Role & External Indicator */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '8px',
                        marginBottom: '6px',
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: 'clamp(1.5rem, 2.8vw, 1.9rem)',
                          fontWeight: 400,
                          color: '#FAF7F2',
                        }}
                      >
                        {step.role}
                      </h3>
                      <ArrowUpRight
                        size={18}
                        style={{
                          color: isHovered ? '#E57373' : '#8BA698',
                          transition: 'all 0.2s',
                          transform: isHovered ? 'translate(2px, -2px)' : 'none',
                          flexShrink: 0,
                        }}
                      />
                    </div>

                    {/* Company / Type */}
                    <div
                      style={{
                        fontSize: '0.92rem',
                        color: '#AFC5B9',
                        marginBottom: '10px',
                      }}
                    >
                      {step.company}
                    </div>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                        color: '#7D9E8D',
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
