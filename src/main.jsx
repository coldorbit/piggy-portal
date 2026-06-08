import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  Database,
  GitBranch,
  Globe2,
  Layers3,
  Rocket,
  ServerCog,
  ShieldCheck,
  Terminal,
  Users,
} from 'lucide-react';
import './styles.css';

const proofMetrics = [
  { value: '6 weeks', label: 'from discovery to pilot' },
  { value: '42%', label: 'less manual ops work' },
  { value: '3 systems', label: 'unified into one portal' },
];

const services = [
  {
    icon: <Code2 />,
    title: 'Product engineering',
    text: 'Web apps, dashboards, APIs, portals, and internal systems designed around the workflows your team already runs.',
  },
  {
    icon: <Bot />,
    title: 'AI and automation',
    text: 'Document workflows, AI assistants, RAG systems, ops automation, and data tools that connect to real business systems.',
  },
  {
    icon: <Users />,
    title: 'Managed remote teams',
    text: 'Frontend, backend, AI, QA, DevOps, and product support organized through one accountable delivery process.',
  },
];

const process = [
  { title: 'Map', text: 'Define the product surface, users, systems, and delivery risks.' },
  { title: 'Plan', text: 'Turn scope into milestones, architecture, and a weekly shipping cadence.' },
  { title: 'Build', text: 'Design, engineer, test, and deploy in focused product sprints.' },
  { title: 'Operate', text: 'Measure usage, improve the product, and support the next release.' },
];

const features = [
  {
    icon: <Rocket />,
    title: 'Useful first release',
    text: 'Prioritize the smallest product your users can actually adopt, then iterate from evidence.',
  },
  {
    icon: <Layers3 />,
    title: 'One technical owner',
    text: 'Frontend, backend, cloud, data, AI, and integrations are planned as one system.',
  },
  {
    icon: <ShieldCheck />,
    title: 'Predictable cadence',
    text: 'Weekly demos, clear milestones, practical QA, and no mystery around what is shipping.',
  },
  {
    icon: <Database />,
    title: 'Data-ready foundations',
    text: 'Clean data models, analytics, admin views, and integrations are part of the build.',
  },
];

const stackItems = ['React', 'Node', 'Postgres', 'OpenAI', 'AWS', 'Stripe'];

