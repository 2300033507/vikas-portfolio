import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const skills = {
  Programming: ['C', 'Python', 'Data Structures & Algorithms'],
  Databases: ['DBMS Fundamentals', 'SQL', 'Queries', 'Joins', 'Normalization'],
  'Web & Cloud': ['JavaScript', 'React.js', 'Node.js', 'Spring Boot', 'REST APIs', 'Docker'],
};

const projects = [
  {
    title: 'AI-Shift Nursing Off Project',
    category: 'Full Stack',
    stack: ['React JS', 'Axios'],
    description:
      'Built a full-stack shift management application, applying OOP design principles and integrating REST APIs with Axios for data-driven functionality.',
    icon: '◫',
  },
  {
    title: 'NetworkIQ – AI Inventory Optimization Platform',
    category: 'AI + Full Stack',
    stack: ['React JS', 'Spring Boot', 'PostgreSQL', 'Python', 'FastAPI', 'ML', 'LangGraph', 'Docker'],
    description:
      'Developed an AI-powered inventory platform that forecasts SKU demand and identifies shortages, excess stock, and transfer opportunities using machine learning and multi-agent optimization.',
    extra:
      'Built integrated full-stack services with REST APIs, PostgreSQL, JWT-based access control, CSV ingestion, and Docker Compose for containerized deployment.',
    icon: '▦',
    source: './assets/projects/NetworkIQ_Source.zip',
  },
];

const certifications = [
  {
    title: 'Certified Advanced Automation Professional',
    issuer: 'Automation Anywhere',
    date: '06/2026',
    icon: '⚙',
    file: './assets/certificates/Alapati_Vikas_Automation_Anywhere_Advanced_Automation_Professional.pdf',
  },
  {
    title: 'Lingual Certification',
    issuer: '',
    date: '',
    icon: '✦',
  },
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    date: '12/08/2026',
    note: 'Earned August 12, 2026',
    icon: '☁',
    file: './assets/certificates/Alapati_Vikas_Microsoft_Azure_Fundamentals.pdf',
  },
];

