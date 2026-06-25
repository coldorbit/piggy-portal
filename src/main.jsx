import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Bot,
  CheckCircle2,
  ChevronDown,
  CloudCog,
  Code2,
  DatabaseZap,
  FileCheck2,
  GitBranch,
  Gauge,
  Headphones,
  Layers3,
  ListChecks,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  MousePointer2,
  Play,
  ShieldCheck,
  Sparkles,
  Workflow,
  UsersRound,
  WandSparkles,
  X,
} from 'lucide-react';
import './styles.css';

const markSrc = '/assets/logo_without_bg.png';

const services = [
  {
    id: 'agent-networks',
    label: 'Agent networks',
    title: 'Private AI agent networks for engineering teams.',
    copy: 'We design code review, test generation, bug triage, documentation, and release agents that work inside your tools with permissions, logs, and human approval.',
    icon: Bot,
    bullets: ['Codebase-aware agents', 'Human approval gates', 'Audit-ready activity logs'],
    accent: '#0ebbb7',
  },
  {
    id: 'software-factory',
    label: 'Software factory',
    title: 'Human-led AI delivery for real software releases.',
    copy: 'Our engineers use agentic workflows to ship portals, internal tools, migrations, integrations, and automations faster while keeping architecture and product judgment human-owned.',
    icon: Layers3,
    bullets: ['Full-stack product builds', 'Legacy modernization', 'Client-ready delivery rituals'],
    accent: '#1085f7',
  },
  {
    id: 'private-ai',
    label: 'Private AI ops',
    title: 'Distributed AI systems that stay close to your data.',
    copy: 'We deploy model routing, retrieval, sandboxes, evals, and observability across cloud, VPC, and edge environments so sensitive workflows can use AI without losing control.',
    icon: CloudCog,
    bullets: ['VPC and edge deployment', 'Secure model routing', 'Evals and reliability dashboards'],
    accent: '#63d900',
  },
];

const outcomes = [
  ['30 days', 'to install the first AI engineering system', MousePointer2],
  ['24/7', 'agents watching tests, docs, bugs, and releases', Gauge],
  ['Private', 'by design across data, tools, and execution', ShieldCheck],
];

const process = [
  ['Map', 'Audit the codebase, team workflow, data boundaries, risks, and the tasks agents should handle first.', FileCheck2],
  ['Install', 'Deploy the first agents, approval gates, sandbox rules, integrations, and reporting inside your stack.', Code2],
  ['Operate', 'Tune prompts, evals, logs, permissions, and releases as the agent network becomes part of daily engineering.', Headphones],
];

const integrations = [
  ['GitHub', GitBranch],
  ['OpenAI', BrainCircuit],
  ['Claude', Sparkles],
  ['Linear', Workflow],
  ['Jira', ListChecks],
  ['Postgres', DatabaseZap],
  ['AWS', CloudCog],
  ['Slack', MessageSquare],
];

