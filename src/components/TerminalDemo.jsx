/** @jsx jsx */
import { jsx } from 'hono/jsx';

export const TerminalDemo = () => (
  <div id="terminal" style={{
    maxWidth: '960px',
    margin: '0 auto',
    backgroundColor: 'rgba(9, 13, 24, 0.95)',
    borderRadius: '16px',
    border: '1px solid rgba(6, 182, 212, 0.3)',
    boxShadow: '0 25px 60px -15px rgba(6, 182, 212, 0.25), 0 0 1px rgba(255, 255, 255, 0.1)',
    overflow: 'hidden'
  }}>
    {/* Terminal Header Bar */}
    <div style={{
      backgroundColor: '#0c101d',
      padding: '0.85rem 1.25rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444', display: 'inline-block' }}></span>
        <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f59e0b', display: 'inline-block' }}></span>
        <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }}></span>
        <span style={{ marginLeft: '0.75rem', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: '#94a3b8' }}>
          agent@lee.bot:~ (interactive v4.2)
        </span>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button id="cmd-btn-1" onclick="runPresetCommand('/run-agent-mesh')" class="terminal-cmd-btn">
          /run-agent-mesh
        </button>
        <button id="cmd-btn-2" onclick="runPresetCommand('/analyze-latency')" class="terminal-cmd-btn">
          /analyze-latency
        </button>
        <button id="cmd-btn-3" onclick="runPresetCommand('/query-memory')" class="terminal-cmd-btn">
          /query-memory
        </button>
      </div>
    </div>

    {/* Terminal Body */}
    <div id="terminal-body" style={{
      padding: '1.5rem',
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '0.9rem',
      color: '#e2e8f0',
      minHeight: '280px',
      maxHeight: '380px',
      overflowY: 'auto',
      lineHeight: '1.7',
      backgroundColor: '#070a12'
    }}>
      <div style={{ color: '#06b6d4' }}>[SYSTEM REASONING ENGINE ONLINE - READY]</div>
      <div style={{ color: '#64748b' }}>Type a command or click a preset button above to execute agent instructions.</div>
      <br />
      <div id="terminal-output">
        <span style={{ color: '#10b981' }}>agent@lee.bot:~$</span> <span id="typed-text">/run-agent-mesh</span>
        <div style={{ marginTop: '0.5rem', color: '#cbd5e1' }}>
          &gt; Initializing Lee-Core-v4 Neural Model... [OK]<br />
          &gt; Spawning 12 parallel execution workers across Cloudflare Edge nodes...<br />
          &gt; Task routed: Autonomous data synthesis & real-time optimization.<br />
          &gt; Execution speed: <span style={{ color: '#06b6d4', fontWeight: 'bold' }}>3.8ms</span> | Memory isolated: 100%<br />
          <span style={{ color: '#34d399' }}>✔ TASK COMPLETED WITH ZERO DEFECTS. RESULT BOUND TO MEMORY.</span>
        </div>
      </div>
    </div>
  </div>
);
