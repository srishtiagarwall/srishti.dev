import styles from "./page.module.css";
import ThemeToggle from "./ThemeToggle";
import Typewriter from "./Typewriter";
import TiltCard from "./TiltCard";
import CommandPalette from "./CommandPalette";

export default function Home() {
  return (
    <>
      <nav className={styles.nav}>
        <a href="#home" className={styles.navLink}>// home</a>
        <a href="#summary" className={styles.navLink}>// summary</a>
        <a href="#skills" className={styles.navLink}>// skills</a>
        <a href="#experience" className={styles.navLink}>// experience</a>
        <a href="#education" className={styles.navLink}>// education</a>
        <ThemeToggle />
      </nav>

      <CommandPalette />

      <main className={styles.container}>
        {/* Hero Section */}
        <section id="home" className={styles.hero}>
          <div className={styles.glowBlob}></div>
          <div className={styles.glowBlob2}></div>
          <div className={styles.heroGreeting}>
            <Typewriter text="> fetch profile --user srishti... [OK]" speed={40} />
          </div>
          <h1 className={styles.heroName}>Srishti Agarwal</h1>
          <h2 className={styles.heroRole}>Founding Engineer &middot; Backend & AI Systems</h2>
          <div className={styles.heroLinks}>
            <a href="tel:+" className={styles.socialLink}>Phone</a>
            <span className={styles.dot}>&middot;</span>
            <a href="mailto:hello@srishti.dev" className={styles.socialLink}>Email</a>
            <span className={styles.dot}>&middot;</span>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.socialLink}>LinkedIn</a>
            <span className={styles.dot}>&middot;</span>
            <a href="https://github.com" target="_blank" rel="noreferrer" className={styles.socialLink}>GitHub</a>
            <span className={styles.dot}>&middot;</span>
            <a href="https://leetcode.com" target="_blank" rel="noreferrer" className={styles.socialLink}>LeetCode</a>
            <span className={styles.dot}>&middot;</span>
            <a href="/resume.pdf" download className={styles.downloadBtn}>⬇ Resume</a>
          </div>
        </section>

        {/* Summary Section */}
        <section id="summary" className={styles.section}>
          <h2 className={styles.sectionTitle}>summary</h2>
          <TiltCard className={styles.summaryCard}>
            <p className={styles.summaryText}>
              Founding Engineer who designed and built the backend foundation for <strong>GROWTH</strong>: a suite of 6 AI-powered MarTech products. Delivered ad copy generation, creative automation, video production, and campaign management end-to-end. Own full-stack execution from system architecture and API design.
            </p>
            <ul className={styles.bulletList}>
              <li>Built AI pipelines that reduced campaign brief-to-launch time from weeks to minutes, replacing manual workflows with automated creative generation at sub-60s latency.</li>
              <li>Designed multi-tenant backend architecture supporting 6 independent AI services under a unified platform balancing service isolation, shared infra, and cost efficiency.</li>
              <li>Translated ambiguous product requirements into production-ready AI systems in a 0-to-1 environment.</li>
            </ul>
          </TiltCard>
        </section>

        {/* Skills Section */}
        <section id="skills" className={styles.section}>
          <h2 className={styles.sectionTitle}>skills</h2>
          <div className={styles.grid}>
            <TiltCard className={styles.card}>
              <h3 className={styles.cardTitle}>Languages</h3>
              <div className={styles.pills}>
                {['TypeScript', 'JavaScript', 'Python', 'SQL', 'C/C++'].map(s => <span key={s} className={styles.pill}>{s}</span>)}
              </div>
            </TiltCard>
            <TiltCard className={styles.card}>
              <h3 className={styles.cardTitle}>Backend</h3>
              <div className={styles.pills}>
                {['Node.js', 'NestJS', 'Express.js', 'FastAPI'].map(s => <span key={s} className={styles.pill}>{s}</span>)}
              </div>
            </TiltCard>
            <TiltCard className={styles.card}>
              <h3 className={styles.cardTitle}>AI / ML</h3>
              <div className={styles.pills}>
                {['LangChain', 'LangGraph', 'Gemini 2.5 Flash', 'Imagen 3', 'Veo 3', 'Gemini Vision AI', 'XGBoost'].map(s => <span key={s} className={styles.pill}>{s}</span>)}
              </div>
            </TiltCard>
            <TiltCard className={styles.card}>
              <h3 className={styles.cardTitle}>APIs & Integrations</h3>
              <div className={styles.pills}>
                {['Google Ads API', 'GA4', 'AppsFlyer', 'Google Cloud AI Platform'].map(s => <span key={s} className={styles.pill}>{s}</span>)}
              </div>
            </TiltCard>
            <TiltCard className={styles.card}>
              <h3 className={styles.cardTitle}>Cloud & Infra</h3>
              <div className={styles.pills}>
                {['AWS (S3, SQS, Lambda, EC2, API Gateway)', 'Docker'].map(s => <span key={s} className={styles.pill}>{s}</span>)}
              </div>
            </TiltCard>
            <TiltCard className={styles.card}>
              <h3 className={styles.cardTitle}>Databases</h3>
              <div className={styles.pills}>
                {['PostgreSQL', 'MySQL', 'MongoDB'].map(s => <span key={s} className={styles.pill}>{s}</span>)}
              </div>
            </TiltCard>
            <TiltCard className={styles.card}>
              <h3 className={styles.cardTitle}>Core Concepts</h3>
              <div className={styles.pills}>
                {['System Design (HLD/LLD)', 'Multi-Tenant Architecture', 'Microservices', 'Event-Driven Systems'].map(s => <span key={s} className={styles.pill}>{s}</span>)}
              </div>
            </TiltCard>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className={styles.section}>
          <h2 className={styles.sectionTitle}>experience</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <h3 className={styles.roleTitle}>Founding Engineer - Backend & AI Systems</h3>
              <div className={styles.company}>@ GrowthZ AI, Gurugram, India &middot; July 2024 - Present</div>
              <ul className={styles.bulletList}>
                <li>Engineered an AI-powered ad copy and creative generation platform ingesting Play Store / App Store / website reviews to identify sentiment and themes, producing optimized ad copies with integrated keyword research, and generating static, animated, and video ad creatives delivering production-ready assets at sub-60s latency.</li>
                <li>Designed an end-to-end campaign automation and optimization engine auto-generating keywords, ad groups, match types, assets, and extensions via Google Ads API from a single URL input, and running real-time bid and structure adjustments using XG Boost-based ML models on live campaigns.</li>
                <li>Engineered a unified performance analytics layer aggregating multi-platform data, computing performance signals, and surfacing real-time insights across campaign creation, tracking, and optimization services through a single marketing dashboard.</li>
                <li>Engineered modular NestJS microservices with RBAC, JWT auth, and multi-tenant architecture reducing unauthorized access incidents by 95% and cutting client onboarding time by 60%.</li>
                <li>Maintained scalable cloud infrastructure using Docker, AWS (S3, SQS, Lambda), and Pulumi (IaC) achieving 99.9% uptime and reducing deployment errors by 80%.</li>
                <li>Integrated GA4 and AppsFlyer for unified attribution and reporting pipelines, ensuring consistent data flow.</li>
              </ul>
              <div className={styles.impactBox}>
                <h4 className={styles.impactTitle}>Impact</h4>
                <ul className={styles.bulletList}>
                  <li>Independently built one of six beta products that opened a new monetization channel within three months of joining achieved 140% of quarterly variable & recognized as Top Performer for three consecutive months.</li>
                  <li>Awarded Emerging Leader Excellence Award for cross-functional ownership, removing technical blockers, and driving predictable delivery timelines across product milestones.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className={styles.section}>
          <h2 className={styles.sectionTitle}>education</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <h3 className={styles.roleTitle}>B.Tech in Computer Science and Engineering</h3>
              <div className={styles.company}>@ SRM Institute of Science and Technology &middot; Sept 2020 - Jun 2024</div>
              <p className={styles.roleDesc}>
                Graduated with 9.25 CGPA.
              </p>
            </div>
          </div>
        </section>

        {/* Contact / Footer */}
        <footer id="contact" className={styles.footer}>
          <div className={styles.links}>
            <a href="mailto:hello@srishti.dev">email</a>
            <a href="https://github.com" target="_blank" rel="noreferrer">github</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">linkedin</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Srishti Agarwal. Built with Next.js & Vanilla CSS. Press <kbd style={{background: 'var(--code-bg)', padding: '2px 6px', borderRadius: '4px'}}>Ctrl+K</kbd> for command palette.</p>
        </footer>
      </main>
    </>
  );
}
