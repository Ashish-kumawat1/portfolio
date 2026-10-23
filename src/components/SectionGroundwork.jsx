import React from 'react';
import { GraduationCap, Award, Sprout } from 'lucide-react';

export default function SectionGroundwork() {
  const credentials = [
    {
      icon: GraduationCap,
      title: 'Bachelor of Computer Applications',
      credential: 'University of Rajasthan',
      description: 'Bachelor of Computer Applications with a 7.26 CGPA, focused on software development and application engineering.',
      period: 'AUGUST 2026 / BCA · 7.26 CGPA',
    },
    {
      icon: GraduationCap,
      title: 'PCM (Physics, Chemistry, Mathematics)',
      credential: 'Board of Secondary Education Rajasthan',
      description: 'Senior secondary education with a science and mathematics foundation.',
      period: '2023 / XII',
    },
    {
      icon: Award,
      title: 'Full Stack Developer',
      credential: 'Final Exam Certification',
      description: 'Certification demonstrating full-stack development knowledge across modern web application development.',
      period: 'CERTIFICATION / FINAL EXAM',
    },
    {
      icon: Award,
      title: 'GenAI-Powered Data Analytics',
      credential: 'Tata · Job Simulation',
      description: 'Practical experience with GenAI-assisted data analytics workflows through a job simulation.',
      period: 'TATA / JOB SIMULATION',
    },
    {
      icon: Sprout,
      title: 'Always a student',
      credential: 'Continuous independent learning',
      description: 'Exploring creative coding, real-time 3D and the possibilities of the open web.',
      period: 'ONGOING / PERSONAL PRACTICE',
    },
  ];

  return (
    <section
      id="groundwork"
      className="section-responsive groundwork-section"
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
              <span>05 / The Groundwork</span>
            </div>
            <h2 className="section-title">Curiosity, with a foundation.</h2>
          </div>

          <p
            style={{
              maxWidth: '380px',
              fontSize: 'clamp(0.96rem, 2vw, 1.05rem)',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              marginTop: '8px',
            }}
          >
            Education and certifications that form the foundation for thoughtful digital products.
          </p>
        </div>

        {/* 3 Credential Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(20px, 3.5vw, 32px)',
          }}
        >
          {credentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-card)',
                  borderRadius: '16px',
                  padding: 'clamp(24px, 4vw, 40px) clamp(20px, 3.5vw, 32px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '300px',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.3s var(--transition-smooth)',
                }}
                className="hover-card"
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  e.currentTarget.style.borderColor = 'var(--accent-crimson-border)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  e.currentTarget.style.borderColor = 'var(--border-card)';
                }}
              >
                <div>
                  {/* Icon */}
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'var(--accent-crimson-subtle)',
                      color: 'var(--accent-crimson)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 'clamp(20px, 3.5vw, 28px)',
                    }}
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.5rem, 2.5vw, 1.8rem)',
                      fontWeight: 400,
                      color: 'var(--text-primary)',
                      marginBottom: '6px',
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Credential / Subtitle */}
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '16px',
                    }}
                  >
                    {item.credential}
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.94rem',
                      lineHeight: 1.6,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Footer Period / Tag */}
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.12em',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    paddingTop: '20px',
                    borderTop: '1px solid var(--border-light)',
                    marginTop: '24px',
                  }}
                >
                  {item.period}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
