import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaArrowRight,
  FaBars,
  FaCodeBranch,
  FaExternalLinkAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTimes,
  FaDownload,
} from "react-icons/fa";

const profile = {
  name: "Shouzab Farooqui",
  role: "Frontend Engineer | React | Next.js | React Native",
  phone: "+91 9756304445",
  email: "shouziadeeb123@gmail.com",
  github: "https://github.com/shouziadeeb",
  linkedin: "https://www.linkedin.com/in/shouzab-farooqui-1a0040298",
  summary:
    "Frontend Engineer with experience building scalable web and mobile applications using React, Next.js, React Native, TypeScript, and modern frontend technologies.",
};

const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const strengths = [
  "Responsive, accessible user interfaces",
  "Reusable component systems and design systems",
  "REST API integration, authentication, and WebSocket features",
  "Cross-platform mobile applications with React Native",
];

const experiences = [
  {
    role: "Dev Lead",
    company: "Uzence",
    mode: "Virtual",
    period: "Sep 2025 - Present",
    technologies: ["React", "Storybook", "Design Systems", "WCAG 2.1 AA"],
    responsibilities: [
      "Led frontend architecture decisions across product features.",
      "Mentored developers and conducted code reviews.",
      "Built enterprise-level design systems using React and Storybook.",
      "Implemented accessibility standards aligned with WCAG 2.1 AA.",
      "Improved code quality, maintainability, and delivery consistency.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Handyease",
    mode: "Virtual",
    period: "Sep 2024 - Aug 2025",
    technologies: ["Next.js", "Tailwind CSS", "WebSockets", "React"],
    responsibilities: [
      "Built reusable UI components using Next.js and Tailwind CSS.",
      "Improved development efficiency through reusable architecture.",
      "Implemented WebSocket-based real-time updates.",
      "Developed responsive and cross-browser compatible interfaces.",
      "Collaborated with designers and backend developers.",
    ],
  },
  {
    role: "Freelance Frontend Developer",
    company: "Automify.in",
    mode: "Client Work",
    period: "Freelance",
    technologies: ["Next.js", "Capacitor", "WebSockets", "Full-stack"],
    responsibilities: [
      "Built a full-stack job application platform using Next.js.",
      "Developed cross-platform mobile apps using Capacitor.",
      "Implemented real-time features using WebSockets.",
      "Worked directly with clients and delivered production-ready solutions.",
    ],
  },
];

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "WebSockets"],
  },
  {
    title: "Mobile",
    skills: ["React Native", "Capacitor", "Cross Platform Development"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL", "Supabase"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Storybook", "Component Architecture"],
  },
  {
    title: "AI Tools",
    skills: ["Cursor AI", "ChatGPT", "AI-powered Product Workflows"],
  },
];

const achievements = [
  {
    title: "Design System Development",
    text: "Built enterprise-ready component foundations with React and Storybook for consistent product delivery.",
  },
  {
    title: "Accessibility Implementation",
    text: "Applied WCAG 2.1 AA standards to improve keyboard navigation, semantics, and inclusive interaction patterns.",
  },
  {
    title: "React Native Experience",
    text: "Delivered cross-platform mobile experiences and reusable UI patterns across web and mobile surfaces.",
  },
  {
    title: "Real-time Systems",
    text: "Implemented WebSocket-powered updates for responsive, production-facing user experiences.",
  },
  {
    title: "AI Integration Experience",
    text: "Worked on AI-powered product flows and uses modern AI tooling to improve frontend delivery quality.",
  },
];

const education = [
  "Bachelor of Arts (BA), MJP Rohilkhand University, 2019 - 2022",
  "Bachelor of Computer Applications (BCA), Currently Pursuing",
];

const createScreenshotUrl = (url) =>
  `https://image.thum.io/get/width/1200/crop/760/noanimate/${encodeURIComponent(url)}`;

const featuredProjects = [
  {
    title: "Gym Management & Discovery Platform",
    liveUrl: "https://gym-management-green.vercel.app/",
    githubUrl: "",
    screenshot: createScreenshotUrl("https://gym-management-green.vercel.app/"),
    description:
      "Cross-platform Gym Management & Discovery platform enabling gym owners to handle memberships, attendance, payments, and operations while members discover and join gyms.",
    highlights: [
      "Multi-tenant architecture with role-based access control",
      "Android, iOS, and Web support using React Native + Expo",
      "Phone OTP, Email Authentication, and Google OAuth",
      "QR attendance workflow with real-time attendance analytics",
    ],
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "Authentication",
      "QR System",
      "Mobile Development",
    ],
  },
  {
    title: "Self AI Interview Platform",
    liveUrl: "https://self-ai-interview.vercel.app",
    githubUrl: "",
    screenshot: createScreenshotUrl("https://self-ai-interview.vercel.app"),
    description:
      "AI-powered interview preparation platform for technical and behavioral rounds through dynamic AI-generated interview sessions.",
    highlights: [
      "Dynamic interview flows tailored per user session",
      "Gemini AI integration for interview generation and guidance",
      "Real-time feedback loop for iterative preparation",
      "Reusable component architecture with API optimization",
    ],
    tags: ["Next.js", "TypeScript", "Gemini AI", "AI Integration", "Frontend Engineering"],
  },
];

