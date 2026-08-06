/** @jsx jsx */
import { Hono } from 'hono';
import { jsx } from 'hono/jsx';
import { html } from 'hono/html';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { TerminalDemo } from './components/TerminalDemo.jsx';
import { AgentGrid } from './components/AgentGrid.jsx';

const app = new Hono();

// Main App Route (Light Mode Theme)
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
              background-color: #f8fafc;
              color: #0f172a;
              min-height: 100vh;
              overflow-x: hidden;
              line-height: 1.5;
            }
            
            /* Light Cyber Background Grid */
            .cyber-light-bg {
              position: relative;
              background: radial-gradient(circle at 50% 0%, #e0f2fe 0%, #f8fafc 50%, #f1f5f9 100%);
            }
            .grid-overlay {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 100%;
              background-size: 40px 40px;
              background-image: 
                linear-gradient(to right, rgba(2, 132, 199, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(2, 132, 199, 0.05) 1px, transparent 1px);
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
              color: #0f172a;
            }
            .hero-gradient {
              background: linear-gradient(135deg, #0284c7 0%, #2563eb 50%, #7c3aed 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            /* Cards & Light Glassmorphism */
            .agent-card {
              background: #ffffff;
              border: 1px solid rgba(2, 132, 199, 0.15);
              border-radius: 16px;
              padding: 2rem;
              box-shadow: 0 10px 30px -10px rgba(2, 132, 199, 0.08);
              transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .agent-card:hover {
              transform: translateY(-4px);
              border-color: rgba(2, 132, 199, 0.4);
              box-shadow: 0 20px 40px -12px rgba(2, 132, 199, 0.18);
            }
            .agent-tag {
              display: inline-block;
              padding: 0.25rem 0.65rem;
              border-radius: 6px;
              backgroundColor: #f1f5f9;
              border: 1px solid #e2e8f0;
              color: #0369a1;
              font-size: 0.75rem;
              font-family: 'JetBrains Mono', monospace;
              font-weight: 600;
            }

            /* Terminal Buttons */
            .terminal-cmd-btn {
              background: #f1f5f9;
              border: 1px solid #cbd5e1;
              color: #0284c7;
              font-family: 'JetBrains Mono', monospace;
              font-size: 0.75rem;
              padding: 0.35rem 0.75rem;
              border-radius: 6px;
              cursor: pointer;
              font-weight: 600;
              transition: all 0.2s ease;
            }
            .terminal-cmd-btn:hover {
              background: #0284c7;
              border-color: #0284c7;
              color: #ffffff;
            }

            /* Metric Stat Cards */
            .stat-box {
              background: #ffffff;
              border: 1px solid rgba(2, 132, 199, 0.2);
              border-radius: 12px;
              padding: 1.25rem 1.5rem;
              text-align: center;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
            }
            .stat-num {
              font-family: 'Outfit', sans-serif;
              font-size: 2rem;
              font-weight: 800;
              color: #0284c7;
              line-height: 1.2;
            }
            .stat-label {
              font-size: 0.8rem;
              color: #64748b;
              font-family: 'JetBrains Mono', monospace;
              text-transform: uppercase;
              margin-top: 0.25rem;
              font-weight: 600;
            }
          </style>
        `}
      </head>
      <body>
        <div class="cyber-light-bg">
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
                backgroundColor: 'rgba(2, 132, 199, 0.1)',
                border: '1px solid rgba(2, 132, 199, 0.25)',
                color: '#0284c7',
                fontSize: '0.85rem',
                fontWeight: '600',
                marginBottom: '2rem'
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0284c7', boxShadow: '0 0 10px #0284c7' }}></span>
                Autonomous Agent Protocol • Version 4.2
              </div>

              <h1 class="hero-title">
                The Autonomous <br />
                <span class="hero-gradient">Intelligence Engine</span>
              </h1>

              <p style={{ color: '#475569', fontSize: '1.25rem', lineHeight: '1.6', marginBottom: '2.5rem', fontWeight: 400 }}>
                High-throughput cognitive agents, neural mesh routing, and isolated edge execution designed for sub-millisecond automated workloads.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
                <a href="#terminal" style={{
                  padding: '0.9rem 2rem',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontWeight: '700',
                  fontSize: '1rem',
                  boxShadow: '0 4px 20px rgba(2, 132, 199, 0.3)',
                  transition: 'all 0.2s ease'
                }}>
                  Launch Agent Console &rarr;
                </a>
                <a href="mailto:mailto@lee.bot" style={{
                  padding: '0.9rem 2rem',
                  borderRadius: '10px',
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1rem',
                  border: '1px solid #cbd5e1',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
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
                  <div class="stat-num">14,280+</div>
                  <div class="stat-label">Active Mesh Agents</div>
                </div>
                <div class="stat-box">
                  <div class="stat-num">3.8ms</div>
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
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2rem', fontWeight: '800', color: '#0f172a' }}>
                  Developer Integration & API
                </h2>
                <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '0.5rem' }}>
                  Interact directly with the lee.bot engine via REST or Cloudflare Workers SDK
                </p>
              </div>

              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                border: '1px solid rgba(2, 132, 199, 0.2)',
                padding: '1.75rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.875rem',
                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)',
                color: '#0f172a'
              }}>
                <div style={{ color: '#64748b', marginBottom: '1rem' }}>
                  // Initialize Lee-Bot Cloudflare Edge Client
                </div>
                <div>
                  <span style={{ color: '#7c3aed', fontWeight: 'bold' }}>import</span> <span style={{ color: '#0284c7' }}>{'{ AgentEngine }'}</span> <span style={{ color: '#7c3aed', fontWeight: 'bold' }}>from</span> <span style={{ color: '#16a34a' }}>'@lee.bot/core'</span>;
                </div>
                <br />
                <div>
                  <span style={{ color: '#7c3aed', fontWeight: 'bold' }}>const</span> bot = <span style={{ color: '#7c3aed', fontWeight: 'bold' }}>new</span> AgentEngine({'{'} domain: <span style={{ color: '#16a34a' }}>'lee.bot'</span> {'}'});
                </div>
                <div>
                  <span style={{ color: '#7c3aed', fontWeight: 'bold' }}>const</span> response = <span style={{ color: '#7c3aed', fontWeight: 'bold' }}>await</span> bot.execute({'{'}
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  model: <span style={{ color: '#16a34a' }}>'Lee-Core-v4'</span>,
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  prompt: <span style={{ color: '#16a34a' }}>'Analyze and synthesize multi-agent workflow'</span>
                </div>
                <div>{'}'});</div>
                <br />
                <div style={{ color: '#16a34a', fontWeight: '600' }}>
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
