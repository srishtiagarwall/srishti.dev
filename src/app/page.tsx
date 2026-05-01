import styles from "./page.module.css";
import ThemeToggle from "./ThemeToggle";
import TerminalToggle from "./TerminalToggle";
import Typewriter from "./Typewriter";
import TiltCard from "./TiltCard";
import CommandPalette from "./CommandPalette";
import InteractiveTerminal from "./InteractiveTerminal";
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
    title: "GROWTH — AI MarTech Platform",
    description: "Designed and built the backend for a suite of 6 AI-powered marketing products. Covers ad copy generation, creative automation (static, animated, video), campaign management, and performance analytics.",
    tech: ["NestJS", "LangChain", "Gemini 2.5 Flash", "Imagen 3", "Veo 3", "PostgreSQL", "AWS", "Docker"],
    link: null,
    highlight: "Sub-60s latency · 0→1 build · 6 products",
  },
  {
    title: "Campaign Automation Engine",
    description: "Auto-generates keywords, ad groups, match types, assets, and extensions via Google Ads API from a single URL input. Runs real-time bid and structure adjustments using XGBoost ML models on live campaigns.",
    tech: ["Google Ads API", "XGBoost", "Python", "FastAPI", "PostgreSQL"],
    link: null,
    highlight: "140% of quarterly target · Top Performer",
  },
  {
    title: "Unified Analytics Layer",
    description: "Aggregates multi-platform data (GA4 + AppsFlyer), computes performance signals, and surfaces real-time insights across campaign creation, tracking, and optimization through a single dashboard.",
    tech: ["GA4", "AppsFlyer", "Node.js", "PostgreSQL", "AWS Lambda"],
    link: null,
    highlight: "Multi-platform attribution · Real-time insights",
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
          <a href="#skills" className={styles.navLink}>// skills</a>
          <a href="#experience" className={styles.navLink}>// experience</a>
          <a href="#education" className={styles.navLink}>// education</a>
          <a href="#contact" className={styles.navLink}>// contact</a>
        </div>
        <TerminalToggle />
        <ThemeToggle />
        <MobileNav />
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
            <a href="mailto:agarwal11srishti@gmail.com" className={styles.socialLink}>Email</a>
            <span className={styles.dot}>&middot;</span>
            <a href="https://www.linkedin.com/in/srishtiagarwal0212/" target="_blank" rel="noreferrer" className={styles.socialLink}>LinkedIn</a>
            <span className={styles.dot}>&middot;</span>
            <a href="https://github.com/srishtiagarwall" target="_blank" rel="noreferrer" className={styles.socialLink}>GitHub</a>
            <span className={styles.dot}>&middot;</span>
            <a href="https://leetcode.com/u/SrishtiAgarwal/" target="_blank" rel="noreferrer" className={styles.socialLink}>LeetCode</a>
            <span className={styles.dot}>&middot;</span>
            <a href="/Srishti_Agarwal_Resume.pdf" download className={styles.downloadBtn}>⬇ Resume</a>
          </div>
        </section>

        {/* Summary Section */}
        <section id="summary" className={styles.section}>
          <h2 className={styles.sectionTitle}>summary</h2>
          <FadeIn>
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
          </FadeIn>
        </section>

        {/* Skills Section */}
        <section id="skills" className={styles.section}>
          <h2 className={styles.sectionTitle}>skills</h2>
          <InteractiveTerminal />
          <div className={styles.grid}>
            {[
              { title: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL", "C/C++"] },
              { title: "Backend", items: ["Node.js", "NestJS", "Express.js", "FastAPI"] },
              { title: "AI / ML", items: ["LangChain", "LangGraph", "Gemini 2.5 Flash", "Imagen 3", "Veo 3", "Gemini Vision AI", "XGBoost"] },
              { title: "APIs & Integrations", items: ["Google Ads API", "GA4", "AppsFlyer", "Google Cloud AI Platform"] },
              { title: "Cloud & Infra", items: ["AWS (S3, SQS, Lambda, EC2, API Gateway)", "Docker", "Pulumi (IaC)"] },
              { title: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
              { title: "Core Concepts", items: ["System Design (HLD/LLD)", "Multi-Tenant Architecture", "Microservices", "Event-Driven Systems"] },
            ].map(({ title, items }, i) => (
              <FadeIn key={title} delay={i * 60}>
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

        {/* Projects Section — coming soon */}

        {/* Open Source Section */}
        <section id="open-source" className={styles.section}>
          <h2 className={styles.sectionTitle}>open source</h2>
          <FadeIn>
            <LeetCodeStats />
          </FadeIn>
          <FadeIn delay={100}>
            <GithubGraph />
          </FadeIn>
        </section>

        {/* Experience Section */}
        <section id="experience" className={styles.section}>
          <h2 className={styles.sectionTitle}>experience</h2>
          <FadeIn>
            <ExperienceSection />
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
                  Open to interesting problems, collaborations, and conversations about backend systems and AI.
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