function Icon({ type, size = 22 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    github: <><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-13h4v2a4 4 0 0 1 2-2z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    phone: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" /></>,
    arrow: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
    download: <><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></>,
  };
  return <svg {...common}>{paths[type]}</svg>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('hero');
  const [typed, setTyped] = useState('');
  const roles = ['Software Developer', 'React.js Developer', 'Full-Stack Developer', 'Problem Solver', 'CS Student @ KL University'];

  useEffect(() => {
    let role = 0, index = 0, deleting = false, timer;
    const tick = () => {
      const current = roles[role];
      setTyped(current.slice(0, deleting ? index - 1 : index + 1));
      index += deleting ? -1 : 1;
      let delay = deleting ? 45 : 85;
      if (!deleting && index === current.length) { delay = 1600; deleting = true; }
      else if (deleting && index === 0) { deleting = false; role = (role + 1) % roles.length; delay = 350; }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const sections = [...document.querySelectorAll('section[id]')];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-30% 0px -55% 0px' });
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = id => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <div className="site">
      <div className="particles" aria-hidden="true">{Array.from({ length: 28 }, (_, i) => <span key={i} style={{ left: `${(i * 37) % 100}%`, animationDelay: `${(i % 10) * 0.7}s`, animationDuration: `${10 + (i % 8) * 1.5}s` }} />)}</div>

      <nav className="navbar">
        <div className="nav-container">
          <button className="logo" onClick={() => go('hero')}><span>&lt;</span>Vikas<span>/&gt;</span></button>
          <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"><i /><i /><i /></button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {['about', 'skills', 'projects', 'certifications', 'education', 'contact'].map(id => <button key={id} className={active === id ? 'active' : ''} onClick={() => go(id)}>{id[0].toUpperCase() + id.slice(1)}</button>)}
          </div>
        </div>
      </nav>

      <main>
        <section className="hero section" id="hero">
          <div className="hero-content reveal-in">
            <div className="hero-badge"><span /> Open to Intern &amp; Full Time</div>
            <h1>Alapati<br /><em>Vikas</em></h1>
            <div className="hero-title">I am a <strong>{typed}</strong><b>|</b></div>
            <p className="hero-tagline">Computer Science and Engineering student skilled in Python, SQL, Object-Oriented Programming, Data Structures, and DBMS, with hands-on experience in full-stack application development.</p>
            <div className="actions">
              <button className="btn primary" onClick={() => go('projects')}>View Projects <Icon type="arrow" size={17} /></button>
              <a className="btn secondary" href="./Alapati_Vikas_Resume.pdf" download>Download Resume <Icon type="download" size={17} /></a>
            </div>
            <div className="socials">
              <a href="https://github.com/2300033507" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon type="github" /></a>
              <a href="https://www.linkedin.com/in/alapati-vikas-17a060416/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon type="linkedin" /></a>
              <a href="mailto:2300033507cse@gmail.com" aria-label="Email"><Icon type="mail" /></a>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <div className="photo-ring ring-a" /><div className="photo-ring ring-b" />
            <div className="photo-glow" />
            <img src="./assets/images/vikas-photo.png" alt="Alapati Vikas" />
          </div>
          <button className="scroll-cue" onClick={() => go('about')} aria-label="Scroll to about"><span /></button>
        </section>

        <section className="section" id="about">
          <div className="container">
            <SectionHeader tag="Who I Am" title="About" accent="Me" />
            <div className="about-grid">
              <div className="about-text">
                <p>I'm <strong>Alapati Vikas</strong>, a Computer Science and Engineering student at <strong>KL University</strong>, Vaddeswaram (Class of 2027) with a <strong>CGPA of 9.11</strong>.</p>
                <p>I have a strong foundation in <strong>Python, SQL, Object-Oriented Programming, Data Structures, and DBMS</strong>, with hands-on experience in full-stack application development using React, Node.js, Express, Spring Boot, and MySQL.</p>
                <p>I'm seeking an entry-level software development role where I can apply my technical and problem-solving skills to build reliable and scalable applications.</p>
                <div className="stats"><Stat n="9.11" label="CGPA" /><Stat n="6+" label="Web & Cloud Skills" /><Stat n="2" label="Featured Projects" /><Stat n="2027" label="Graduating" /></div>
              </div>
              <div className="detail-cards">
                <Detail icon="🎓" title="Education" text="B.Tech CSE — KL University" meta="2023 – 2027" />
                <Detail icon="📍" title="Location" text="Vijayawada, India" meta="Andhra Pradesh" />
                <Detail icon="💼" title="Available For" text="Internships & Full-Time" meta="Entry-level Software Development" />
                <Detail icon="🎮" title="Interests" text="Coding · Listening to Music · Playing Games" meta="Always learning" />
              </div>
            </div>
          </div>
        </section>

        <section className="section alt" id="skills">
          <div className="container"><SectionHeader tag="What I Know" title="Technical" accent="Skills" />
            <div className="skills-grid">
              {Object.entries(skills).map(([name, items], idx) => <SkillCard key={name} name={name} icon={['💻', '🗄️', '🌐'][idx]} items={items} />)}
            </div>
            <div className="skills-bottom">
              <div><h3>Soft Skills</h3><div className="chips">{['Presentation Skills', 'Time Management', 'Adaptability & Quick Learning', 'Team Collaboration'].map(x => <span key={x}>{x}</span>)}</div></div>
              <div><h3>Interests</h3><div className="chips">{['Coding', 'Listening to Music', 'Playing Games'].map(x => <span key={x}>{x}</span>)}</div></div>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container"><SectionHeader tag="What I've Built" title="Featured" accent="Projects" />
            <div className="projects-grid">{projects.map(p => <ProjectCard key={p.title} project={p} />)}</div>
          </div>
        </section>

        <section className="section alt" id="certifications">
          <div className="container"><SectionHeader tag="Verified Credentials" title="Professional" accent="Certifications" />
            <div className="cert-grid">{certifications.map(c => <CertCard key={c.title} cert={c} />)}</div>
          </div>
        </section>

        <section className="section" id="education">
          <div className="container"><SectionHeader tag="Academic Background" title="Education" accent="Journey" />
            <div className="timeline">
              <Edu year="2023 – 2027" title="B.Tech in Computer Science Engineering" institution="KL University, Vaddeswaram" grade="CGPA: 9.11" desc="Building a strong foundation in Python, SQL, Object-Oriented Programming, Data Structures, DBMS, and full-stack application development." tags={['Python', 'SQL', 'OOP', 'Data Structures', 'DBMS', 'React.js', 'Spring Boot']} />
              <Edu year="2021 – 2023" title="Intermediate" institution="Sarada Jr College, Moghalraja Puram, Vijayawada" grade="CGPA: 84%" desc="Completed intermediate education, building the foundation for a career in Computer Science Engineering." tags={[]} />
            </div>
          </div>
        </section>

        <section className="section alt" id="contact">
          <div className="container"><SectionHeader tag="Get In Touch" title="Contact" accent="Me" />
            <div className="contact-grid">
              <div><h3>Let's Connect</h3><p>I'm currently looking for internship and full-time opportunities in software development. If you have a question, a project idea, or an opportunity, feel free to reach out.</p>
                <div className="contact-links"><Contact icon="mail" label="Email" value="2300033507cse@gmail.com" href="mailto:2300033507cse@gmail.com" /><Contact icon="phone" label="Phone" value="+91 7288808182" href="tel:+917288808182" /><Contact icon="linkedin" label="LinkedIn" value="linkedin.com" href="https://www.linkedin.com/" /></div>
              </div>
              <div className="contact-card"><div className="contact-card-inner"><span className="terminal">&gt;_</span><h3>Build something reliable.</h3><p>Let's turn an idea into a practical software solution.</p><a className="btn primary" href="mailto:2300033507cse@gmail.com?subject=Portfolio%20Opportunity">Email Me <Icon type="mail" size={17} /></a></div></div>
            </div>
          </div>
        </section>
      </main>
      <footer><span>&lt;Vikas/&gt;</span><p>© 2026 Alapati Vikas · Software Developer</p></footer>
      <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">↑</button>
    </div>
  );
}

function SectionHeader({ tag, title, accent }) { return <div className="section-header"><span className="section-tag">{tag}</span><h2>{title} <em>{accent}</em></h2></div>; }
function Stat({ n, label }) { return <div className="stat"><b>{n}</b><span>{label}</span></div>; }
function Detail({ icon, title, text, meta }) { return <div className="detail-card"><span className="detail-icon">{icon}</span><div><h4>{title}</h4><p>{text}</p><small>{meta}</small></div></div>; }
function SkillCard({ name, icon, items }) { return <article className="skill-card"><div className="skill-head"><span>{icon}</span><h3>{name}</h3></div><div className="skill-items">{items.map((item, i) => <div className="skill-item" key={item}><span>{item}</span><i><b style={{ width: `${Math.max(68, 94 - i * 5)}%` }} /></i></div>)}</div></article>; }
function ProjectCard({ project }) { return <article className="project-card"><div className="project-top"><span className="project-icon">{project.icon}</span><span className="project-category">{project.category}</span></div><h3>{project.title}</h3><p>{project.description}</p>{project.extra && <p>{project.extra}</p>}<div className="project-tags">{project.stack.map(x => <span key={x}>{x}</span>)}</div>{project.source && <a className="project-link" href={project.source} download>Project Files <Icon type="download" size={15} /></a>}</article>; }
function CertCard({ cert }) { return <article className="cert-card"><span className="cert-icon">{cert.icon}</span><div><h3>{cert.title}</h3>{cert.issuer && <p>{cert.issuer}</p>} {cert.date && <small>{cert.date}</small>}{cert.note && <small>{cert.note}</small>}{cert.file && <a href={cert.file} target="_blank" rel="noreferrer">View Certificate <Icon type="arrow" size={14} /></a>}</div></article>; }
function Edu({ year, title, institution, grade, desc, tags }) { return <article className="edu-item"><span className="edu-dot" /><div className="edu-card"><div className="edu-header"><div><h3>{title}</h3><p>{institution}</p></div><div className="edu-meta"><span>{year}</span><b>{grade}</b></div></div><p className="edu-desc">{desc}</p>{tags.length > 0 && <div className="edu-tags">{tags.map(t => <span key={t}>{t}</span>)}</div>}</div></article>; }
function Contact({ icon, label, value, href }) { return <a className="contact-item" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}><span><Icon type={icon} /></span><div><small>{label}</small><b>{value}</b></div></a>; }

createRoot(document.getElementById('root')).render(<App />);
