import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Headphones,
  Laptop,
  Lock,
  Moon,
  Package,
  Server,
  Shield,
  Smartphone,
  Sparkles,
  Target,
  Users,
  X,
} from 'lucide-react';
import './styles.css';

const capabilities = [
  ['Product Engineering', 'Web apps, portals, APIs, and internal tools.', Code2],
  ['AI & Automation', 'RAG, agents, copilots, and workflow automation.', BrainCircuit],
  ['Data & Integrations', 'Data modeling, pipelines, and system integrations.', Database],
  ['Cloud & DevOps', 'Infra, CI/CD, observability, and cost optimization.', Cloud],
  ['Quality & Security', 'Automated testing, SAST, and compliance.', Shield],
  ['Scale & Support', 'Launch support and continuous improvement.', Headphones],
];

const proof = [
  ['Collaborative by design', 'Transparent communication, shared docs, and weekly demos.', Users],
  ['Outcomes over output', 'We align on outcomes, not just features and tickets.', Target],
  ['Built for scale', 'Architecture that grows with your users and your data.', BarChart3],
  ['Long-term partner', 'We support, iterate, and ship the next version with you.', Sparkles],
];

const caseStudies = [
  {
    eyebrow: 'OPERATIONS PORTAL',
    title: 'Field Operations Platform',
    copy: 'Unified intake, work orders, AI document review, and CRM sync.',
    stats: ['6 weeks', '42%', '3 systems'],
  },
  {
    eyebrow: 'AI SUPPORT OPS',
    title: 'Knowledge Copilot',
    copy: 'Private RAG workspace for support teams with citations and audit trails.',
    stats: ['4 weeks', '31%', '8 sources'],
  },
  {
    eyebrow: 'DATA PLATFORM',
    title: 'Revenue Data Mesh',
    copy: 'Unified event tracking, warehouse models, and executive KPI scorecards.',
    stats: ['9 weeks', '99.9%', '14 feeds'],
  },
];

const pipeline = [
  ['Code Commit', 'main', GitBranch, 'done'],
  ['Build', 'Passing', Shield, 'done'],
  ['Tests', 'All good', AlertTriangle, 'done'],
  ['Deploy', 'Staging', CircleDot, 'active'],
];

