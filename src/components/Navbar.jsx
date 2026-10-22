import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, ArrowUpRight, Menu, X } from 'lucide-react';
import { ambientAudio } from '../utils/audio';

export default function Navbar({ onOpenContact, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleToggleSound = () => {
    const active = ambientAudio.toggle();
    setSoundEnabled(active);
  };

  const handleMobileNav = (sectionId) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header
      className={`site-navbar ${scrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.35s ease',
        backgroundColor: scrolled ? 'rgba(250, 247, 242, 0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(231, 226, 215, 0.7)' : '1px solid transparent',
        padding: scrolled ? '12px 0' : '22px 0',
      }}
    >
      <div
        className="container navbar-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
        }}
      >
        {/* Brand Logo */}
        <div
          onClick={() => {
            setMobileMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
            userSelect: 'none',
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.65rem',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
            }}
          >
            ak.
          </span>
          <span
            className="brand-subtitle"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              paddingLeft: '6px',
              borderLeft: '1px solid var(--border-light)',
            }}
          >
            Independent Developer
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <div
            className="nav-links"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            <button
              onClick={() => onNavigate('roots')}
              className="nav-link-btn"
            >
              The story
            </button>
            <button
              onClick={() => onNavigate('work')}
              className="nav-link-btn"
            >
              Selected work
            </button>
            <button
              onClick={() => onNavigate('branches')}
              className="nav-link-btn"
            >
              Expertise
            </button>
            <button
              onClick={() => onNavigate('growth')}
              className="nav-link-btn"
            >
              Growth
            </button>
          </div>

          {/* Ambient Sound Toggle Button */}
          <button
            onClick={handleToggleSound}
            className="sound-toggle-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              background: soundEnabled ? 'var(--accent-crimson-subtle)' : 'rgba(255, 255, 255, 0.75)',
              border: '1px solid',
              borderColor: soundEnabled ? 'var(--accent-crimson-border)' : 'var(--border-light)',
              borderRadius: '9999px',
              color: soundEnabled ? 'var(--accent-crimson)' : 'var(--text-secondary)',
              cursor: 'pointer',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
            }}
            title={soundEnabled ? 'Mute ambient nature audio' : 'Play soft breeze audio'}
          >
            {soundEnabled ? <Volume2 size={13} /> : <VolumeX size={13} />}
            <span className="sound-toggle-label">{soundEnabled ? 'Audio on' : 'Breeze'}</span>
          </button>

          {/* Let's talk CTA */}
          <button
            onClick={onOpenContact}
            className="btn-secondary nav-cta-btn"
            style={{
              padding: '8px 18px',
              fontSize: '0.86rem',
              borderRadius: '9999px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              whiteSpace: 'nowrap',
            }}
          >
            <span>Let’s talk</span>
            <ArrowUpRight size={14} />
          </button>
        </nav>

        {/* Mobile Action Controls (Audio toggle + CTA + Hamburger) */}
        <div
          className="mobile-nav-actions"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <button
            onClick={handleToggleSound}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              background: soundEnabled ? 'var(--accent-crimson-subtle)' : 'rgba(255, 255, 255, 0.85)',
              border: '1px solid',
              borderColor: soundEnabled ? 'var(--accent-crimson-border)' : 'var(--border-light)',
              borderRadius: '50%',
              color: soundEnabled ? 'var(--accent-crimson)' : 'var(--text-secondary)',
              cursor: 'pointer',
            }}
            title={soundEnabled ? 'Mute ambient audio' : 'Play soft breeze audio'}
            aria-label="Toggle ambient sound"
          >
            {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
          </button>

          <button
            onClick={onOpenContact}
            className="btn-primary mobile-cta-btn"
            style={{
              padding: '7px 14px',
              fontSize: '0.78rem',
              borderRadius: '9999px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              whiteSpace: 'nowrap',
            }}
          >
            <span>Talk</span>
            <ArrowUpRight size={12} />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hamburger-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              background: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid var(--border-light)',
              borderRadius: '10px',
              color: 'var(--text-primary)',
              cursor: 'pointer',
            }}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer-overlay"
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            height: '100dvh',
            backgroundColor: 'rgba(28, 25, 23, 0.5)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            animation: 'fadeIn 0.2s ease-out',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setMobileMenuOpen(false);
          }}
        >
          <div
            className="mobile-drawer-sheet"
            style={{
              backgroundColor: 'var(--bg-primary)',
              borderBottom: '1px solid var(--border-light)',
              padding: '80px 24px 28px 24px',
              maxHeight: '90dvh',
              overflowY: 'auto',
              boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '24px' }}>
              <button
                onClick={() => handleMobileNav('roots')}
                className="mobile-nav-link"
              >
                <span className="mobile-nav-num">01</span>
                <span>The Story</span>
              </button>
              <button
                onClick={() => handleMobileNav('branches')}
                className="mobile-nav-link"
              >
                <span className="mobile-nav-num">02</span>
                <span>Capabilities</span>
              </button>
              <button
                onClick={() => handleMobileNav('work')}
                className="mobile-nav-link"
              >
                <span className="mobile-nav-num">03</span>
                <span>Selected Work</span>
              </button>
              <button
                onClick={() => handleMobileNav('growth')}
                className="mobile-nav-link"
              >
                <span className="mobile-nav-num">04</span>
                <span>Growth Rings</span>
              </button>
              <button
                onClick={() => handleMobileNav('groundwork')}
                className="mobile-nav-link"
              >
                <span className="mobile-nav-num">05</span>
                <span>The Groundwork</span>
              </button>
              <button
                onClick={() => handleMobileNav('new-branches')}
                className="mobile-nav-link"
              >
                <span className="mobile-nav-num">06</span>
                <span>Services & Offerings</span>
              </button>
              <button
                onClick={() => handleMobileNav('how-we-work')}
                className="mobile-nav-link"
              >
                <span className="mobile-nav-num">07</span>
                <span>How We Work</span>
              </button>
              <button
                onClick={() => handleMobileNav('offshoots')}
                className="mobile-nav-link"
              >
                <span className="mobile-nav-num">08</span>
                <span>Offshoots & Notes</span>
              </button>
              <button
                onClick={() => handleMobileNav('contact')}
                className="mobile-nav-link"
              >
                <span className="mobile-nav-num">09</span>
                <span>Contact & Connect</span>
              </button>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                paddingTop: '20px',
                borderTop: '1px solid var(--border-light)',
              }}
            >
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="btn-primary"
                style={{ width: '100%', padding: '12px', fontSize: '0.92rem' }}
              >
                <span>Start a project</span>
                <ArrowUpRight size={16} />
              </button>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                }}
              >
                <span>Ashish Kumawat · 2026</span>
                <button
                  onClick={handleToggleSound}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: soundEnabled ? 'var(--accent-crimson)' : 'inherit',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    font: 'inherit',
                  }}
                >
                  {soundEnabled ? <Volume2 size={12} /> : <VolumeX size={12} />}
                  <span>{soundEnabled ? 'Ambient sound on' : 'Ambient sound off'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
