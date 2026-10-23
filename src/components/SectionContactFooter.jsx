import React, { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowUp, Check } from 'lucide-react';

function SaplingCanvas3D() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animId;
    let angle = 0;

    const loop = () => {
      angle += 0.02;
      setTilt({
        x: Math.sin(angle) * 3,
        y: Math.cos(angle * 0.8) * 4,
      });
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: 'clamp(220px, 45vw, 320px)',
        height: 'clamp(220px, 45vw, 320px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '800px',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.1s ease-out',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src="/japanese-maple-sapling.png"
          alt="Young sapling"
          style={{
            width: '90%',
            height: '90%',
            objectFit: 'contain',
            mixBlendMode: 'multiply',
            filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.08))',
          }}
        />
      </div>
    </div>
  );
}

export default function SectionContactFooter({ onOpenContact }) {
  const [copied, setCopied] = useState(false);
  const email = 'kumawatashish842@gmail.com';

  const handleCopyEmail = e => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="contact-footer-section"
      style={{
        paddingTop: 'var(--section-padding)',
        paddingBottom: 'clamp(32px, 5vw, 48px)',
        borderTop: '1px solid var(--border-light)',
        position: 'relative',
        background: 'var(--bg-primary)',
      }}
    >
      <div className="container">
        {/* Main Section Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)',
            gap: 'clamp(36px, 6vw, 64px)',
            alignItems: 'center',
            marginBottom: 'clamp(48px, 8vw, 96px)',
          }}
          className="contact-grid"
        >
          {/* Left Column: Heading & Large Clickable Email */}
          <div>
            <div className="section-label">
              <span>09 / Your Idea, The Next Branch</span>
            </div>

            <h2
              className="section-title"
              style={{
                marginBottom: 'clamp(18px, 3vw, 28px)',
              }}
            >
              Let’s make<br />
              something grow.
            </h2>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                maxWidth: '520px',
                marginBottom: 'clamp(24px, 4vw, 40px)',
              }}
            >
              Have a seed of an idea, a project ready to take shape, or simply a question? Tell me what you’re imagining. We’ll find the right place to start.
            </p>

            {/* Giant Clickable Email Link */}
            <div style={{ marginBottom: 'clamp(24px, 4vw, 32px)', maxWidth: '100%', overflowWrap: 'break-word' }}>
              <a
                href={`mailto:${email}`}
                onClick={handleCopyEmail}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.35rem, 4.8vw, 3.4rem)',
                  color: 'var(--accent-crimson)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  lineHeight: 1.15,
                  transition: 'opacity 0.2s',
                  cursor: 'pointer',
                  wordBreak: 'break-word',
                  maxWidth: '100%',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                title="Click to copy email address"
              >
                <span>{email}</span>
                <ArrowUpRight size={24} style={{ flexShrink: 0 }} />
              </a>

              {copied && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: '#2E7D32',
                    marginTop: '8px',
                  }}
                >
                  <Check size={14} />
                  <span>Email copied to clipboard!</span>
                </div>
              )}
            </div>

            {/* Availability Dot */}
            <div
              onClick={onOpenContact}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.7rem, 1.8vw, 0.74rem)',
                letterSpacing: '0.12em',
                color: 'var(--text-secondary)',
                textTransform: 'uppercase',
                flexWrap: 'wrap',
                cursor: onOpenContact ? 'pointer' : 'default',
              }}
            >
              <span className="pulse-dot" style={{ width: '7px', height: '7px' }} />
              <span>Available for select projects · Let’s find a fit</span>
            </div>
          </div>

          {/* Right Column: 3D Sapling Interactive Visual */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SaplingCanvas3D />
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                textAlign: 'center',
                marginTop: '12px',
              }}
            >
              The next chapter starts small.
            </div>
          </div>
        </div>

        {/* Global Footer Ribbon */}
        <div
          style={{
            borderTop: '1px solid var(--border-light)',
            paddingTop: '28px',
          }}
        >
          {/* Top Footer Row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px',
              marginBottom: '24px',
            }}
          >
            {/* Logo and Copyright */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700 }}>
                ak.
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                }}
              >
                © 2026 Ashish Kumawat
              </span>
            </div>

            {/* Social & Back to Top Links */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(14px, 3vw, 28px)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.76rem',
                letterSpacing: '0.08em',
                flexWrap: 'wrap',
              }}
            >
              <a
                href="https://github.com/Ashish-kumawat1"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <span>GitHub</span>
                <ArrowUpRight size={12} />
              </a>

              <a
                href="https://www.linkedin.com/in/ashishkumawat-35b577304"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={12} />
              </a>

              <a
                href="#resume"
                onClick={e => {
                  e.preventDefault();
                  alert('Resume download (PDF) initialized.');
                }}
                style={{
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <span>Résumé</span>
                <ArrowUpRight size={12} />
              </a>

              <button
                onClick={scrollToTop}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-primary)',
                  font: 'inherit',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  textTransform: 'uppercase',
                }}
              >
                <span>Back to top</span>
                <ArrowUp size={12} />
              </button>
            </div>
          </div>

          {/* Bottom Note */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.62rem, 1.5vw, 0.68rem)',
              letterSpacing: '0.12em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              lineHeight: 1.5,
            }}
          >
            CONCEPT PORTFOLIO · SAMPLE NAME, PROJECTS & CAREER DETAILS · REPLACE WITH YOUR OWN STORY.
          </div>
        </div>
      </div>
    </footer>
  );
}