function NavDropdown({ label, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-menu" onMouseLeave={() => setOpen(false)}>
      <button className="nav-link-button" onClick={() => setOpen((value) => !value)} type="button">
        {label}
        <ChevronDown size={14} strokeWidth={2.2} />
      </button>
      {open ? (
        <div className="dropdown-panel">
          {items.map((item) => (
            <a href={`#${item.toLowerCase().replaceAll(' ', '-')}`} key={item}>
              {item}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function SystemNode({ icon: Icon, title, sub, active }) {
  return (
    <div className={active ? 'system-node active' : 'system-node'}>
      <span className="node-icon">
        <Icon size={18} strokeWidth={1.9} />
      </span>
      <span>
        <strong>{title}</strong>
        <small>{sub}</small>
      </span>
    </div>
  );
}

function SystemBlueprint() {
  return (
    <div className="blueprint-wrap" aria-label="System blueprint preview">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="signal-dot" />
      <div className="blueprint-card">
        <div className="panel-title">
          <span>System Blueprint</span>
          <b />
          <em>Live</em>
        </div>
        <div className="blueprint-grid">
          <div className="node-stack">
            <SystemNode icon={Laptop} title="Web App" sub="Next.js" />
            <SystemNode icon={Smartphone} title="Mobile App" sub="React Native" />
            <SystemNode icon={Server} title="Admin Portal" sub="Next.js" />
            <SystemNode icon={Package} title="Third-party" sub="Integrations" />
          </div>
          <div className="connector-lines left-lines" />
          <div className="gateway">
            <span>API Gateway</span>
            <small>Kong</small>
            <div className="mini-bars" aria-hidden="true">
              {Array.from({ length: 9 }).map((_, index) => (
                <i key={index} style={{ height: `${22 + ((index * 17) % 42)}%` }} />
              ))}
            </div>
            <strong>
              1.2k <em>req/s</em>
            </strong>
          </div>
          <div className="connector-lines right-lines" />
          <div className="node-stack services">
            <SystemNode icon={Cpu} title="Auth Service" sub="Node.js" active />
            <SystemNode icon={Bot} title="User Service" sub="Node.js" active />
            <SystemNode icon={BrainCircuit} title="AI Service" sub="Python / FastAPI" active />
            <SystemNode icon={Cpu} title="Data Service" sub="Node.js" active />
          </div>
          <div className="connector-lines db-lines" />
          <div className="node-stack storage">
            <SystemNode icon={Database} title="PostgreSQL" sub="Primary DB" />
            <SystemNode icon={Database} title="Redis" sub="Cache" />
            <SystemNode icon={Cloud} title="S3" sub="File Storage" />
            <SystemNode icon={BrainCircuit} title="Vector DB" sub="Pinecone" />
          </div>
        </div>
      </div>

      <div className="deploy-card">
        <div className="panel-title small">Deploy Pipeline</div>
        <div className="pipeline-list">
          {pipeline.map(([label, sub, Icon, state]) => (
            <button className={`pipeline-step ${state}`} key={label} type="button">
              <Icon size={16} strokeWidth={2} />
              <span>
                <strong>{label}</strong>
                <small>{sub}</small>
              </span>
              {state === 'done' ? <CheckCircle2 size={17} /> : <ArrowRight size={16} />}
            </button>
          ))}
        </div>
        <div className="next-row">
          <span>Next: Production</span>
          <Lock size={14} />
        </div>
      </div>

      <div className="requests-card data-card">
        <div className="panel-title small">Pull Requests</div>
        {['feat: AI document parser', 'fix: billing edge case', 'chore: upgrade deps'].map((item, index) => (
          <div className="request-row" key={item}>
            <span className="avatar">{['A', 'B', 'C'][index]}</span>
            <strong>{item}</strong>
            <small>#{128 - index}</small>
            <em>{index === 2 ? 'develop' : 'main'}</em>
          </div>
        ))}
      </div>

      <div className="health-card data-card">
        <div className="panel-title small">System Health</div>
        {[
          ['Uptime', '99.98%', 'spark-one'],
          ['Latency (p95)', '135ms', 'spark-two'],
          ['Error Rate', '0.63%', 'spark-three'],
        ].map(([label, value, line]) => (
          <div className="health-row" key={label}>
            <strong>{label}</strong>
            <span>{value}</span>
            <i className={line} />
          </div>
        ))}
      </div>

      <div className="activity-card data-card">
        <div className="panel-title small">Activity Feed</div>
        {[
          ['Production deploy', '2m ago', 'v1.9.4'],
          ['AI Service scaled', '15m ago', 'Auto'],
          ['DB backup completed', '1h ago', 'OK'],
        ].map(([label, time, tag]) => (
          <div className="activity-row" key={label}>
            <Activity size={14} />
            <strong>{label}</strong>
            <span>{time}</span>
            <em>{tag}</em>
          </div>
        ))}
        <a href="#activity">
          View all activity <ArrowRight size={13} />
        </a>
      </div>
    </div>
  );
}

function CaseStudy() {
  const [active, setActive] = useState(0);
  const item = caseStudies[active];

  return (
    <section className="case-section" id="case-work">
      <div className="case-copy">
        <p className="section-kicker">Case Studies</p>
        <h2>Real systems. your project impact.</h2>
        <a href="#case-work" className="inline-link">
          View all case work <ArrowRight size={14} />
        </a>
      </div>
      <div className="case-controls">
        <button aria-label="Previous case study" onClick={() => setActive((value) => (value + 2) % 3)} type="button">
          <ChevronLeft size={20} />
        </button>
        <button aria-label="Next case study" onClick={() => setActive((value) => (value + 1) % 3)} type="button">
          <ChevronRight size={20} />
        </button>
      </div>
      <article className="case-card">
        <div className="case-visual">
          <span>{item.eyebrow}</span>
          <div className="dashboard-preview" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className="case-body">
          <h3>{item.title}</h3>
          <p>{item.copy}</p>
          <div className="case-stats">
            {item.stats.map((stat, index) => (
              <div key={stat}>
                <strong>{stat}</strong>
                <small>{['to MVP', 'less manual work', 'unified'][index]}</small>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}

function ContactPanel() {
  const [sent, setSent] = useState(false);
  const [closed, setClosed] = useState(false);

  if (closed) {
    return (
      <button className="contact-pill" onClick={() => setClosed(false)} type="button">
        Start a conversation <ArrowRight size={16} />
      </button>
    );
  }

  return (
    <aside className="contact-panel" id="contact">
      <button className="close-button" aria-label="Minimize contact form" onClick={() => setClosed(true)} type="button">
        <X size={18} />
      </button>
      <p className="section-kicker">Start a conversation</p>
      <h3>{sent ? 'We got your note.' : 'Tell us about your project'}</h3>
      {sent ? (
        <p className="sent-copy">Thanks. We will reply with next-step options and a few useful questions.</p>
      ) : (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          <label>
            Name
            <input name="name" placeholder="Your name" required />
          </label>
          <label>
            Work email
            <input name="email" placeholder="you@company.com" required type="email" />
          </label>
          <label>
            What are you building?
            <textarea name="brief" placeholder="A few details about your goals..." rows={4} required />
          </label>
          <button className="gradient-button full" type="submit">
            Book a Consultation <ArrowRight size={18} />
          </button>
        </form>
      )}
      <small>We typically respond within a few hours.</small>
    </aside>
  );
}

function Portal() {
  const [dark, setDark] = useState(true);
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className={dark ? 'app-shell' : 'app-shell light-mode'}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Co-bounce home">
          <img src="/logos/co-bounce-logo-dark-transparent.svg" alt="Co-bounce" />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <NavDropdown label="Services" items={['Product Engineering', 'AI Automation', 'Cloud DevOps']} />
          <NavDropdown label="Labs" items={['Systems Lab', 'AI Lab', 'Data Lab']} />
          <a href="#case-work">Case Work</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
          <NavDropdown label="Resources" items={['Playbooks', 'Benchmarks', 'Field Notes']} />
        </nav>
        <div className="header-actions">
          <a className="outline-button" href="#contact">
            Book a Consultation <ArrowRight size={18} />
          </a>
          <button className="theme-button" aria-label="Toggle theme" onClick={() => setDark((value) => !value)} type="button">
            {dark ? <Moon size={19} /> : <Sparkles size={19} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="lab-pill">
              <CircleDot size={11} /> Systems Lab
            </p>
            <h1>
              Engineering systems that <span className="blue">scale</span>, <span className="coral">adapt</span>, and
              compound.
            </h1>
            <p className="hero-subtitle">
              We design and build software, AI, and data systems that power real operations and shipping products.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="gradient-button">
                Start Your Project <ArrowRight size={18} />
              </a>
              <a href="#capabilities" className="ghost-button">
                Explore Our Labs
              </a>
            </div>
            <div className="trust-points">
              <span>
                <Users size={16} /> Senior Engineers
              </span>
              <span>
                <Activity size={16} /> Predictable Delivery
              </span>
              <span>
                <Database size={16} /> AI-Native Products
              </span>
              <span>
                <Shield size={16} /> Security by Design
              </span>
            </div>
          </div>
          <SystemBlueprint />
        </section>

        <section className="logo-band" aria-label="Trusted by innovative teams">
          <span>Trusted by innovative teams</span>
          {['veridian', 'NorthPoint', 'FieldTwin', 'payloom', 'ClearPath', 'momentum'].map((logo) => (
            <strong key={logo}>{logo}</strong>
          ))}
        </section>

        <section className="content-band">
          <div className="capability-section" id="capabilities">
            <div className="section-copy">
              <p className="section-kicker">Capabilities</p>
              <h2>End-to-end engineering for modern products</h2>
              <p>From strategy and architecture to AI, integrations, and operations, our pods own the outcome.</p>
              <a href="#services" className="inline-link">
                View all services <ArrowRight size={14} />
              </a>
            </div>
            <div className="capability-grid">
              {capabilities.map(([title, copy, Icon]) => (
                <article className="capability-card" key={title}>
                  <Icon size={34} strokeWidth={1.8} />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <button aria-label={`Open ${title}`} type="button">
                    <ArrowRight size={16} />
                  </button>
                </article>
              ))}
            </div>
          </div>

          <CaseStudy />
          <ContactPanel />

          <section className="proof-strip" id="process">
            {proof.map(([title, copy, Icon]) => (
              <article key={title}>
                <Icon size={34} />
                <span>
                  <strong>{title}</strong>
                  <small>{copy}</small>
                </span>
              </article>
            ))}
          </section>
        </section>
      </main>

      <footer className="footer" id="about">
        <span>© {year} Co-bounce</span>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<Portal />);
