import React, { useState } from 'react';
import { X, Check, ShoppingBag, ShieldCheck, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview'); // overview, demo, architecture
  const [cartCount, setCartCount] = useState(0);
  const [selectedRange, setSelectedRange] = useState('30d');

  if (!project) return null;

  return (
    <div
      className="project-modal-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(8px, 3vw, 24px)',
        backgroundColor: 'rgba(28, 25, 23, 0.7)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        animation: 'fadeIn 0.25s ease-out',
      }}
      onClick={e => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="project-modal-container"
        style={{
          width: '100%',
          maxWidth: '920px',
          maxHeight: '92dvh',
          backgroundColor: '#FFFFFF',
          borderRadius: 'clamp(16px, 3vw, 24px)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.25)',
          border: '1px solid var(--border-light)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        {/* Modal Header */}
        <div
          className="project-modal-header"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            padding: 'clamp(16px, 3vw, 24px) clamp(16px, 4vw, 32px)',
            borderBottom: '1px solid var(--border-light)',
            background: 'var(--bg-primary)',
          }}
        >
          <div style={{ flex: '1 1 240px', minWidth: 0 }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.66rem, 1.6vw, 0.72rem)',
                letterSpacing: '0.12em',
                color: 'var(--accent-crimson)',
                textTransform: 'uppercase',
                marginBottom: '4px',
              }}
            >
              {project.category} · {project.id}
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.4rem, 2.8vw, 1.85rem)',
                color: 'var(--text-primary)',
                fontWeight: 500,
                lineHeight: 1.2,
                wordBreak: 'break-word',
              }}
            >
              {project.title}
            </h2>
          </div>

          <div
            className="project-modal-header-actions"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              flexWrap: 'wrap',
            }}
          >
            {/* Tabs */}
            <div
              style={{
                display: 'flex',
                background: '#EAE4D9',
                padding: '3px',
                borderRadius: '9999px',
                gap: '2px',
              }}
            >
              {['overview', 'demo', 'architecture'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    border: 'none',
                    padding: '6px 12px',
                    borderRadius: '9999px',
                    fontSize: 'clamp(0.72rem, 1.6vw, 0.8rem)',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'capitalize',
                    cursor: 'pointer',
                    background: activeTab === tab ? '#FFFFFF' : 'transparent',
                    color: activeTab === tab ? 'var(--text-primary)' : 'var(--text-secondary)',
                    fontWeight: activeTab === tab ? 600 : 400,
                    transition: 'all 0.2s',
                    boxShadow: activeTab === tab ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            <button
              onClick={onClose}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1px solid var(--border-light)',
                background: '#FFFFFF',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
                flexShrink: 0,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.borderColor = 'var(--text-primary)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--border-light)';
              }}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div style={{ padding: 'clamp(18px, 4vw, 32px)', overflowY: 'auto', flex: 1 }}>
          {activeTab === 'overview' && (
            <div>
              <p
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: '24px',
                }}
              >
                {project.fullDescription}
              </p>

              {/* Specs Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '16px',
                  padding: 'clamp(16px, 3vw, 24px)',
                  borderRadius: '16px',
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-light)',
                  marginBottom: '28px',
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px' }}>
                    Built with
                  </div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.92rem' }}>
                    {project.builtWith}
                  </div>
                </div>

                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px' }}>
                    Design Goal
                  </div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.92rem' }}>
                    {project.designGoal}
                  </div>
                </div>

                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px' }}>
                    Performance
                  </div>
                  <div style={{ fontWeight: 600, color: '#2E7D32', fontSize: '0.92rem' }}>
                    100 / 100 Lighthouse
                  </div>
                </div>
              </div>

              {/* Highlights & Key Innovations */}
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.2rem, 2.2vw, 1.4rem)', marginBottom: '16px' }}>
                Key Highlights & Thought Process
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {project.highlights.map((h, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      fontSize: 'clamp(0.88rem, 1.8vw, 0.96rem)',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55,
                    }}
                  >
                    <span
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: 'var(--accent-crimson-subtle)',
                        color: 'var(--accent-crimson)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      <Check size={12} />
                    </span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'demo' && (
            <div>
              {project.type === 'verdant' ? (
                <div
                  style={{
                    border: '1px solid var(--border-light)',
                    borderRadius: '16px',
                    padding: 'clamp(16px, 3vw, 24px)',
                    background: '#F9F7F2',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderBottom: '1px solid #E5DFD3',
                      paddingBottom: '14px',
                      marginBottom: '20px',
                      flexWrap: 'wrap',
                      gap: '8px',
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 600 }}>
                      verdant
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.85rem' }}>
                      <span className="mock-hide-on-mobile">Shop plants</span>
                      <button
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          border: '1px solid #D6CEBE',
                          background: '#FFFFFF',
                          borderRadius: '9999px',
                          padding: '5px 12px',
                          cursor: 'pointer',
                          fontSize: '0.82rem',
                        }}
                      >
                        <ShoppingBag size={13} />
                        <span>Bag ({cartCount})</span>
                      </button>
                    </div>
                  </div>

                  <div
                    className="modal-verdant-grid"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                      gap: '24px',
                      alignItems: 'center',
                    }}
                  >
                    <div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#7E776F', letterSpacing: '0.1em' }}>
                        A LITTLE CLOSER TO NATURE
                      </span>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', lineHeight: 1.15, margin: '8px 0 12px 0' }}>
                        Bring the outside in.
                      </h3>
                      <p style={{ fontSize: '0.9rem', color: '#68615A', marginBottom: '18px' }}>
                        Thoughtfully grown greenery for the spaces you call home.
                      </p>
                      <button
                        onClick={() => setCartCount(c => c + 1)}
                        className="btn-primary"
                        style={{ padding: '9px 18px', fontSize: '0.84rem' }}
                      >
                        <span>Add Fiddle Leaf Fig ($84)</span>
                        <ShoppingBag size={14} />
                      </button>
                    </div>

                    <div style={{ borderRadius: '12px', overflow: 'hidden', height: '220px' }}>
                      <img
                        src="/verdant-plant.jpg"
                        alt="Verdant plant"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    border: '1px solid #2A3644',
                    borderRadius: '16px',
                    padding: 'clamp(16px, 3vw, 24px)',
                    background: '#151A22',
                    color: '#E6EDF3',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderBottom: '1px solid #232C37',
                      paddingBottom: '14px',
                      marginBottom: '18px',
                      flexWrap: 'wrap',
                      gap: '10px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', border: '2px solid #58A6FF' }} />
                      <span style={{ fontWeight: 600, letterSpacing: '0.04em' }}>orbit</span>
                    </div>

                    <div style={{ display: 'flex', gap: '6px' }}>
                      {['7d', '30d', '90d'].map(r => (
                        <button
                          key={r}
                          onClick={() => setSelectedRange(r)}
                          style={{
                            background: selectedRange === r ? '#238636' : '#21262D',
                            color: '#FFFFFF',
                            border: 'none',
                            padding: '4px 8px',
                            borderRadius: '6px',
                            fontSize: '0.72rem',
                            cursor: 'pointer',
                          }}
                        >
                          {r.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div
                    className="modal-orbit-metrics-grid"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
                      gap: '12px',
                      marginBottom: '20px',
                    }}
                  >
                    <div style={{ background: '#1C232E', padding: '12px', borderRadius: '10px' }}>
                      <div style={{ fontSize: '0.72rem', color: '#8B949E' }}>Total Revenue</div>
                      <div style={{ fontSize: '1.35rem', fontWeight: 700, margin: '4px 0' }}>$48,240</div>
                      <div style={{ fontSize: '0.72rem', color: '#3FB950' }}>↗ +18.4%</div>
                    </div>

                    <div style={{ background: '#1C232E', padding: '12px', borderRadius: '10px' }}>
                      <div style={{ fontSize: '0.72rem', color: '#8B949E' }}>Active Users</div>
                      <div style={{ fontSize: '1.35rem', fontWeight: 700, margin: '4px 0' }}>2,460</div>
                      <div style={{ fontSize: '0.72rem', color: '#3FB950' }}>↗ +12.1%</div>
                    </div>

                    <div style={{ background: '#1C232E', padding: '12px', borderRadius: '10px' }}>
                      <div style={{ fontSize: '0.72rem', color: '#8B949E' }}>Retention</div>
                      <div style={{ fontSize: '1.35rem', fontWeight: 700, margin: '4px 0' }}>92.4%</div>
                      <div style={{ fontSize: '0.72rem', color: '#3FB950' }}>↗ +3.2%</div>
                    </div>
                  </div>

                  {/* Revenue Curve Canvas */}
                  <div style={{ background: '#1C232E', padding: '14px', borderRadius: '10px' }}>
                    <div style={{ fontSize: '0.78rem', color: '#8B949E', marginBottom: '10px' }}>Revenue over time</div>
                    <svg viewBox="0 0 600 120" style={{ width: '100%', height: '90px' }}>
                      <defs>
                        <linearGradient id="orbitGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3FB950" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#3FB950" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0 100 Q 80 85, 150 90 T 300 40 T 450 60 T 600 20 L 600 120 L 0 120 Z"
                        fill="url(#orbitGrad)"
                      />
                      <path
                        d="M0 100 Q 80 85, 150 90 T 300 40 T 450 60 T 600 20"
                        fill="none"
                        stroke="#3FB950"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'architecture' && (
            <div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.2rem, 2.2vw, 1.4rem)', marginBottom: '16px' }}>
                Architecture & Implementation
              </h4>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                  gap: '16px',
                }}
              >
                <div style={{ border: '1px solid var(--border-light)', padding: '18px', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', color: 'var(--accent-crimson)' }}>
                    <Layers size={18} />
                    <strong>Front-end Engineering</strong>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Server components with streaming SSR, progressive hydration, and optimistic UI mutations for zero perceived latency.
                  </p>
                </div>

                <div style={{ border: '1px solid var(--border-light)', padding: '18px', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', color: 'var(--accent-crimson)' }}>
                    <ShieldCheck size={18} />
                    <strong>Data & Security</strong>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Strict TypeScript schemas, automated end-to-end type safety, fine-grained access policies, and sub-100ms API endpoints.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
