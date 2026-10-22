import React from 'react';
import { Box, Sparkles, GitBranch, ArrowUpRight } from 'lucide-react';

export default function SectionOffshoots() {
  const offshoots = [
    {
      category: 'EXPERIMENT / WEBGL',
      icon: Box,
      title: 'A tiny world in the browser',
      description: 'Exploring light, depth and the quiet magic of real-time 3D.',
      tag: 'CREATIVE CODING · 2026',
      link: 'https://github.com',
    },
    {
      category: 'FIELD NOTE / ACCESSIBILITY',
      icon: Sparkles,
      title: 'Beautiful should mean usable',
      description: 'Why keyboard navigation belongs in the very first prototype.',
      tag: 'DESIGN ENGINEERING · 2026',
      link: 'https://github.com',
    },
    {
      category: 'OPEN SOURCE / TOOLKIT',
      icon: GitBranch,
      title: 'Small tools, shared freely',
      description: 'Reusable UI patterns and useful little things from the workbench.',
      tag: 'CODE & COMPONENTS · 2026',
      link: 'https://github.com',
    },
  ];

  return (
    <section
      id="offshoots"
      className="section-responsive offshoots-section"
      style={{
        borderTop: '1px solid var(--border-light)',
        position: 'relative',
        background: 'var(--bg-primary)',
      }}
    >
      <div className="container">
        {/* Header */}
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
              <span>08 / The Offshoots</span>
            </div>
            <h2 className="section-title">Still curious. Always making.</h2>
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
            A few sample notes and side projects from beyond the main branches.
          </p>
        </div>

        {/* 3 Experiment Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(20px, 3.5vw, 32px)',
          }}
        >
          {offshoots.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-card)',
                  borderRadius: '16px',
                  padding: 'clamp(24px, 4vw, 36px) clamp(20px, 3.5vw, 32px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '290px',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.3s var(--transition-smooth)',
                  cursor: 'pointer',
                }}
                className="offshoot-card"
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
                  {/* Category and Icon */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: 'clamp(18px, 3vw, 24px)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        letterSpacing: '0.12em',
                        color: 'var(--accent-crimson)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {item.category}
                    </span>

                    <span style={{ color: 'var(--accent-crimson)' }}>
                      <Icon size={18} strokeWidth={1.8} />
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.45rem, 2.3vw, 1.75rem)',
                      fontWeight: 400,
                      color: 'var(--text-primary)',
                      lineHeight: 1.25,
                      marginBottom: '14px',
                    }}
                  >
                    {item.title}
                  </h3>

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

                {/* Footer Tag and Arrow */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
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
                  <span>{item.tag}</span>
                  <ArrowUpRight size={14} style={{ color: 'var(--text-primary)' }} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