const careerRoles = [
  {
    title: 'AI Agent Engineer, Engineering Systems',
    team: 'Software Engineering',
    summary:
      'Build private coding, review, testing, documentation, and release agents that client engineering teams can trust in production.',
    impact:
      'You will turn messy engineering workflows into reliable AI-assisted systems: agents that open useful pull requests, explain risk, generate tests, summarize releases, and ask for approval before touching sensitive paths.',
    responsibilities: [
      'Design and implement agent workflows across GitHub, ticketing systems, CI, documentation, and deployment tools.',
      'Build codebase-aware retrieval, task planning, prompt orchestration, tool calling, and review flows.',
      'Implement permission models, human approval states, audit logs, evals, rollback paths, and failure handling.',
      'Create tests and benchmark suites that measure agent quality before clients rely on the system.',
      'Partner directly with client engineers to move prototypes into production and improve them after launch.',
    ],
    qualifications: [
      '3+ years building production software across backend, developer tooling, infrastructure, or full-stack systems.',
      'Hands-on experience with LLM APIs, coding agents, RAG, evals, automation workflows, or AI-assisted engineering tools.',
      'Strong JavaScript, TypeScript, Python, or Go skills and comfort reading unfamiliar codebases.',
      'Practical judgment around reliability, security, and when humans should stay in the loop.',
      'Clear written communication, especially when explaining tradeoffs and implementation choices.',
    ],
    niceToHave: [
      'Experience building internal developer platforms, CI/CD tools, static analysis, or code review automation.',
      'Familiarity with vector databases, embeddings, structured outputs, and model evaluation frameworks.',
      'Open-source work, technical writing, or examples of AI-assisted engineering workflows you have shipped.',
    ],
    location: 'Remote-friendly, US time zones',
    type: 'Full-time',
  },
  {
    title: 'Distributed AI Infrastructure Engineer',
    team: 'Software Engineering',
    summary:
      'Build the private runtime layer for AI agents across cloud, VPC, sandbox, and edge environments.',
    impact:
      'You will make sure agents can safely run code, call tools, access private context, and produce observable work without putting client systems or data at risk.',
    responsibilities: [
      'Develop secure execution environments for agents that touch code, data, APIs, CI/CD, and internal systems.',
      'Build model routing, retrieval services, queues, worker pools, policy controls, and observability dashboards.',
      'Design deployment patterns for customer VPCs, private cloud, on-prem, and edge-adjacent environments.',
      'Own secrets handling, network boundaries, rate limits, sandbox isolation, logging, and incident response paths.',
      'Partner with application engineers to make infrastructure understandable, reusable, and supportable.',
    ],
    qualifications: [
      '4+ years building backend, infrastructure, platform, security, DevOps, or distributed systems.',
      'Experience with cloud infrastructure, containers, queues, databases, observability, and production operations.',
      'Comfort with secure software design, secrets handling, identity, network boundaries, and incident response.',
      'Ability to reason clearly about latency, cost, privacy, reliability, and deployment tradeoffs.',
      'Interest in distributed AI, local or private model deployment, and agent sandboxes.',
    ],
    niceToHave: [
      'Experience with Kubernetes, Terraform, AWS/GCP/Azure, serverless workers, or service meshes.',
      'Prior work in regulated environments such as healthcare, finance, government, or enterprise SaaS.',
      'Familiarity with model gateways, inference providers, GPU scheduling, or private LLM deployment.',
    ],
    location: 'Remote-friendly, US time zones',
    type: 'Full-time',
  },
  {
    title: 'Software Engineer, Agentic Delivery',
    team: 'Software Engineering',
    summary:
      'Ship client portals, internal tools, integrations, and modernization projects with human-led AI workflows.',
    impact:
      'You will be part product engineer, part builder, part technical partner: turning client needs into production software while using agents to accelerate implementation, QA, documentation, and migration work.',
    responsibilities: [
      'Build full-stack releases across React, APIs, databases, admin workflows, third-party systems, and client portals.',
      'Translate ambiguous client workflows into clear product surfaces, data models, and implementation plans.',
      'Use AI agents to accelerate implementation, testing, documentation, migration, and refactoring work.',
      'Review AI-generated code carefully and improve the underlying workflow when the output is weak.',
      'Own quality from architecture through client demo, launch, production support, and follow-up iteration.',
    ],
    qualifications: [
      '3+ years building production web applications with modern frontend and backend frameworks.',
      'Strong JavaScript or TypeScript skills and comfort with API design, databases, auth, and integrations.',
      'Good product judgment and the ability to simplify complex operational workflows.',
      'Comfort reviewing AI-generated work with discipline and improving the process behind it.',
      'Clear communication, pragmatic debugging, and steady delivery habits.',
    ],
    niceToHave: [
      'Experience with React, Node, Python, Postgres, Stripe, HubSpot, Salesforce, Slack, or workflow tools.',
      'Experience modernizing legacy codebases or migrating systems with active users.',
      'Comfort presenting demos and technical tradeoffs directly to client stakeholders.',
    ],
    location: 'Remote-friendly, US time zones',
    type: 'Full-time',
  },
  {
    title: 'AI Operations Support Specialist, United States',
    team: 'AI Operations',
    summary:
      'Monitor client agent networks, coordinate triage, and keep distributed delivery moving across US time zones.',
    impact:
      'You will be the operational heartbeat for client work: watching agent activity, catching issues early, keeping notes clean, and making sure the right engineer sees the right problem at the right time.',
    responsibilities: [
      'Watch agent runs, client requests, support queues, release notes, and dashboards for issues that need attention.',
      'Document workflows, recurring failure patterns, customer context, and escalation paths.',
      'Coordinate across engineering, recruiting, and delivery teams so client work keeps moving.',
      'Prepare daily handoff notes, status summaries, incident timelines, and client-ready updates.',
      'Help maintain knowledge bases, runbooks, support macros, and internal operating checklists.',
    ],
    qualifications: [
      '2+ years in technical support, customer operations, QA, delivery coordination, or software-adjacent support.',
      'Excellent written communication and careful attention to operational detail.',
      'Comfort learning AI tools, issue trackers, dashboards, and engineering terminology.',
      'Ability to stay calm, organized, and specific when several requests are moving at once.',
      'Availability for consistent overlap with US business hours.',
    ],
    niceToHave: [
      'Experience with GitHub, Linear, Jira, Slack, Notion, support desks, QA tools, or incident workflows.',
      'Prior startup, agency, technical account management, or customer success experience.',
      'Interest in AI systems, developer tools, and the way software teams operate.',
    ],
    location: 'Distributed across the US',
    type: 'Full-time or contract',
  },
  {
    title: 'Technical Recruiter, AI Engineering',
    team: 'Recruiting',
    summary:
      'Help us find engineers and operators who can build serious AI systems without losing software discipline.',
    impact:
      'You will build the top of our talent engine: finding practical AI builders, evaluating signal with hiring managers, and giving candidates a respectful, fast, high-context process.',
    responsibilities: [
      'Source and screen candidates for agent engineering, distributed infrastructure, delivery, and AI operations roles.',
      'Build thoughtful candidate pipelines with clear notes and timely follow-up.',
      'Partner with hiring managers to calibrate technical depth, AI judgment, and ownership signals.',
      'Write and maintain role briefs, outreach sequences, interview rubrics, and candidate summaries.',
      'Track recruiting metrics and help improve sourcing channels, close rates, and candidate experience.',
    ],
    qualifications: [
      '3+ years recruiting for software engineering, infrastructure, AI, data, or technical product roles.',
      'Strong sourcing instincts and candidate communication skills.',
      'Comfort working with a small team where process is clear but lightweight.',
      'Ability to evaluate technical signal in partnership with engineers without over-indexing on keywords.',
      'Organized pipeline hygiene and strong follow-through across many moving conversations.',
    ],
    niceToHave: [
      'Experience recruiting for startups, consultancies, developer tools, infrastructure, or AI-native companies.',
      'Familiarity with GitHub sourcing, technical communities, founder-led hiring, or contract-to-hire roles.',
      'Interest in building recruiting operations from an early stage.',
    ],
    location: 'Remote-friendly, US time zones',
    type: 'Full-time or contract',
  },
  {
    title: 'Recruiting Coordinator, Distributed Team',
    team: 'Recruiting',
    summary:
      'Keep candidate communication, scheduling, postings, and recruiting operations organized as hiring grows.',
    impact:
      'You will make the hiring process feel calm and professional for candidates and internal teams: clean schedules, clear follow-ups, accurate postings, and no dropped details.',
    responsibilities: [
      'Coordinate interview schedules, candidate updates, and internal recruiting notes.',
      'Maintain job postings, pipeline status, role briefs, and follow-up reminders.',
      'Help create a responsive, respectful candidate experience.',
      'Prepare interview packets, scorecard reminders, debrief notes, and candidate handoff summaries.',
      'Keep recruiting docs, templates, trackers, and reporting tidy as the team scales.',
    ],
    qualifications: [
      '1+ year in recruiting coordination, people operations, executive assistance, administrative support, or operations.',
      'Very strong organization, follow-through, and written communication.',
      'Comfort managing multiple details across distributed teams.',
      'Careful calendar management and the ability to spot conflicts before they become problems.',
      'A candidate-first mindset and respect for timely communication.',
    ],
    niceToHave: [
      'Experience with applicant tracking systems, scheduling tools, sourcing tools, or structured interview loops.',
      'Prior work with remote teams, technical hiring, contractors, or early-stage companies.',
      'Interest in growing into recruiting operations, technical recruiting, or people operations.',
    ],
    location: 'Remote-friendly, US time zones',
    type: 'Full-time or contract',
  },
];

