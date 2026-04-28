import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <nav className={styles.nav}>
        <a href="#home" className={styles.navLink}>// home</a>
        <a href="#expertise" className={styles.navLink}>// expertise</a>
        <a href="#projects" className={styles.navLink}>// work</a>
        <a href="#experience" className={styles.navLink}>// experience</a>
        <a href="#contact" className={styles.navLink}>// contact</a>
      </nav>

      <main className={styles.container}>
        {/* Hero Section */}
        <section id="home" className={styles.hero}>
          <div className={styles.heroGreeting}>&gt; whoami</div>
          <h1 className={styles.heroName}>Srishti</h1>
          <h2 className={styles.heroRole}>Founding Engineer &middot; Backend & AI Systems</h2>
          <p className={styles.cardTech}>
            Building resilient backend systems and integrating cutting-edge AI/ML technologies.
            <br />
            Passionate about scalable architecture and clean code.
          </p>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className={styles.section}>
          <h2 className={styles.sectionTitle}>expertise</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Backend Systems</h3>
              <p className={styles.cardTech}>
                NestJS, TypeScript, Python<br />
                PostgreSQL, Redis<br />
                Docker, Microservices
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Cloud & Infra</h3>
              <p className={styles.cardTech}>
                AWS SQS, S3, Lambda<br />
                Pulumi (IaC)<br />
                CI/CD, Serverless
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>AI/ML Integration</h3>
              <p className={styles.cardTech}>
                LangChain, LangGraph<br />
                Google GenAI APIs<br />
                Vector Databases
              </p>
            </div>
          </div>
        </section>

        {/* Work / Projects Section */}
        <section id="projects" className={styles.section}>
          <h2 className={styles.sectionTitle}>work</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>ReviewBot</h3>
              <p className={styles.roleDesc}>
                Automated code review system powered by LLMs, integrating directly with GitHub workflows.
              </p>
              <div className={styles.pills}>
                <span className={styles.pill}>Python</span>
                <span className={styles.pill}>LangChain</span>
                <span className={styles.pill}>AWS Lambda</span>
              </div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>CloudSync</h3>
              <p className={styles.roleDesc}>
                High-performance distributed file synchronization service across multi-cloud environments.
              </p>
              <div className={styles.pills}>
                <span className={styles.pill}>TypeScript</span>
                <span className={styles.pill}>NestJS</span>
                <span className={styles.pill}>Redis</span>
              </div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>GraphInsight</h3>
              <p className={styles.roleDesc}>
                Analytics dashboard for visualizing complex relational data and ML model outputs.
              </p>
              <div className={styles.pills}>
                <span className={styles.pill}>React</span>
                <span className={styles.pill}>PostgreSQL</span>
                <span className={styles.pill}>GenAI</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className={styles.section}>
          <h2 className={styles.sectionTitle}>experience</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <h3 className={styles.roleTitle}>Founding Engineer</h3>
              <div className={styles.company}>@ GrowthZ AI &middot; 2024 - Present</div>
              <p className={styles.roleDesc}>
                Leading backend architecture and AI integration. Designed and implemented core
                microservices, reduced latency by 40%, and integrated advanced LLM workflows using
                LangChain and LangGraph.
              </p>
              <div className={styles.pills}>
                <span className={styles.pill}>NestJS</span>
                <span className={styles.pill}>AWS</span>
                <span className={styles.pill}>Python</span>
                <span className={styles.pill}>LangChain</span>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <h3 className={styles.roleTitle}>Software Engineer</h3>
              <div className={styles.company}>@ TechCorp &middot; 2022 - 2024</div>
              <p className={styles.roleDesc}>
                Developed scalable REST APIs and managed cloud infrastructure using Pulumi.
                Migrated monolithic services to a dockerized microservices architecture.
              </p>
              <div className={styles.pills}>
                <span className={styles.pill}>TypeScript</span>
                <span className={styles.pill}>Docker</span>
                <span className={styles.pill}>PostgreSQL</span>
              </div>
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
          <p>&copy; {new Date().getFullYear()} Srishti. Built with Next.js & Vanilla CSS.</p>
        </footer>
      </main>
    </>
  );
}