function App() {
  return (
    <div className="site-shell">
      <header className="nav">
        <a className="brand" href="#top" aria-label="Co-bounce home">
          <span className="brand-mark">C</span>
          <span>Co-bounce</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-cta" href="#contact">
          Start
        </a>
      </header>

      <main id="top">
        <section className="hero section-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <Globe2 size={16} /> Remote product engineering
            </p>
            <h1>Premium software teams for products that need to ship.</h1>
            <p className="hero-subtitle">
              Co-bounce designs and builds polished web platforms, AI workflows, and internal
              systems with senior product judgment and a tight delivery cadence.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Talk to us <ArrowRight size={18} />
              </a>
              <a className="button secondary" href="#services">
                See capabilities
              </a>
            </div>
            <div className="trust-row" aria-label="Company strengths">
              <span><CheckCircle2 size={15} /> Product strategy</span>
              <span><CheckCircle2 size={15} /> Full-stack build</span>
              <span><CheckCircle2 size={15} /> Launch support</span>
            </div>
          </div>

          <div className="product-preview" aria-label="Delivery dashboard preview">
            <div className="preview-topbar">
              <span />
              <span />
              <span />
              <strong>Launch sprint</strong>
            </div>
            <div className="preview-grid">
              <div className="preview-panel main-panel">
                <div className="panel-label">
                  <ServerCog size={16} /> Build status
                </div>
                <strong>Customer portal API</strong>
                <div className="progress-track">
                  <span />
                </div>
                <div className="preview-meta">
                  <span>87% complete</span>
                  <span>Deploy Friday</span>
                </div>
              </div>
              <div className="preview-panel code-panel">
                <div className="panel-label">
                  <Terminal size={16} /> Workflow
                </div>
                <code>sync.customer()</code>
                <code>score.documents()</code>
                <code>notify.ops()</code>
              </div>
              <div className="preview-panel deploy-panel">
                <div className="panel-label">
                  <GitBranch size={16} /> Release
                </div>
                <strong>v0.9.4</strong>
                <span>QA passed</span>
              </div>
              <div className="preview-panel stack-panel">
                {stackItems.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-heading">
            <p className="eyebrow">Capabilities</p>
            <h2>Design the product, build the system, keep shipping.</h2>
            <p>
              We work like a compact product team: clear scope, strong engineering judgment, and
              weekly proof that the product is becoming real.
            </p>
          </div>

          <div className="cards three">
            {services.map((service) => (
              <article className="card" key={service.title}>
                <div className="icon-wrap">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section proof-section" aria-labelledby="proof-title">
          <div className="proof-copy">
            <p className="eyebrow">Case-study proof</p>
            <h2 id="proof-title">A field-services portal that replaced spreadsheet operations.</h2>
            <p>
              A growing operations team needed customer intake, work orders, status tracking, and
              document review in one place. We shipped a secure portal with role-based dashboards,
              AI-assisted document checks, and automated handoffs to the existing CRM.
            </p>
            <a className="text-link" href="#contact">
              Discuss a similar build <ArrowRight size={16} />
            </a>
          </div>

          <div className="proof-card">
            <div className="proof-card-header">
              <span>Client build</span>
              <strong>Operations platform</strong>
            </div>
            <div className="proof-metrics">
              {proofMetrics.map((metric) => (
                <div key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
            <div className="proof-stack">
              <span>React portal</span>
              <span>Node API</span>
              <span>AI review queue</span>
              <span>CRM integration</span>
            </div>
          </div>
        </section>

        <section className="section dark-panel">
          <div className="panel-copy">
            <p className="eyebrow">Best first engagement</p>
            <h2>MVP and AI product build sprint</h2>
            <p>
              Turn a product idea or operational bottleneck into a working release with the right
              mix of design, backend, AI, integrations, QA, and deployment.
            </p>
          </div>
          <div className="offer-list">
            <div>
              <strong>01</strong>
              <span>Product roadmap and technical architecture</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Clickable UI and full-stack development</span>
            </div>
            <div>
              <strong>03</strong>
              <span>AI, data, and automation features when needed</span>
            </div>
            <div>
              <strong>04</strong>
              <span>Deployment, QA, and post-launch support</span>
            </div>
          </div>
        </section>

        <section id="process" className="section">
          <div className="section-heading compact">
            <p className="eyebrow">Operating model</p>
            <h2>Built for teams that value momentum and clarity.</h2>
          </div>

          <div className="process-grid">
            {process.map((item, index) => (
              <div className="process-step" key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="team" className="section split-section">
          <div>
            <p className="eyebrow">Remote team model</p>
            <h2>Senior delivery without the overhead of building a whole team.</h2>
            <p>
              Co-bounce assembles the right pod for each project: frontend, backend, AI, data,
              cloud, DevOps, QA, and product support. You get one organized process instead of
              stitching together disconnected contractors.
            </p>
            <a className="text-link" href="#contact">
              Build your team <ArrowRight size={16} />
            </a>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="mini-card" key={feature.title}>
                <div className="icon-wrap small">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div>
            <p className="eyebrow">Start a project</p>
            <h2>Bring the product, workflow, or integration that needs to exist.</h2>
            <p>
              Tell us what you want to build. We'll help you shape the scope, choose the right team,
              and move toward a working product.
            </p>
          </div>

          <form className="contact-card">
            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="you@example.com" />
            </label>
            <label>
              What do you want to build?
              <textarea placeholder="Tell us about your project..." rows="4" />
            </label>
            <button className="button primary full" type="button">
              Request a consultation <ArrowRight size={18} />
            </button>
            <p className="form-note">
              Replace this form later with Calendly, HubSpot, Typeform, or your backend API.
            </p>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Co-bounce. Remote software engineering and AI automation.</p>
        <div>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default App;

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
