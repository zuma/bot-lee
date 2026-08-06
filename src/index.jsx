/** @jsx jsx */
import { Hono } from 'hono';
import { jsx } from 'hono/jsx';
import { html } from 'hono/html';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { TerminalDemo } from './components/TerminalDemo.jsx';
import { AgentGrid } from './components/AgentGrid.jsx';

const app = new Hono();

// Main App Route
app.get('/', (c) => {
  return c.html(
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>lee.bot — Autonomous Intelligence Engine</title>
        <meta name="description" content="Autonomous Agent Protocol & Intelligence Engine built for high-throughput edge execution, neural mesh routing, and low-latency agent tasks." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Outfit:wght@600;700;800;900&display=swap" rel="stylesheet" />
        {html`
          <style>
            * {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
            }
            body {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
              background-color: #070a12;
              color: #f8fafc;
              min-height: 100vh;
              overflow-x: hidden;
              line-height: 1.5;
            }
            
            /* Cyber Background Mesh */
            .cyber-bg {
              position: relative;
              background-image: 
                radial-gradient(circle at 50% 0%, rgba(6, 182, 212, 0.18) 0%, transparent 60%),
                radial-gradient(circle at 85% 30%, rgba(139, 92, 246, 0.12) 0%, transparent 50%),
                radial-gradient(circle at 15% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
            }
            .grid-overlay {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 100%;
              background-size: 40px 40px;
              background-image: 
                linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
              pointer-events: none;
            }

            /* Responsive Hero */
            .hero-title {
              font-family: 'Outfit', sans-serif;
              font-size: clamp(2.75rem, 6vw, 4.5rem);
              font-weight: 900;
              letter-spacing: -0.04em;
              line-height: 1.1;
              margin-bottom: 1.5rem;
            }
            .hero-gradient {
              background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 40%, #06b6d4 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            /* Cards & Glassmorphism */
            .agent-card {
              background: rgba(15, 23, 42, 0.65);
              backdrop-filter: blur(12px);
              border: 1px solid rgba(255, 255, 255, 0.08);
              border-radius: 16px;
              padding: 2rem;
              transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .agent-card:hover {
              transform: translateY(-4px);
              border-color: rgba(6, 182, 212, 0.35);
              box-shadow: 0 20px 40px -15px rgba(6, 182, 212, 0.2);
            }
            .agent-tag {
              display: inline-block;
              padding: 0.25rem 0.65rem;
              border-radius: 6px;
              backgroundColor: rgba(255, 255, 255, 0.05);
              border: 1px solid rgba(255, 255, 255, 0.1);
              color: #94a3b8;
              font-size: 0.75rem;
              font-family: 'JetBrains Mono', monospace;
            }

            /* Terminal Buttons */
            .terminal-cmd-btn {
              background: rgba(255, 255, 255, 0.06);
              border: 1px solid rgba(255, 255, 255, 0.12);
              color: #06b6d4;
              font-family: 'JetBrains Mono', monospace;
              font-size: 0.75rem;
              padding: 0.35rem 0.75rem;
              border-radius: 6px;
              cursor: pointer;
              transition: all 0.2s ease;
            }
            .terminal-cmd-btn:hover {
              background: rgba(6, 182, 212, 0.2);
              border-color: #06b6d4;
              color: #ffffff;
            }

            /* Metric Stat Cards */
            .stat-box {
              background: rgba(11, 16, 33, 0.8);
              border: 1px solid rgba(6, 182, 212, 0.15);
              border-radius: 12px;
              padding: 1.25rem 1.5rem;
              text-align: center;
            }
            .stat-num {
              font-family: 'Outfit', sans-serif;
              font-size: 2rem;
              font-weight: 800;
              color: #06b6d4;
              line-height: 1.2;
            }
            .stat-label {
              font-size: 0.8rem;
              color: #94a3b8;
              font-family: 'JetBrains Mono', monospace;
              text-transform: uppercase;
              margin-top: 0.25rem;
            }
          </style>
        `}
      </head>
      <body>
        <div class="cyber-bg">
          <div class="grid-overlay"></div>
          
          <Header />

          {/* Hero Section */}
          <main style={{ position: 'relative', zIndex: 10, padding: '4rem 1.5rem 3rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 4rem auto' }}>
              
              {/* Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(6, 182, 212, 0.12)',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                color: '#06b6d4',
                fontSize: '0.85rem',
                fontWeight: '600',
                marginBottom: '2rem',
                boxShadow: '0 0 20px rgba(6, 182, 212, 0.15)'
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#06b6d4', boxShadow: '0 0 10px #06b6d4' }}></span>
                Autonomous Agent Protocol • Version 4.2
              </div>

              <h1 class="hero-title">
                The Autonomous <br />
                <span class="hero-gradient">Intelligence Engine</span>
              </h1>

              <p style={{ color: '#94a3b8', fontSize: '1.25rem', lineHeight: '1.6', marginBottom: '2.5rem', fontWeight: 400 }}>
                High-throughput cognitive agents, neural mesh routing, and isolated edge execution designed for sub-millisecond automated workloads.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
                <a href="#terminal" style={{
                  padding: '0.9rem 2rem',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #06b6d4 0%, #2563eb 100%)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontWeight: '700',
                  fontSize: '1rem',
                  boxShadow: '0 0 24px rgba(6, 182, 212, 0.4)',
                  transition: 'all 0.2s ease'
                }}>
                  Launch Agent Console &rarr;
                </a>
                <a href="mailto:mailto@lee.bot" style={{
                  padding: '0.9rem 2rem',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: '#f8fafc',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1rem',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  transition: 'all 0.2s ease'
                }}>
                  Contact Owner
                </a>
              </div>

              {/* Stats Bar */}
              <div id="benchmarks" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1.25rem'
              }}>
                <div class="stat-box">
                  <div class="stat-num" id="stat-agents">14,280+</div>
                  <div class="stat-label">Active Mesh Agents</div>
                </div>
                <div class="stat-box">
                  <div class="stat-num" id="stat-latency">3.8ms</div>
                  <div class="stat-label">Avg Execution Latency</div>
                </div>
                <div class="stat-box">
                  <div class="stat-num">99.99%</div>
                  <div class="stat-label">Autonomous Reliability</div>
                </div>
                <div class="stat-box">
                  <div class="stat-num">1.4B+</div>
                  <div class="stat-label">Daily Inferences</div>
                </div>
              </div>
            </div>

            {/* Interactive Terminal Section */}
            <TerminalDemo />

            {/* Agent Capabilities Matrix */}
            <AgentGrid />

            {/* Code / API Playground Section */}
            <section id="api" style={{ padding: '5rem 0 3rem 0', maxWidth: '960px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2rem', fontWeight: '800', color: '#f8fafc' }}>
                  Developer Integration & API
                </h2>
                <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '0.5rem' }}>
                  Interact directly with the lee.bot engine via REST or Cloudflare Workers SDK
                </p>
              </div>

              <div style={{
                backgroundColor: '#090d18',
                borderRadius: '16px',
                border: '1px solid rgba(6, 182, 212, 0.2)',
                padding: '1.75rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.875rem'
              }}>
                <div style={{ color: '#64748b', marginBottom: '1rem' }}>
                  // Initialize Lee-Bot Cloudflare Edge Client
                </div>
                <div style={{ color: '#a78bfa' }}>
                  import <span style={{ color: '#06b6d4' }}>{'{ AgentEngine }'}</span> from <span style={{ color: '#34d399' }}>'@lee.bot/core'</span>;
                </div>
                <br />
                <div>
                  <span style={{ color: '#f472b6' }}>const</span> bot = <span style={{ color: '#f472b6' }}>new</span> AgentEngine({'{'} domain: <span style={{ color: '#34d399' }}>'lee.bot'</span> {'}'});
                </div>
                <div>
                  <span style={{ color: '#f472b6' }}>const</span> response = <span style={{ color: '#f472b6' }}>await</span> bot.execute({'{'}
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  model: <span style={{ color: '#34d399' }}>'Lee-Core-v4'</span>,
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  prompt: <span style={{ color: '#34d399' }}>'Analyze and synthesize multi-agent workflow'</span>
                </div>
                <div>{'}'});</div>
                <br />
                <div style={{ color: '#10b981' }}>
                  console.log(response.result); // Returns sub-5ms autonomous result
                </div>
              </div>
            </section>
          </main>

          <Footer />
        </div>

        {/* Client-side Script for Live Terminal Interactions */}
        {html`
          <script>
            const presets = {
              '/run-agent-mesh': [
                "> Initializing Lee-Core-v4 Neural Model... [OK]",
                "> Spawning 12 parallel execution workers across Cloudflare Edge nodes...",
                "> Task routed: Autonomous data synthesis & real-time optimization.",
                "> Execution speed: 3.8ms | Memory isolated: 100%",
                "✔ TASK COMPLETED WITH ZERO DEFECTS. RESULT BOUND TO MEMORY."
              ],
              '/analyze-latency': [
                "> Probing global Cloudflare PoP network latency...",
                "> US-East: 2.1ms | EU-Central: 3.4ms | AP-East: 4.8ms",
                "> Sub-millisecond route optimization active.",
                "✔ GLOBAL AGENT RESPONSE LATENCY OPTIMIZED."
              ],
              '/query-memory': [
                "> Querying distributed Vector KV Store for lee.bot...",
                "> 1,420,890 persistent embeddings retrieved in 1.2ms.",
                "> Context length: 128k tokens | Zero loss.",
                "✔ MEMORY STATE VERIFIED AND SYNCHRONIZED."
              ]
            };

            function runPresetCommand(cmd) {
              const output = document.getElementById('terminal-output');
              const typedText = document.getElementById('typed-text');
              if (!output || !typedText) return;
              
              typedText.innerText = cmd;
              const lines = presets[cmd] || ["Executing " + cmd + "..."];
              
              let html = '<span style="color: #10b981;">agent@lee.bot:~$</span> <span style="color: #ffffff;">' + cmd + '</span><div style="margin-top: 0.5rem; color: #cbd5e1;">';
              lines.forEach(line => {
                html += line + '<br />';
              });
              html += '</div>';
              output.innerHTML = html;
            }
          </script>
        `}
      </body>
    </html>
  );
});

// System Status API Endpoint
app.get('/api/status', (c) => {
  return c.json({
    status: 'online',
    domain: 'lee.bot',
    managedBy: 'standalone',
    version: '4.2.0',
    edgeNodes: 310,
    latencyMs: 3.8,
    timestamp: new Date().toISOString()
  });
});

export default app;
