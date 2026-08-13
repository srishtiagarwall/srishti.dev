import styles from "./page.module.css";
import ThemeToggle from "./ThemeToggle";
import TiltCard from "./TiltCard";
import CommandPalette from "./CommandPalette";
import GithubGraph from "./GithubGraph";
import LeetCodeStats from "./LeetCodeStats";
import ScrollProgress from "./ScrollProgress";
import FadeIn from "./FadeIn";
import ContactForm from "./ContactForm";
import MobileNav from "./MobileNav";
import ExperienceSection from "./ExperienceSection";
import SystemStatus from "./SystemStatus";

const projects = [
  {
    title: "LLM Sentinel",
    subtitle: "LLM Observability & Governance Platform",
    points: [
      "Built a drop-in reverse proxy between any app and an LLM provider, running synchronous pre-call guardrails without adding latency to the client's request path.",
      "Designed async LLM-as-judge quality scoring (hallucination, toxicity, faithfulness) off the critical path, feeding a tamper-evident, hash-chained audit log with EU AI Act Article 12-compliant reporting.",
      "Implemented provider fallback with per-provider circuit breakers, measured at p50 ~29ms / p95 ~46ms gateway overhead under load.",
    ],
    tech: ["NestJS", "TypeScript", "Gemini", "Redis", "PostgreSQL", "SQS"],
    link: null,
    highlight: "Live",
  },
  {
    title: "CallSense AI",
    subtitle: "AI Call-Intelligence Platform",
    points: [
      "Built a transcription pipeline with a 3-provider chain (Whisper, Smallest Pulse, Sarvam) and real speaker diarization using VAD + voice embeddings + clustering, not heuristic speaker alternation.",
      "Architected LLM rubric-based QA scoring using schema-validated structured outputs, plus sentiment analysis, keyword topic tracking, and semantic search via Gemini embeddings + cosine similarity.",
      "Streamed live transcription job status via Server-Sent Events, with each pipeline stage degrading gracefully when its provider dependency is unavailable.",
    ],
    tech: ["FastAPI (Python)", "Next.js", "Gemini", "WebRTC VAD"],
    link: null,
    highlight: "Live",
  },
];

