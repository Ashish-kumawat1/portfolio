import React, { useState } from 'react';
import { Code, Box, Server, Command } from 'lucide-react';

export default function SectionBranches() {
  const [activeBranch, setActiveBranch] = useState(null);

  const capabilities = [
    {
      id: 'interfaces',
      title: 'Interfaces',
      symbol: '</>',
      icon: Code,
      tech: 'REACT / NEXT.JS / TYPESCRIPT',
      desc: 'Accessible, responsive interfaces with careful attention to the smallest interaction.',
      gridArea: 'topLeft',
    },
    {
      id: 'motion',
      title: 'Motion & dimension',
      symbol: '↗',
      icon: Box,
      tech: 'THREE.JS / R3F / GSAP',
      desc: 'Purposeful movement and immersive web experiences that invite exploration.',
      gridArea: 'bottomLeft',
    },
    {
      id: 'systems',
      title: 'Systems',
      symbol: '{ }',
      icon: Server,
      tech: 'NODE.JS / POSTGRESQL / REST APIS',
      desc: 'Solid foundations, clean integrations and maintainable application architecture.',
      gridArea: 'topRight',
    },
    {
      id: 'craft',
      title: 'Craft & delivery',
      symbol: '⌘',
      icon: Command,
      tech: 'FIGMA / GIT / VERCEL / WCAG',
      desc: 'From collaborative prototypes to a fast, tested and confidently shipped product.',
      gridArea: 'bottomRight',
    },
  ];

  return (
    <section
      id="branches"
      className="section-responsive branches-section"
      style={{
        borderTop: '1px solid var(--border-light)',
        position: 'relative',
        background: 'var(--bg-primary)',
      }}
    >
      <div className="container">
        {/* Header with Title and Subtitle */}
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
              <span>02 / The Branches</span>
            </div>
            <h2 className="section-title">One mind. Many branches.</h2>
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
            A connected toolkit for building products that feel as good as they work.
          </p>
        </div>

        {/* Tree and Branches Interactive Layout Stage */}
        <div className="branches-interactive-stage">
          {/* Central Botanical Tree Illustration (SVG) */}
          <div className="branches-tree-centerpiece">
            <img
              src="/tree-canopy.png"
              alt="Illustrated tree with broad green canopy, trunk, and roots"
              className="branches-tree-image"
            />
            <svg
              viewBox="0 0 460 560"
              className="branches-tree-svg"
              aria-hidden="true"
              style={{ display: 'none' }}
              role="img"
              aria-label="Illustration of a branching Japanese maple tree"
            >
              <defs>
                <linearGradient id="tree-trunk-gradient" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0" stopColor="#2B211C" />
                  <stop offset="0.45" stopColor="#5A4030" />
                  <stop offset="1" stopColor="#35261F" />
                </linearGradient>
                <linearGradient id="tree-canopy-gradient" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#C84A43" />
                  <stop offset="0.55" stopColor="#9B3230" />
                  <stop offset="1" stopColor="#702524" />
                </linearGradient>
                <filter id="tree-soft-shadow" x="-30%" y="-30%" width="160%" height="180%">
                  <feGaussianBlur stdDeviation="5" />
                </filter>
                <path id="maple-leaf" d="M0-15 4-6 12-9 8-1 16 3 7 5 9 14 1 8-5 15-5 6-14 8-8 1-15-3-6-5Z" />
              </defs>

              {/* Soft grounding shadow */}
              <ellipse cx="230" cy="535" rx="96" ry="12" fill="#3D2E26" opacity="0.12" filter="url(#tree-soft-shadow)" />

              {/* Roots */}
              <g
                stroke={activeBranch ? '#9B3230' : '#4A3B32'}
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                style={{ transition: 'stroke 0.4s' }}
              >
                <path d="M230 460 C230 480 200 500 170 515 M230 460 C230 490 250 510 270 525" />
                <path d="M225 470 C210 495 190 510 150 520 M235 470 C245 490 280 505 310 515" />
                <path d="M228 480 C220 505 210 525 205 535 M232 480 C236 505 245 525 250 535" />
              </g>

              {/* Main Trunk */}
              <path
                d="M225 460 C226 380 227 300 230 220"
                stroke="#3D2E26"
                strokeWidth="14"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M227 460 C228 380 229 300 230 220"
                stroke="url(#tree-trunk-gradient)"
                strokeWidth="9"
                strokeLinecap="round"
                fill="none"
              />
              <path d="M226 448 C228 360 225 295 231 225" stroke="#9A6C4F" strokeWidth="1.6" opacity="0.55" fill="none" />
              <path d="M218 445 C215 385 220 330 218 290" stroke="#241B17" strokeWidth="1.2" opacity="0.4" fill="none" />

              {/* New bonsai silhouette: one sculpted trunk with fine, visible branches */}
              <g stroke="#3A2921" strokeLinecap="round" fill="none">
                <path d="M230 225 C220 179 184 146 132 122 C112 113 92 103 70 86" strokeWidth="7" />
                <path d="M230 214 C252 171 291 137 344 114 C365 105 383 96 400 82" strokeWidth="7" />
                <path d="M227 198 C230 151 226 110 219 69" strokeWidth="6" />
                <path d="M190 164 C162 148 137 145 107 147 M270 157 C301 142 327 140 357 145" strokeWidth="4" />
                <path d="M166 139 C154 112 148 91 148 65 M294 133 C307 107 315 87 317 62" strokeWidth="4" />
                <path d="M224 126 C205 104 190 87 175 66 M238 119 C256 94 270 78 285 56" strokeWidth="4" />
                <path d="M121 123 C101 112 87 100 72 84 M340 113 C361 102 378 91 396 77" strokeWidth="3" />
              </g>

              <g fill="url(#tree-canopy-gradient)" stroke="#702524" strokeWidth="0.8">
                <use href="#maple-leaf" transform="translate(67 80) rotate(-28) scale(1.05)" />
                <use href="#maple-leaf" transform="translate(105 108) rotate(15) scale(1.2)" />
                <use href="#maple-leaf" transform="translate(143 119) rotate(-18) scale(1.3)" />
                <use href="#maple-leaf" transform="translate(150 64) rotate(22) scale(1.1)" />
                <use href="#maple-leaf" transform="translate(177 70) rotate(-12) scale(1.15)" />
                <use href="#maple-leaf" transform="translate(216 62) rotate(8) scale(1.45)" />
                <use href="#maple-leaf" transform="translate(285 54) rotate(-18) scale(1.2)" />
                <use href="#maple-leaf" transform="translate(318 60) rotate(20) scale(1.35)" />
                <use href="#maple-leaf" transform="translate(344 109) rotate(-16) scale(1.25)" />
                <use href="#maple-leaf" transform="translate(398 77) rotate(28) scale(1.1)" />
                <use href="#maple-leaf" transform="translate(105 147) rotate(-12) scale(1.45)" />
                <use href="#maple-leaf" transform="translate(151 145) rotate(22) scale(1.2)" />
                <use href="#maple-leaf" transform="translate(202 116) rotate(-25) scale(1.15)" />
                <use href="#maple-leaf" transform="translate(261 112) rotate(18) scale(1.25)" />
                <use href="#maple-leaf" transform="translate(310 140) rotate(-20) scale(1.35)" />
                <use href="#maple-leaf" transform="translate(357 145) rotate(18) scale(1.35)" />
              </g>

              <g fill="#EF8A73" opacity="0.65">
                <use href="#maple-leaf" transform="translate(126 101) rotate(-20) scale(0.45)" />
                <use href="#maple-leaf" transform="translate(218 48) rotate(12) scale(0.5)" />
                <use href="#maple-leaf" transform="translate(330 101) rotate(20) scale(0.5)" />
                <use href="#maple-leaf" transform="translate(157 151) rotate(-12) scale(0.45)" />
                <use href="#maple-leaf" transform="translate(345 151) rotate(14) scale(0.45)" />
              </g>

              {/* Branch connecting to Top-Left: Interfaces */}
              <path
                d="M230 290 C200 260 140 230 40 180"
                stroke={activeBranch === 'interfaces' ? 'var(--accent-crimson)' : '#6E5D52'}
                strokeWidth={activeBranch === 'interfaces' ? '3' : '2'}
                strokeDasharray={activeBranch === 'interfaces' ? 'none' : '4,3'}
                strokeLinecap="round"
                fill="none"
                style={{ transition: 'all 0.3s' }}
              />

              {/* Branch connecting to Bottom-Left: Motion */}
              <path
                d="M230 330 C190 340 130 380 40 430"
                stroke={activeBranch === 'motion' ? 'var(--accent-crimson)' : '#6E5D52'}
                strokeWidth={activeBranch === 'motion' ? '3' : '2'}
                strokeDasharray={activeBranch === 'motion' ? 'none' : '4,3'}
                strokeLinecap="round"
                fill="none"
                style={{ transition: 'all 0.3s' }}
              />

              {/* Branch connecting to Top-Right: Systems */}
              <path
                d="M230 280 C260 250 320 220 420 180"
                stroke={activeBranch === 'systems' ? 'var(--accent-crimson)' : '#6E5D52'}
                strokeWidth={activeBranch === 'systems' ? '3' : '2'}
                strokeDasharray={activeBranch === 'systems' ? 'none' : '4,3'}
                strokeLinecap="round"
                fill="none"
                style={{ transition: 'all 0.3s' }}
              />

              {/* Branch connecting to Bottom-Right: Craft */}
              <path
                d="M230 340 C270 350 330 390 420 430"
                stroke={activeBranch === 'craft' ? 'var(--accent-crimson)' : '#6E5D52'}
                strokeWidth={activeBranch === 'craft' ? '3' : '2'}
                strokeDasharray={activeBranch === 'craft' ? 'none' : '4,3'}
                strokeLinecap="round"
                fill="none"
                style={{ transition: 'all 0.3s' }}
              />

            </svg>

            {/* Rooted Tag at Base of Tree */}
            <div
              className="branches-root-tag"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
                color: 'var(--text-secondary)',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '12px',
              }}
            >
              <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
              <span>Rooted in the web platform</span>
            </div>
          </div>

          {/* 4 Capability Cards Positioned Around the Tree or in Responsive Grid */}
          <div className="branches-cards-grid">
            {/* Top Left: Interfaces */}
            <div className="branches-card-slot slot-top-left">
              <CapabilityCard
                item={capabilities[0]}
                isActive={activeBranch === capabilities[0].id}
                onHover={setActiveBranch}
              />
            </div>

            {/* Top Right: Systems */}
            <div className="branches-card-slot slot-top-right">
              <CapabilityCard
                item={capabilities[2]}
                isActive={activeBranch === capabilities[2].id}
                onHover={setActiveBranch}
              />
            </div>

            {/* Bottom Left: Motion & Dimension */}
            <div className="branches-card-slot slot-bottom-left">
              <CapabilityCard
                item={capabilities[1]}
                isActive={activeBranch === capabilities[1].id}
                onHover={setActiveBranch}
              />
            </div>

            {/* Bottom Right: Craft & Delivery */}
            <div className="branches-card-slot slot-bottom-right">
              <CapabilityCard
                item={capabilities[3]}
                isActive={activeBranch === capabilities[3].id}
                onHover={setActiveBranch}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({ item, isActive, onHover }) {
  return (
    <div
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onHover(isActive ? null : item.id)}
      className={`capability-card ${isActive ? 'active' : ''}`}
      style={{
        pointerEvents: 'auto',
        background: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid',
        borderColor: isActive ? 'var(--accent-crimson)' : 'var(--border-card)',
        borderRadius: '16px',
        padding: 'clamp(20px, 3.5vw, 32px)',
        width: '100%',
        boxShadow: isActive ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: isActive ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.3s var(--transition-smooth)',
        cursor: 'pointer',
      }}
    >
      {/* Title & Symbol */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '12px',
        }}
      >
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.4rem, 2.4vw, 1.65rem)',
            fontWeight: 400,
            color: 'var(--text-primary)',
          }}
        >
          {item.title}
        </h3>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1rem',
            color: isActive ? 'var(--accent-crimson)' : 'var(--text-muted)',
            transition: 'color 0.2s',
          }}
        >
          {item.symbol}
        </span>
      </div>

      {/* Tech Stack */}
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          letterSpacing: '0.12em',
          color: isActive ? 'var(--accent-crimson)' : 'var(--text-muted)',
          textTransform: 'uppercase',
          marginBottom: '12px',
          transition: 'color 0.2s',
        }}
      >
        {item.tech}
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: 'clamp(0.88rem, 1.8vw, 0.94rem)',
          lineHeight: 1.6,
          color: 'var(--text-secondary)',
        }}
      >
        {item.desc}
      </p>
    </div>
  );
}
