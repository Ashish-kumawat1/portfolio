import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import HeroTree3D from './HeroTree3D';

export default function HeroSection({ onOpenContact, onNavigate }) {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 'clamp(84px, 11vw, 120px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 1.25fr)',
            gap: 'clamp(24px, 4vw, 48px)',
            alignItems: 'center',
            width: '100%',
            padding: '16px 0 clamp(24px, 5vw, 44px) 0',
          }}
          className="hero-grid"
        >
          {/* Left Column: Typography & Intent */}
          <div className="hero-text-col" style={{ display: 'flex', flexDirection: 'column', zIndex: 10 }}>
            {/* Freelance Availability Status */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.7rem, 1.8vw, 0.74rem)',
                letterSpacing: '0.12em',
                color: 'var(--text-secondary)',
                textTransform: 'uppercase',
                marginBottom: 'clamp(18px, 3vw, 28px)',
              }}
            >
              <span className="pulse-dot" />
              <span>Open for freelance · November 2026</span>
            </div>

            {/* Main Name Heading */}
            <h1
              className="hero-main-title"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(3.2rem, 7.8vw, 6.4rem)',
                fontWeight: 400,
                lineHeight: 0.95,
                letterSpacing: '-0.025em',
                color: 'var(--text-primary)',
                marginBottom: 'clamp(18px, 3vw, 28px)',
              }}
            >
              Ashish<br />Kumawat
            </h1>

            {/* Philosophy Subheading */}
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.5rem, 2.8vw, 2.3rem)',
                fontWeight: 400,
                lineHeight: 1.22,
                color: 'var(--text-primary)',
                marginBottom: 'clamp(14px, 2.5vw, 20px)',
                fontStyle: 'normal',
              }}
            >
              Thoughtful code.<br />
              <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>Room to grow.</span>
            </h2>

            {/* Bio Description */}
            <p
              style={{
                fontSize: 'clamp(0.96rem, 2vw, 1.05rem)',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                maxWidth: '460px',
                marginBottom: 'clamp(24px, 4vw, 36px)',
              }}
            >
              Independent creative developer crafting expressive websites and dependable digital products. Rooted in purpose. Built for what’s next.
            </p>

            {/* CTAs */}
            <div
              className="hero-cta-group"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                flexWrap: 'wrap',
                marginBottom: 'clamp(24px, 4vw, 42px)',
              }}
            >
              <button
                onClick={() => onNavigate('work')}
                className="btn-primary"
              >
                <span>Explore my work</span>
                <ArrowUpRight size={16} />
              </button>

              <button
                onClick={onOpenContact}
                className="btn-secondary"
              >
                <span>Start a project</span>
                <ArrowUpRight size={16} />
              </button>
            </div>

            {/* Geo Location */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
              }}
            >
              <span>Based in India · Working everywhere</span>
              <ArrowUpRight size={12} />
            </div>
          </div>

          {/* Right Column: 3D Interactive Japanese Maple Tree */}
          <div
            className="hero-tree-wrapper"
            style={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <HeroTree3D onNavigate={onNavigate} />
          </div>
        </div>
      </div>

      {/* Hero Bottom Banner Ribbon */}
      <div
        className="hero-bottom-ribbon"
        style={{
          borderTop: '1px solid var(--border-light)',
          padding: '14px 0',
          background: 'rgba(250, 247, 242, 0.75)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          marginTop: 'auto',
        }}
      >
        <div
          className="container hero-ribbon-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(0.66rem, 1.6vw, 0.72rem)',
            letterSpacing: '0.12em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          <button
            onClick={() => onNavigate('roots')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'none',
              border: 'none',
              color: 'inherit',
              font: 'inherit',
              cursor: 'pointer',
              letterSpacing: 'inherit',
              textTransform: 'inherit',
            }}
          >
            <ArrowDown size={12} />
            <span>Scroll to follow the branches</span>
          </button>

          <div className="hero-ribbon-center">Roots — Skills — Work — Growth — Connection</div>

          <div>Illustrative Portfolio / 2026</div>
        </div>
      </div>
    </section>
  );
}
