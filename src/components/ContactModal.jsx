import React, { useState } from 'react';
import { X, Send, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Websites with character',
    budget: '$5k – $15k',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#9B3230', '#BA3431', '#FAF7F2', '#4B6B58'],
    });
  };

  return (
    <div
      className="contact-modal-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(10px, 3vw, 24px)',
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
        className="contact-modal-box"
        style={{
          width: '100%',
          maxWidth: '640px',
          maxHeight: '92dvh',
          overflowY: 'auto',
          backgroundColor: '#FFFFFF',
          borderRadius: 'clamp(18px, 3vw, 24px)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.25)',
          border: '1px solid var(--border-light)',
          padding: 'clamp(24px, 5vw, 40px)',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 'clamp(16px, 3vw, 24px)',
            right: 'clamp(16px, 3vw, 24px)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: '1px solid var(--border-light)',
            background: 'var(--bg-primary)',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
          }}
          aria-label="Close form"
        >
          <X size={16} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: 'clamp(20px, 4vw, 40px) 0' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--accent-crimson-subtle)',
                color: 'var(--accent-crimson)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto',
              }}
            >
              <Check size={32} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 3.5vw, 2.2rem)', marginBottom: '12px' }}>
              The seed has been planted.
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '420px', margin: '0 auto 28px auto', fontSize: '0.96rem' }}>
              Thank you for reaching out. I’ll review your note and get back to you within 24–48 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="btn-primary"
            >
              Back to portfolio
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="section-label" style={{ marginBottom: '8px' }}>
              <span>Start a conversation</span>
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)',
                fontWeight: 400,
                color: 'var(--text-primary)',
                marginBottom: '8px',
                paddingRight: '36px',
              }}
            >
              Tell me about your idea.
            </h3>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', marginBottom: 'clamp(18px, 3vw, 28px)' }}>
              Whether you need a bespoke brand website or an immersive 3D experience, let’s find the right approach.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
                  gap: '14px',
                }}
              >
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Lin"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      border: '1px solid var(--border-light)',
                      background: 'var(--bg-primary)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.92rem',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="maya@example.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      border: '1px solid var(--border-light)',
                      background: 'var(--bg-primary)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.92rem',
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  What are we growing?
                </label>
                <select
                  value={formData.service}
                  onChange={e => setFormData({ ...formData, service: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '10px',
                    border: '1px solid var(--border-light)',
                    background: 'var(--bg-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.92rem',
                  }}
                >
                  <option>Websites with character</option>
                  <option>Products with purpose</option>
                  <option>A little extra dimension (3D / WebGL)</option>
                  <option>Consultation & Architecture</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  Project Scope / Thoughts
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Share a few words on what you’re imagining, timing, or references..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '10px',
                    border: '1px solid var(--border-light)',
                    background: 'var(--bg-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.92rem',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', padding: '13px', marginTop: '6px' }}
              >
                <span>Send message</span>
                <Send size={15} />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