const secondaryProjects = [
  {
    title: "Food Delivery Web Application",
    liveUrl: "https://shouziadeeb.vercel.app/",
    githubUrl: "",
    screenshot: createScreenshotUrl("https://shouziadeeb.vercel.app/"),
    description:
      "Responsive food delivery web application where users browse menus, manage cart items, and complete order workflows with a clean UI.",
    highlights: [
      "Responsive layout across mobile, tablet, and desktop",
      "Menu browsing with reusable product card components",
      "Cart and order workflow with consistent interaction design",
    ],
    tags: ["React.js", "JavaScript", "Frontend", "Responsive Design", "UI/UX"],
  },
  {
    title: "Music Player Web Application",
    liveUrl: "https://shouzi-musicplayer.netlify.app/",
    githubUrl: "",
    screenshot: createScreenshotUrl("https://shouzi-musicplayer.netlify.app/"),
    description:
      "Responsive music player with playback controls, contextual state management, and smooth audio interaction.",
    highlights: [
      "Play/Pause, Next/Previous, and volume controls",
      "Context API-driven global audio and player state",
      "Mobile-friendly responsive interface for media control",
    ],
    tags: ["React.js", "Context API", "Audio Player", "State Management", "Frontend"],
  },
];

function App() {
  const [activeSection, setActiveSection] = useState("about");

  const getHeaderOffset = useCallback(() => {
    const header = document.querySelector(".site-header");
    return header ? Math.ceil(header.getBoundingClientRect().height + 16) : 88;
  }, []);

  const handleNavigate = useCallback(
    (sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      const targetTop =
        window.scrollY + element.getBoundingClientRect().top - getHeaderOffset();

      setActiveSection(sectionId);
      window.history.pushState(null, "", `#${sectionId}`);
      window.scrollTo({ top: Math.max(targetTop, 0), behavior: "smooth" });
    },
    [getHeaderOffset]
  );

  useEffect(() => {
    const sectionIds = navigation.map((item) => item.href.slice(1));
    let frameId = 0;

    const updateActiveSection = () => {
      const headerOffset = getHeaderOffset();
      let nextActiveSection = sectionIds[0];
      let closestDistance = Number.POSITIVE_INFINITY;

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        if (rect.bottom < headerOffset) return;

        const distance = Math.abs(rect.top - headerOffset);
        if (distance < closestDistance) {
          closestDistance = distance;
          nextActiveSection = id;
        }
      });

      setActiveSection(nextActiveSection);
    };

    const handleScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [getHeaderOffset]);

  useEffect(() => {
    const initialSectionId = window.location.hash.replace("#", "");
    if (initialSectionId && navigation.some((item) => item.href === `#${initialSectionId}`)) {
      requestAnimationFrame(() => handleNavigate(initialSectionId));
    }
  }, [handleNavigate]);

  const projectSchema = useMemo(
    () =>
      [...featuredProjects, ...secondaryProjects].map((project) => ({
        "@type": "SoftwareSourceCode",
        name: project.title,
        url: project.liveUrl,
        programmingLanguage: project.tags,
        description: project.description,
      })),
    []
  );

  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Person",
      name: profile.name,
      jobTitle: "Frontend Engineer",
      email: profile.email,
      telephone: profile.phone,
      url: profile.linkedin,
      sameAs: [profile.github, profile.linkedin],
      knowsAbout: skillGroups.flatMap((group) => group.skills),
      hasPart: projectSchema,
    }),
    [projectSchema]
  );

  return (
    <div className="site-shell">
      <AnimatedBackdrop />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <footer className="site-footer">
        <p>Built by {profile.name}. Focused on accessible, production-ready interfaces.</p>
      </footer>
    </div>
  );
}

function AnimatedBackdrop() {
  return (
    <div className="gaming-bg" aria-hidden="true">
      <span className="gaming-bg__orb gaming-bg__orb--one"></span>
      <span className="gaming-bg__orb gaming-bg__orb--two"></span>
      <span className="gaming-bg__orb gaming-bg__orb--three"></span>
      <span className="gaming-bg__grid"></span>
      <span className="gaming-bg__scanline"></span>
    </div>
  );
}