export default function Home() {
  return (
    <>
      <ScrollProgress />

      <nav className={styles.nav}>
        <div className={styles.navLinks}>
          <a href="#home" className={styles.navLink}>// home</a>
          <a href="#summary" className={styles.navLink}>// summary</a>
          <a href="#experience" className={styles.navLink}>// experience</a>
          <a href="#projects" className={styles.navLink}>// projects</a>
          <a href="#skills" className={styles.navLink}>// skills</a>
          <a href="#leetcode" className={styles.navLink}>// leetcode</a>
          <a href="#education" className={styles.navLink}>// education</a>
          <a href="#contact" className={styles.navLink}>// contact</a>
        </div>
        <ThemeToggle />
        <MobileNav />
      </nav>

      <CommandPalette />

      <main className={styles.container}>
        {/* Hero Section */}
        <section id="home" className={styles.hero}>
          <div className={styles.heroMain}>
            <h1 className={styles.heroName}>
              <span className={styles.heroNameStrong}>Srishti</span>
              <span className={styles.heroNameLight}>Agarwal</span>
            </h1>
            <h2 className={styles.heroRole}>Founding / Senior Software Engineer</h2>
            <p className={styles.heroBody}>
              I build <strong>backend systems for AI/LLM infrastructure</strong> i.e. I make sure the robots don&apos;t say anything that gets us sued. Core contributor to GrowthZ.ai, where I unify <strong>ad creative generation, campaign automation, and performance analytics</strong> for B2B clients so marketers can pretend they didn&apos;t need a marketer. Currently shipping REST APIs, RAG pipelines, and real-time bid optimization.
            </p>
            <div className={styles.heroLinks}>
              <a href="mailto:agarwal11srishti@gmail.com" className={styles.socialLink}>Email</a>
              <span className={styles.dot}>&middot;</span>
              <a href="https://www.linkedin.com/in/srishtiagarwal0212/" target="_blank" rel="noreferrer" className={styles.socialLink}>LinkedIn</a>
              <span className={styles.dot}>&middot;</span>
              <a href="https://github.com/srishtiagarwall" target="_blank" rel="noreferrer" className={styles.socialLink}>GitHub</a>
              <span className={styles.dot}>&middot;</span>
              <a href="https://leetcode.com/u/SrishtiAgarwal/" target="_blank" rel="noreferrer" className={styles.socialLink}>LeetCode</a>
              <span className={styles.dot}>&middot;</span>
              <a href="#projects" className={styles.socialLink}>Projects</a>
              <span className={styles.dot}>&middot;</span>
              <a href="/Srishti_Agarwal_Resume.pdf" download className={styles.ctaOutline}>Résumé ↓</a>
            </div>
          </div>

          <aside className={styles.heroSidebar}>
            <span className={styles.metaLabel}>GrowthZ AI &middot; 2 yrs</span>
            <div className={styles.miniTimeline}>
              <div className={styles.miniTimelineItem}>
                <h4 className={styles.miniRoleTitle}>Software Engineer II</h4>
                <div className={styles.miniMeta}>Full-time &middot; Aug 2026 - Present</div>
              </div>
              <div className={styles.miniTimelineItem}>
                <h4 className={styles.miniRoleTitle}>Software Engineer I</h4>
                <div className={styles.miniMeta}>Full-time &middot; Oct 2024 - Jul 2026</div>
              </div>
              <div className={styles.miniTimelineItem}>
                <h4 className={styles.miniRoleTitle}>Software Engineer</h4>
                <div className={styles.miniMeta}>Internship &middot; Jul 2024 - Sep 2024</div>
              </div>
            </div>
          </aside>

        </section>

        {/* Summary Section */}
        <section id="summary" className={styles.section}>
          <h2 className={styles.sectionTitle}>summary</h2>
          <FadeIn>
            <TiltCard className={styles.summaryCard}>
              <p className={styles.summaryText}>
                Founding Engineer building backend systems for <strong>AI/LLM infrastructure</strong> and production deployment, with 2 years of experience shipping at a fast-moving AI startup.
              </p>
              <div className={styles.milestoneFlow}>
                {[
                  [
                    { range: "Jul 2024 - Oct 2024", name: "Genius" },
                    { range: "Nov 2024 - Jan 2025", name: "Rainbow" },
                    { range: "Feb 2025 - Apr 2025", name: "Opus" },
                  ],
                  [
                    { range: "May 2025 - Jul 2025", name: "Wildcard" },
                    { range: "Jul 2025 - Aug 2025", name: "Google Ads Audit" },
                    { range: "Sep 2025 - Dec 2025", name: "Thrive" },
                  ],
                  [
                    { range: "Jan 2026 - Feb 2026", name: "Hawkeye" },
                    { range: "Mar 2026 - Jun 2026", name: "Multi-Channel Integration" },
                    { range: "Jul 2026 - Aug 2026", name: "Video-to-Meta-Ad Pipeline" },
                  ],
                ].map((col, i) => (
                  <div key={i} className={styles.milestoneCol}>
                    {col.map((m) => (
                      <div key={m.name} className={styles.milestoneItem}>
                        <span className={styles.milestoneRange}>{m.range}</span>
                        <span className={styles.milestoneName}>{m.name}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </TiltCard>
          </FadeIn>
        </section>

        {/* Experience Section */}
        <section id="experience" className={styles.section}>
          <h2 className={styles.sectionTitle}>experience</h2>
          <FadeIn>
            <ExperienceSection />
          </FadeIn>
        </section>

        {/* Projects Section */}
        <section id="projects" className={styles.section}>
          <h2 className={styles.sectionTitle}>projects</h2>
          <div className={styles.projectStack}>
            {projects.map((project, i) => (
              <FadeIn key={project.title} delay={i * 80}>
                <TiltCard className={styles.projectCard}>
                  <div className={styles.projectHeader}>
                    <div>
                      <span className={styles.projectTitle}>{project.title}</span>
                      <span className={styles.projectSubtitle}>{project.subtitle}</span>
                    </div>
                    <span className={styles.projectHighlight}>{project.highlight}</span>
                  </div>
                  <ul className={styles.projectPoints}>
                    {project.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                  <div className={styles.pills}>
                    {project.tech.map((t) => <span key={t} className={styles.pill}>{t}</span>)}
                  </div>
                </TiltCard>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={styles.section}>
          <h2 className={styles.sectionTitle}>skills</h2>
          <div className={styles.grid}>
            {[
              { title: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL", "C++"], span: "left-a" },
              { title: "AI / ML", items: ["LangChain", "LangGraph", "Gemini Vision AI", "RAG", "LLM-as-Judge Evaluation", "Gemini 2.5 Flash", "Embeddings", "Imagen 3", "Veo 3"], span: "right-a" },
              { title: "Frameworks & Libraries", items: ["Node.js", "NestJS", "Express.js", "FastAPI"], span: "left-b" },
              { title: "Databases & Systems", items: ["PostgreSQL", "MongoDB", "MySQL", "System Design (HLD/LLD)", "DSA", "Microservices", "Git"], span: "right-b" },
              { title: "Infra & Cloud", items: ["AWS (S3, SQS, Lambda, EC2, API Gateway)", "GCP (Cloud Run, Cloud SQL)", "Cloudflare R2", "Docker", "Pulumi (IaC)"], span: "left-c" },
            ].map(({ title, items, span }, i) => (
              <FadeIn key={title} delay={i * 60} className={styles[span]}>
                <TiltCard className={styles.card}>
                  <h3 className={styles.cardTitle}>{title}</h3>
                  <div className={styles.pills}>
                    {items.map((s) => <span key={s} className={styles.pill}>{s}</span>)}
                  </div>
                </TiltCard>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* LeetCode Section */}
        <section id="leetcode" className={styles.section}>
          <h2 className={styles.sectionTitle}>leetcode</h2>
          <FadeIn>
            <LeetCodeStats />
          </FadeIn>
          <FadeIn delay={100}>
            <GithubGraph />
          </FadeIn>
        </section>

        {/* Education Section */}
        <section id="education" className={styles.section}>
          <h2 className={styles.sectionTitle}>education</h2>
          <div className={styles.timeline}>
            <FadeIn>
              <div className={styles.timelineItem}>
                <h3 className={styles.roleTitle}>B.Tech in Computer Science and Engineering</h3>
                <div className={styles.company}>@ SRM Institute of Science and Technology &middot; Sept 2020 - Jun 2024</div>
                <p className={styles.roleDesc}>Graduated with 9.25 CGPA.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={styles.section}>
          <h2 className={styles.sectionTitle}>contact</h2>
          <FadeIn>
            <div className={styles.contactGrid}>
              <div className={styles.contactInfo}>
                <p className={styles.contactBlurb}>
                  Open to interesting problems, collaborations, and conversations about backend systems and AI or just tell me your bid optimizer is on fire, I&apos;ll relate either way.
                </p>
                <div className={styles.contactLinks}>
                  <a href="mailto:agarwal11srishti@gmail.com" className={styles.contactLink}>
                    <span className={styles.contactLinkLabel}>email</span>
                    agarwal11srishti@gmail.com
                  </a>
                  <a href="https://www.linkedin.com/in/srishtiagarwal0212/" target="_blank" rel="noreferrer" className={styles.contactLink}>
                    <span className={styles.contactLinkLabel}>linkedin</span>
                    srishtiagarwal0212
                  </a>
                  <a href="https://github.com/srishtiagarwall" target="_blank" rel="noreferrer" className={styles.contactLink}>
                    <span className={styles.contactLinkLabel}>github</span>
                    srishtiagarwall
                  </a>
                </div>
              </div>
              <ContactForm />
            </div>
          </FadeIn>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <SystemStatus />
          <p>&copy; {new Date().getFullYear()} Srishti Agarwal. Press <kbd className={styles.kbd}>Ctrl+K</kbd> for command palette.</p>
        </footer>
      </main>
    </>
  );
}