const hiringBenefits = [
  'Remote-first team with strong US time-zone overlap',
  'Health, dental, and vision coverage for full-time employees',
  'Flexible PTO, paid holidays, and practical sick time',
  'Home office and AI tooling budget',
  'Direct client exposure and high ownership from day one',
];

const hiringProcess = [
  'Intro call with recruiting',
  'Role-specific work review or practical exercise',
  'Team interview focused on collaboration and judgment',
  'Final conversation about fit, scope, and start date',
];

function BrandLockup({ className = '' }) {
  return (
    <span className={`brand-lockup ${className}`}>
      <img className="brand-mark" src={markSrc} alt="" />
      <span className="brand-title">
        <span>Co</span> Bounce
      </span>
      <span className="brand-slogan">
        <i /> <b>AI</b> engineering agents <i />
      </span>
    </span>
  );
}

function Header({ page = 'home' }) {
  const [open, setOpen] = useState(false);
  const homeHref = page === 'careers' ? '/' : '';
  const ctaHref = page === 'careers' ? '#open-roles' : '#contact';
  const ctaLabel = page === 'careers' ? 'View roles' : 'Book a call';

  const nav = (
    <>
      <a href={`${homeHref}#services`}>Services</a>
      <a href={`${homeHref}#process`}>Process</a>
      <a href={`${homeHref}#proof`}>Principles</a>
      <Link to="/careers">Careers</Link>
      <a href={`${homeHref}#contact`}>Contact</a>
    </>
  );

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Co Bounce home">
        <BrandLockup />
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {nav}
      </nav>

      <div className="header-actions">
        <a className="header-cta" href={ctaHref}>
          {ctaLabel} <ArrowRight size={17} />
        </a>
        <button className="menu-button" type="button" aria-label="Open menu" onClick={() => setOpen(true)}>
          <Menu size={22} />
        </button>
      </div>

      {open ? (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <button type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
          <nav onClick={() => setOpen(false)}>{nav}</nav>
          <a className="mobile-cta" href={ctaHref} onClick={() => setOpen(false)}>
            {ctaLabel} <ArrowRight size={17} />
          </a>
        </div>
      ) : null}
    </header>
  );
}

