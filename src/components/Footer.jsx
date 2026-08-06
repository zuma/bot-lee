/** @jsx jsx */
import { jsx } from 'hono/jsx';

export const Footer = () => (
  <footer style={{
    backgroundColor: '#04070d',
    borderTop: '1px solid rgba(6, 182, 212, 0.12)',
    padding: '3.5rem 2rem 2rem 2rem',
    color: '#64748b',
    fontSize: '0.85rem'
  }}>
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '2.5rem',
      marginBottom: '3rem'
    }}>
      {/* Col 1 */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <span style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '1.25rem',
            fontWeight: '800',
            color: '#f8fafc'
          }}>
            LEE<span style={{ color: '#06b6d4' }}>.BOT</span>
          </span>
        </div>
        <p style={{ color: '#94a3b8', lineHeight: '1.6', fontSize: '0.875rem' }}>
          Autonomous Intelligence Engine engineered for high-throughput edge agents, neural mesh routing, and real-time execution.
        </p>
      </div>

      {/* Col 2 */}
      <div>
        <h4 style={{ color: '#f8fafc', fontFamily: "'Outfit', sans-serif", marginBottom: '1rem', fontSize: '0.95rem' }}>Architecture</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li><a href="#models" style={{ color: '#94a3b8', textDecoration: 'none' }}>Lee-Core-v4 Neural Model</a></li>
          <li><a href="#models" style={{ color: '#94a3b8', textDecoration: 'none' }}>Multi-Agent Swarm Net</a></li>
          <li><a href="#terminal" style={{ color: '#94a3b8', textDecoration: 'none' }}>Interactive Agent Console</a></li>
          <li><a href="/api/status" style={{ color: '#94a3b8', textDecoration: 'none' }}>Worker Health Status</a></li>
        </ul>
      </div>

      {/* Col 3 */}
      <div>
        <h4 style={{ color: '#f8fafc', fontFamily: "'Outfit', sans-serif", marginBottom: '1rem', fontSize: '0.95rem' }}>Deployment & Edge</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li><span style={{ color: '#94a3b8' }}>Cloudflare Edge Runtime</span></li>
          <li><span style={{ color: '#94a3b8' }}>Sub-5ms Execution Latency</span></li>
          <li><span style={{ color: '#94a3b8' }}>Isolated Memory Containers</span></li>
        </ul>
      </div>

      {/* Col 4 */}
      <div>
        <h4 style={{ color: '#f8fafc', fontFamily: "'Outfit', sans-serif", marginBottom: '1rem', fontSize: '0.95rem' }}>Contact & Inquiry</h4>
        <p style={{ color: '#94a3b8', lineHeight: '1.6', fontSize: '0.875rem', marginBottom: '1rem' }}>
          Interested in acquiring or integrating with the <strong>lee.bot</strong> protocol?
        </p>
        <a href="mailto:mailto@lee.bot" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#06b6d4',
          textDecoration: 'none',
          fontWeight: '600',
          fontFamily: "'JetBrains Mono', monospace"
        }}>
          ✉ mailto@lee.bot &rarr;
        </a>
      </div>
    </div>

    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      paddingTop: '2rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '1rem'
    }}>
      <div>
        &copy; {new Date().getFullYear()} <strong>lee.bot</strong> • All rights reserved.
      </div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", color: '#475569', fontSize: '0.8rem' }}>
        DOMAIN: lee.bot | MANAGED: STANDALONE
      </div>
    </div>
  </footer>
);
