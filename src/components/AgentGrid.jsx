/** @jsx jsx */
import { jsx } from 'hono/jsx';

export const AgentGrid = () => (
  <section id="models" style={{ padding: '5rem 2rem 2rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
      <div style={{
        display: 'inline-block',
        padding: '0.35rem 0.85rem',
        borderRadius: '9999px',
        backgroundColor: 'rgba(6, 182, 212, 0.12)',
        color: '#06b6d4',
        fontSize: '0.8rem',
        fontWeight: '600',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        marginBottom: '1rem',
        border: '1px solid rgba(6, 182, 212, 0.25)'
      }}>
        Neural Matrix Architecture
      </div>
      <h2 style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: '2.5rem',
        fontWeight: '800',
        color: '#f8fafc',
        letterSpacing: '-0.03em',
        marginBottom: '1rem'
      }}>
        Next-Gen Autonomous Agent Capabilities
      </h2>
      <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '640px', margin: '0 auto', lineHeight: '1.6' }}>
        Engineered for precision execution, sub-second inference, and seamless multi-agent orchestration.
      </p>
    </div>

    {/* Grid Cards */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
      gap: '1.75rem'
    }}>
      {/* Card 1 */}
      <div class="agent-card">
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          backgroundColor: 'rgba(6, 182, 212, 0.15)',
          border: '1px solid rgba(6, 182, 212, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.25rem',
          color: '#06b6d4'
        }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <rect x="9" y="9" width="6" height="6" />
            <line x1="9" y1="1" x2="9" y2="4" />
            <line x1="15" y1="1" x2="15" y2="4" />
            <line x1="9" y1="20" x2="9" y2="23" />
            <line x1="15" y1="20" x2="15" y2="23" />
            <line x1="20" y1="9" x2="23" y2="9" />
            <line x1="20" y1="15" x2="23" y2="15" />
            <line x1="1" y1="9" x2="4" y2="9" />
            <line x1="1" y1="15" x2="4" y2="15" />
          </svg>
        </div>
        <h3 style={{ color: '#f8fafc', fontFamily: "'Outfit', sans-serif", fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: '700' }}>
          Lee-Core-v4
        </h3>
        <p style={{ color: '#94a3b8', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
          Autonomous reasoning engine optimized for complex logic execution, step-by-step problem decomposition, and low-latency decision trees.
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span class="agent-tag">Low Latency</span>
          <span class="agent-tag">Reasoning Engine</span>
        </div>
      </div>

      {/* Card 2 */}
      <div class="agent-card">
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          backgroundColor: 'rgba(139, 92, 246, 0.15)',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.25rem',
          color: '#a78bfa'
        }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
        </div>
        <h3 style={{ color: '#f8fafc', fontFamily: "'Outfit', sans-serif", fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: '700' }}>
          Lee-Swarm-Net
        </h3>
        <p style={{ color: '#94a3b8', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
          Multi-agent mesh protocol that enables autonomous sub-agents to collaborate, delegate tasks, and synthesize answers in real-time.
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span class="agent-tag">Multi-Agent</span>
          <span class="agent-tag">Mesh Routing</span>
        </div>
      </div>

      {/* Card 3 */}
      <div class="agent-card">
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          backgroundColor: 'rgba(16, 185, 129, 0.15)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.25rem',
          color: '#34d399'
        }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </div>
        <h3 style={{ color: '#f8fafc', fontFamily: "'Outfit', sans-serif", fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: '700' }}>
          Lee-Code-Pro
        </h3>
        <p style={{ color: '#94a3b8', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
          Sub-second autonomous code generation, syntax validation, security auditing, and continuous refactoring pipeline.
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span class="agent-tag">Auto-Refactor</span>
          <span class="agent-tag">Zero Vulnerabilities</span>
        </div>
      </div>

      {/* Card 4 */}
      <div class="agent-card">
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          backgroundColor: 'rgba(236, 72, 153, 0.15)',
          border: '1px solid rgba(236, 72, 153, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.25rem',
          color: '#f472b6'
        }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>
        <h3 style={{ color: '#f8fafc', fontFamily: "'Outfit', sans-serif", fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: '700' }}>
          Lee-Vision-X
        </h3>
        <p style={{ color: '#94a3b8', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
          Multi-modal spatial vision and visual UI synthesis agent designed for high-resolution visual processing and design interpretation.
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span class="agent-tag">Multi-modal</span>
          <span class="agent-tag">Visual Processing</span>
        </div>
      </div>
    </div>
  </section>
);