function Header({ activeSection, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [activeSection]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 920) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Go to top">
        SF
      </a>
      <button
        type="button"
        className="menu-toggle"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-nav"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
      </button>
      <nav
        id="primary-nav"
        className={`nav-links${menuOpen ? " open" : ""}`}
        aria-label="Primary navigation"
      >
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={activeSection === item.href.slice(1) ? "active" : ""}
            aria-current={activeSection === item.href.slice(1) ? "page" : undefined}
            onClick={(event) => {
              event.preventDefault();
              setMenuOpen(false);
              onNavigate(item.href.slice(1));
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-grid">
        <Reveal className="hero-copy">
          <p className="eyebrow">Frontend Engineer</p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-summary">
            {profile.summary} Experienced in REST APIs, authentication systems,
            reusable component libraries, WebSockets, accessibility, and
            AI-powered product work.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary" href="#contact">
              Contact me <FaArrowRight aria-hidden="true" />
            </a>
            <a
              className="button"
              href="/Shouzab_Farooqui_Resume.pdf"
              download="Shouzab_Farooqui_Resume.pdf"
              type="application/pdf"
            >
              Resume <FaDownload aria-hidden="true" />
            </a>
            <a className="icon-button" href={profile.github} target="_blank" rel="noreferrer" aria-label="Open GitHub profile">
              <FaGithub aria-hidden="true" />
            </a>
            <a className="icon-button" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Open LinkedIn profile">
              <FaLinkedinIn aria-hidden="true" />
            </a>
          </div>
        </Reveal>
        <Reveal className="hero-visual" delay={0.12}>
          <div className="hero-illustration" aria-hidden="true">
            <div className="code-window">
              <div className="window-bar">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="code-lines">
                <span className="line long"></span>
                <span className="line medium accent"></span>
                <span className="line short"></span>
                <span className="line wide"></span>
                <span className="line medium"></span>
                <span className="line short accent"></span>
              </div>
            </div>
            <div className="mobile-preview">
              <span className="preview-top"></span>
              <span className="preview-card"></span>
              <span className="preview-row"></span>
              <span className="preview-row short"></span>
            </div>
            <div className="system-badge">UI</div>
          </div>
          <div className="signal-panel" aria-label="Professional highlights">
            <span>React</span>
            <span>Next.js</span>
            <span>React Native</span>
            <span>WCAG 2.1 AA</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="Practical frontend engineering for web and mobile products.">
      <div className="two-column">
        <Reveal className="content-card large">
          <p>
            I build performant, accessible, and user-focused digital experiences
            using React, Next.js, React Native, TypeScript, and modern frontend
            architecture.
          </p>
          <p>
            My work spans enterprise design systems, responsive interfaces,
            authentication flows, REST API integration, real-time features, and
            AI-powered products. I care about clean component boundaries,
            maintainable UI systems, and product experiences that work well on
            every screen size.
          </p>
        </Reveal>
        <Reveal className="content-card" delay={0.1}>
          <h3>Key strengths</h3>
          <ul className="check-list">
            {strengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>
          <h3>Education</h3>
          <ul className="compact-list">
            {education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Recent roles and delivery impact.">
      <div className="timeline">
        {experiences.map((item, index) => (
          <Reveal className="experience-card" key={`${item.company}-${item.role}`} delay={index * 0.08}>
            <div className="experience-head">
              <div>
                <h3>{item.role}</h3>
                <p>
                  {item.company} <span>{item.mode}</span>
                </p>
              </div>
              <time>{item.period}</time>
            </div>
            <ul className="compact-list">
              {item.responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
            <div className="tag-row">
              {item.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  const allProjects = [...featuredProjects, ...secondaryProjects];

  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Production work that demonstrates architecture, scalability, and frontend impact."
    >
      <div className="projects-layout">
        <div className="projects-grid" role="list" aria-label="Project showcase">
          {allProjects.map((project, index) => (
            <Reveal key={project.title} className="project-reveal" delay={index * 0.07}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card" role="listitem">
      
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="project-highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-actions">
          <a className="button primary" href={project.liveUrl} target="_blank" rel="noreferrer">
            Live Demo <FaExternalLinkAlt aria-hidden="true" />
          </a>
          {project.githubUrl ? (
            <a className="button" href={project.githubUrl} target="_blank" rel="noreferrer">
              GitHub <FaCodeBranch aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technology stack grouped by product responsibility.">
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <Reveal className="skill-card" key={group.title} delay={index * 0.05}>
            <h3>{group.title}</h3>
            <div className="tag-row">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Areas where the work goes beyond screens.">
      <div className="achievement-grid">
        {achievements.map((item, index) => (
          <Reveal className="achievement-card" key={item.title} delay={index * 0.06}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Open to frontend engineering opportunities and product work.">
      <Reveal className="contact-panel">
        <p>
          For recruiter conversations, freelance work, or frontend product roles,
          use any of the channels below.
        </p>
        <div className="contact-grid">
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
            <FaPhoneAlt aria-hidden="true" />
            <span>{profile.phone}</span>
          </a>
          <a href={`mailto:${profile.email}`}>
            <FaEnvelope aria-hidden="true" />
            <span>{profile.email}</span>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <FaGithub aria-hidden="true" />
            <span>GitHub</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedinIn aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
        </div>
      </Reveal>
    </Section>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section className="page-section" id={id} aria-labelledby={`${id}-title`}>
      <Reveal className="section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={`${id}-title`}>{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export default App;