function HeroSignal() {
  return (
    <div className="signal-panel" aria-label="Co Bounce AI engineering network preview">
      <div className="signal-topbar">
        <span />
        <strong>Agent Network</strong>
        <em>Live</em>
      </div>
      <div className="signal-main">
        <div className="signal-score">
          <Sparkles size={22} />
          <strong>12</strong>
          <span>agents online</span>
        </div>
        <div className="signal-flow">
          {['Repo scan', 'Test agent', 'Review gate', 'Release note'].map((item, index) => (
            <div className="flow-step" key={item}>
              <span>{index + 1}</span>
              <strong>{item}</strong>
              <small>{index === 2 ? 'Needs approval' : 'Synced'}</small>
            </div>
          ))}
        </div>
      </div>
      <div className="signal-grid">
        <div>
          <DatabaseZap size={19} />
          <strong>9 systems</strong>
          <span>connected</span>
        </div>
        <div>
          <UsersRound size={19} />
          <strong>3 humans</strong>
          <span>approving</span>
        </div>
        <div>
          <CheckCircle2 size={19} />
          <strong>126 checks</strong>
          <span>cleared</span>
        </div>
      </div>
    </div>
  );
}

function Services() {
  const [activeId, setActiveId] = useState(services[0].id);
  const active = services.find((service) => service.id === activeId) ?? services[0];
  const Icon = active.icon;

  return (
    <section className="section services-section" id="services">
      <div className="section-heading">
        <span>What we build</span>
        <h2>Private AI engineering systems for teams that need faster, safer software delivery.</h2>
      </div>

      <div className="service-tabs" role="tablist" aria-label="Service options">
        {services.map((service) => {
          const TabIcon = service.icon;
          return (
            <button
              className={service.id === activeId ? 'active' : ''}
              key={service.id}
              type="button"
              role="tab"
              aria-selected={service.id === activeId}
              onClick={() => setActiveId(service.id)}
            >
              <TabIcon size={18} />
              {service.label}
            </button>
          );
        })}
      </div>

      <article className="service-detail" style={{ '--service-accent': active.accent }}>
        <div className="service-copy">
          <Icon size={38} />
          <h3>{active.title}</h3>
          <p>{active.copy}</p>
        </div>
        <div className="service-list">
          {active.bullets.map((bullet) => (
            <span key={bullet}>
              <CheckCircle2 size={18} />
              {bullet}
            </span>
          ))}
        </div>
      </article>
    </section>
  );
}

function ContactForm() {
  const [status, setStatus] = useState('idle');

  return (
    <form
      className="contact-form"
      onSubmit={(event) => {
        event.preventDefault();
        setStatus('sent');
      }}
    >
      <label>
        Name
        <input name="name" autoComplete="name" required placeholder="Your name" />
      </label>
      <label>
        Email
        <input name="email" autoComplete="email" required type="email" placeholder="you@company.com" />
      </label>
      <label className="wide">
        Project brief
        <textarea name="brief" rows="4" required placeholder="A codebase, engineering workflow, AI agent idea, migration, or operational bottleneck..." />
      </label>
      <button type="submit">
        {status === 'sent' ? 'Brief sent' : 'Send project brief'}
        {status === 'sent' ? <CheckCircle2 size={18} /> : <ArrowRight size={18} />}
      </button>
    </form>
  );
}

