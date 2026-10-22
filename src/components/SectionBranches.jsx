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
            <svg
              viewBox="0 0 460 560"
              className="branches-tree-svg"
            >
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
                stroke="#4F3C32"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
              />

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

              {/* Tree Canopy Crown Branching Structure */}
              <g stroke="#3D2E26" strokeWidth="3" strokeLinecap="round" fill="none">
                <path d="M230 220 C220 180 180 140 160 100" />
                <path d="M230 220 C240 180 270 140 290 100" />
                <path d="M230 220 C230 160 230 120 230 80" />
                <path d="M200 160 C170 150 140 120 120 90" />
                <path d="M250 160 C280 150 310 120 330 90" />
                <path d="M230 140 C210 110 200 80 190 60" />
                <path d="M230 140 C250 110 260 80 270 60" />
              </g>

              {/* Red Japanese Maple Leaf Buds & Foliage Dots */}
              {[
                { cx: 160, cy: 100, r: 6 },
                { cx: 290, cy: 100, r: 6 },
                { cx: 230, cy: 80, r: 7 },
                { cx: 120, cy: 90, r: 5 },
                { cx: 330, cy: 90, r: 5 },
                { cx: 190, cy: 60, r: 6 },
                { cx: 270, cy: 60, r: 6 },
                { cx: 230, cy: 45, r: 8 },
                { cx: 145, cy: 125, r: 5 },
                { cx: 305, cy: 125, r: 5 },
                { cx: 210, cy: 110, r: 6 },
                { cx: 250, cy: 110, r: 6 },
                { cx: 175, cy: 80, r: 5 },
                { cx: 285, cy: 75, r: 5 },
              ].map((leaf, idx) => (
                <circle
                  key={idx}
                  cx={leaf.cx}
                  cy={leaf.cy}
                  r={leaf.r}
                  fill={activeBranch ? '#BA3431' : '#9B3230'}
                  opacity={0.88}
                  style={{ transition: 'all 0.3s' }}
                />
              ))}
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
