/** @jsx jsx */
import { jsx } from 'hono/jsx';

export const Header = () => (
  <header style={{
    position: 'sticky',
    top: 0,
    zIndex: 50,
    backdropFilter: 'blur(16px)',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderBottom: '1px solid rgba(2, 132, 199, 0.15)',
    padding: '1.1rem 2rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
  }}>
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem'
    }}>
      {/* Brand Logo */}
      <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{
          width: '38px',
          height: '38px',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 50%, #7c3aed 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(2, 132, 199, 0.3)'
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
            <path d="M12 12 2.1 12a10 10 0 0 0 17.8 5.7" />
            <circle cx="12" cy="12" r="3" fill="#ffffff" />
          </svg>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '1.5rem',
            fontWeight: '800',
            letterSpacing: '-0.03em',
            color: '#0f172a',
            lineHeight: 1
          }}>
            LEE<span style={{ color: '#0284c7' }}>.BOT</span>
          </span>
          <span style={{
            fontSize: '0.65rem',
            color: '#64748b',
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: '0.1em',
            marginTop: '2px',
            fontWeight: '600'
          }}>
            AUTONOMOUS AGENT v4.2
          </span>
        </div>
      </a>

      {/* Nav Links */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} class="desktop-nav">
        <a href="#models" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>Agent Models</a>
        <a href="#terminal" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>Live Console</a>
        <a href="#benchmarks" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>Benchmarks</a>
        <a href="#api" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>API Docs</a>
      </nav>

      {/* Action CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.35rem 0.75rem',
          borderRadius: '9999px',
          backgroundColor: '#f0fdf4',
          border: '1px solid #bbf7d0',
          color: '#15803d',
          fontSize: '0.75rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: '600'
        }}>
          <span style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            backgroundColor: '#16a34a',
            boxShadow: '0 0 8px #16a34a'
          }}></span>
          SYSTEM ONLINE
        </div>

        <a href="mailto:mailto@lee.bot" style={{
          padding: '0.55rem 1.25rem',
          borderRadius: '8px',
          background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
          color: '#ffffff',
          textDecoration: 'none',
          fontSize: '0.85rem',
          fontWeight: '600',
          boxShadow: '0 4px 12px rgba(2, 132, 199, 0.25)',
          transition: 'all 0.2s ease'
        }}>
          Connect Bot
        </a>
      </div>
    </div>
  </header>
);
