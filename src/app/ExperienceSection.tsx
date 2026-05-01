"use client";
import { useState } from "react";
import styles from "./ExperienceSection.module.css";
import TiltCard from "./TiltCard";

export default function ExperienceSection() {
  const [viewMode, setViewMode] = useState<"human" | "code">("human");

  const codeSnippet = `name: GrowthZ AI Infrastructure
type: Pulumi (IaC)
resources:
  - name: api-gateway
    type: aws.apigateway
    properties:
      latency: "sub-60s"
      protocols: [HTTP, WebSocket]

  - name: ai-generation-service
    type: aws.lambda
    properties:
      runtime: python3.9
      models: [XGBoost, GeminiVision]
      throughput: "high"

  - name: core-microservices
    type: docker.container
    properties:
      framework: NestJS
      auth: JWT_RBAC
      multi_tenant: true
      incidents_reduced: "95%"

outputs:
  uptime: "99.9%"
  client_onboarding_time_reduction: "60%"`;

  return (
    <div className={styles.container}>
      <div className={styles.toggleWrapper}>
        <button 
          className={`${styles.toggleBtn} ${viewMode === 'human' ? styles.active : ''}`}
          onClick={() => setViewMode('human')}
        >
          Human Readable
        </button>
        <button 
          className={`${styles.toggleBtn} ${viewMode === 'code' ? styles.active : ''}`}
          onClick={() => setViewMode('code')}
        >
          Developer Mode (IaC)
        </button>
      </div>

      {viewMode === "human" ? (
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
      ) : (
        <TiltCard className={styles.codeCard}>
          <div className={styles.codeHeader}>
            <span>infrastructure.yml</span>
            <span>pulumi up</span>
          </div>
          <pre className={styles.codeBlock}>
            <code>{codeSnippet}</code>
          </pre>
        </TiltCard>
      )}
    </div>
  );
}