function Portal() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="app-shell">
      <Header />

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow">
              <WandSparkles size={15} />
              Distributed AI engineering firm
            </span>
            <h1>Private AI agent networks for software teams.</h1>
            <p>
              Co Bounce builds and operates human-controlled AI engineering systems that write, test, review, document,
              and maintain software inside your existing stack.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#contact">
                Book a consultation <ArrowRight size={18} />
              </a>
              <a className="secondary-button" href="#services">
                <Play size={17} />
                Explore services
              </a>
            </div>
          </div>
          <HeroSignal />
        </section>

        <section className="logo-ribbon" aria-label="Integration examples">
          <span>Built inside your engineering stack</span>
          <div>
            {integrations.map(([integration, Icon]) => (
              <strong key={integration}>
                <Icon size={16} />
                {integration}
              </strong>
            ))}
          </div>
        </section>

        <Services />

        <section className="section process-section" id="process">
          <div className="section-heading narrow">
            <span>How we move</span>
            <h2>A focused path from codebase audit to a working AI engineering system.</h2>
          </div>
          <div className="process-grid">
            {process.map(([title, copy, Icon]) => (
              <article key={title}>
                <Icon size={30} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="proof-section" id="proof">
          <div className="proof-copy">
            <span>Operating principles</span>
            <h2>Built so companies can own their intelligence layer instead of renting every workflow forever.</h2>
          </div>
          <div className="outcome-grid">
            {outcomes.map(([value, label, Icon]) => (
              <article key={label}>
                <Icon size={26} />
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <BrandLockup className="contact-brand" />
            <span>Project intake</span>
            <h2>Tell us where your engineering workflow is slow. We will map the first agent system.</h2>
            <p>
              Share the rough version of your codebase, release process, migration, support load, or automation idea.
              We will respond with practical next steps and the right questions to answer first.
            </p>
            <a href="mailto:hr@co-bounce.com">
              <Mail size={17} />
              hr@co-bounce.com
            </a>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer className="site-footer">
        <span>© {year} Co Bounce</span>
        <a href="#top">
          Back to top <ChevronDown size={16} />
        </a>
      </footer>
    </div>
  );
}

function CareersPage() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="app-shell">
      <Header page="careers" />

      <main id="top">
        <section className="careers-hero">
          <div className="careers-copy">
            <span className="eyebrow">
              <BriefcaseBusiness size={15} />
              Careers at co-bounce.com
            </span>
            <h1>Build the AI engineering firm we wanted to hire.</h1>
            <p>
              Co Bounce is hiring engineers, operators, and recruiters to build private agent networks, ship client
              software, and operate distributed AI systems under human control.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#open-roles">
                View open roles <ArrowRight size={18} />
              </a>
              <a className="secondary-button" href="mailto:careers@co-bounce.com">
                <Mail size={17} />
                careers@co-bounce.com
              </a>
            </div>
          </div>
        </section>

        <section className="section careers-section" id="open-roles">
          <div className="section-heading">
            <span>Open roles</span>
            <h2>We are looking for agent engineers, distributed infrastructure builders, AI operations teammates, and recruiters.</h2>
          </div>

          <div className="careers-overview">
            <article>
              <h3>Benefits and working style</h3>
              <ul>
                {hiringBenefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <h3>Hiring process</h3>
              <ul>
                {hiringProcess.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="role-grid">
            {careerRoles.map((role) => (
              <article className="role-card" key={role.title}>
                <div className="role-card-header">
                  <BriefcaseBusiness size={28} />
                  <span>{role.team}</span>
                  <h3>{role.title}</h3>
                </div>

                <div className="role-meta">
                  <span>
                    <MapPin size={15} />
                    {role.location}
                  </span>
                  <span>{role.type}</span>
                </div>

                <p className="role-summary">{role.summary}</p>

                <div className="role-overview">
                  <h4>About the role</h4>
                  <p>{role.impact}</p>
                </div>

                <div className="role-detail">
                  <h4>What you will do</h4>
                  <ul>
                    {role.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="role-detail">
                  <h4>What we are looking for</h4>
                  <ul>
                    {role.qualifications.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="role-detail">
                  <h4>Nice to have</h4>
                  <ul>
                    {role.niceToHave.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <a className="role-apply" href={`mailto:careers@co-bounce.com?subject=${encodeURIComponent(role.title)}`}>
                  Apply for this role <ArrowRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="careers-band">
          <div>
            <span>How to apply</span>
            <h2>Send a short note, your resume or profile, and one example of work that shows how you think.</h2>
          </div>
          <a className="primary-button" href="mailto:careers@co-bounce.com">
            Apply by email <ArrowRight size={18} />
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {year} Co Bounce</span>
        <Link to="/">
          Home <ArrowRight size={16} />
        </Link>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portal />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App />);
