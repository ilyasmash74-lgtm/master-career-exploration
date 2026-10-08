const careers = [
  {
    title: 'Product Designer',
    category: 'Creative Tech',
    match: '92%',
    salary: '$94k',
    trend: '+18% growth',
    summary: 'Design digital experiences that feel intuitive, useful, and human.'
  },
  {
    title: 'Data Analyst',
    category: 'Analytics',
    match: '88%',
    salary: '$82k',
    trend: '+14% growth',
    summary: 'Turn raw data into decisions, patterns, and measurable business impact.'
  },
  {
    title: 'Software Engineer',
    category: 'Technology',
    match: '95%',
    salary: '$108k',
    trend: '+22% growth',
    summary: 'Build products, systems, and tools that shape how people interact with technology.'
  },
  {
    title: 'UX Researcher',
    category: 'Research',
    match: '84%',
    salary: '$90k',
    trend: '+16% growth',
    summary: 'Understand people deeply and turn insights into better experiences.'
  }
];

const filters = ['Technology', 'Business', 'Design', 'Healthcare', 'Education', 'Creative'];

const pillars = [
  {
    title: 'Career Explore',
    text: 'Browse professions by skills, salary, interests, and growth potential.'
  },
  {
    title: 'Skill Blueprint',
    text: 'See the exact learning paths, certifications, and milestones to reach a role.'
  },
  {
    title: 'Decision Engine',
    text: 'Compare multiple paths side by side and discover the best-fit direction.'
  },
  {
    title: 'Portfolio Builder',
    text: 'Create evidence of capability with projects, reflections, and achievement tracking.'
  }
];

const roadmap = [
  'Discover your interests and strengths',
  'Explore job families and skill requirements',
  'Compare paths, salaries, and opportunities',
  'Build a personalized roadmap with milestones',
  'Track progress and refine your next move'
];

export default function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">MCW</div>
          <div>
            <span className="brand-name">Master Career Exploration</span>
            <small>Workspace</small>
          </div>
        </div>

        <nav className="nav">
          <a href="#explore">Explore</a>
          <a href="#paths">Paths</a>
          <a href="#insights">Insights</a>
          <a href="#about">About</a>
        </nav>

        <button className="primary-btn">Start planning</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Career clarity, built for the future</span>
            <h1>Find the career path that matches your strengths, interests, and ambition.</h1>
            <p>
              Master Career Exploration Workspace is a creative platform for discovering job
              opportunities, comparing career tracks, and mapping practical next steps.
            </p>

            <div className="search-box">
              <span>🔍</span>
              <input type="text" placeholder="Search careers, industries, skills..." />
              <button className="primary-btn compact">Explore</button>
            </div>

            <div className="stats-row">
              <div>
                <strong>120+</strong>
                <span>Career paths</span>
              </div>
              <div>
                <strong>42</strong>
                <span>Industries</span>
              </div>
              <div>
                <strong>86%</strong>
                <span>Career fit accuracy</span>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="mini-card glass">
              <span className="tiny-label">Best fit</span>
              <h3>AI & Product</h3>
              <p>High-growth, human-centered, and future-ready.</p>
            </div>

            <div className="mini-card accent">
              <div className="chip-row">
                {filters.slice(0, 4).map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
              <p>Build a path aligned with your values, skillset, and market demand.</p>
            </div>
          </div>
        </section>

        <section className="feature-strip" id="explore">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="feature-card">
              <div className="feature-icon">✦</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </section>

        <section className="career-section" id="paths">
          <div className="section-heading">
            <span className="eyebrow dark">Trending career tracks</span>
            <h2>Explore roles with real momentum.</h2>
          </div>

          <div className="career-grid">
            {careers.map((career) => (
              <article key={career.title} className="career-card">
                <div className="career-topline">
                  <span className="career-tag">{career.category}</span>
                  <span className="match-score">{career.match}</span>
                </div>
                <h3>{career.title}</h3>
                <p>{career.summary}</p>
                <div className="meta-row">
                  <strong>{career.salary}</strong>
                  <span>{career.trend}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="journey-section" id="insights">
          <div className="section-heading left">
            <span className="eyebrow dark">Your growth roadmap</span>
            <h2>Turn exploration into action.</h2>
          </div>

          <div className="journey-layout">
            <div className="roadmap-panel">
              {roadmap.map((step, idx) => (
                <div key={step} className="roadmap-item">
                  <span className="step-number">0{idx + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>

            <div className="insight-panel">
              <h3>Career signals to watch</h3>
              <ul>
                <li>Emerging sectors with strong skill demand</li>
                <li>Transferable skills across multiple industries</li>
                <li>Shorter learning paths for faster entry</li>
                <li>Portfolio evidence over degree-only credentials</li>
              </ul>
              <button className="secondary-btn">View insight board</button>
            </div>
          </div>
        </section>

        <section className="cta-band" id="about">
          <div>
            <span className="eyebrow">Build your future intentionally</span>
            <h2>Start with a clear direction, not a random guess.</h2>
          </div>
          <button className="primary-btn">Create my plan</button>
        </section>
      </main>
    </div>
  );
}
