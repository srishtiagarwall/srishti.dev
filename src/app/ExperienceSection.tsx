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
      models: [LightGBM, GeminiVision, RAG]
      throughput: "high"

  - name: video-ad-pipeline
    type: object-storage.stream
    properties:
      uploads_per_day: 1000
      ad_accounts: "60+"
      egress_cost_reduction: "60%"

  - name: core-microservices
    type: docker.container
    properties:
      framework: NestJS
      count: 6
      multi_tenant: true

outputs:
  uptime: "99%"
  infra_cost_reduction: "30%"
  audit_time_reduction: "3-4hrs -> <3min"`;

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
            <h3 className={styles.roleTitle}>Founding Engineer &middot; Full Time</h3>
            <div className={styles.company}>@ <a href="https://www.growthz.ai/" target="_blank" rel="noreferrer" className={styles.companyLink}>GrowthZ AI</a> &middot; July 2024 - Present</div>
            <ul className={styles.bulletList}>
              <li>Core contributor to <a href="https://www.growthz.ai/" target="_blank" rel="noreferrer" className={styles.inlineLink}>GrowthZ.ai</a>: an AI platform that unifies ad creative generation, campaign automation, and performance analytics for B2B clients, from system architecture to production deployment.</li>
              <li>Designed scalable REST APIs across 6 microservices powering a multi-tenant campaign automation engine that auto-generates keywords, ad groups, creatives, and extensions; trained and tuned the LightGBM model driving real-time bid optimization.</li>
              <li>Built an LLM-powered ad copy generation pipeline that scrapes Play Store/App Store/website data, extracts sentiment and themes, and generates structured, keyword-researched ad copies with a RAG workflow, embedding brand content with Gemini embeddings and Google Search grounding for context-aware ad group and phrase generation, producing static, animated, and AI-generated video creatives at sub-60s latency.</li>
              <li>Architected an automated video-to-Meta-ad pipeline for one of India&apos;s largest Meta advertisers, processing ~1,000 video uploads/day across 60+ ad accounts. Moved uploads to direct-to-object-storage streaming, cutting cloud egress costs ~60%.</li>
              <li>Maintained AWS infrastructure with Docker and Pulumi (IaC), cutting costs 30% via NAT optimization, resource rightsizing, and scheduled shutdowns, while sustaining 99% uptime.</li>
              <li>Built a performance analytics layer aggregating multi-platform campaign data into a unified marketing dashboard, surfacing real-time performance signals to the marketing team.</li>
              <li>Designed and built Creative Suite, an AI ad-copy-to-creative generator, as sole engineer end-to-end. Adopted by 9 clients within 3 months, opening a new monetization channel. Recognized as Top Performer for 3 consecutive months (140% of quarterly variable).</li>
              <li>Independently built a Google Ads audit service running performance & hygiene checks across account categories, cutting manual audit time from 3-4 hours to under 3 minutes per account, accelerating client onboarding.</li>
            </ul>
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
