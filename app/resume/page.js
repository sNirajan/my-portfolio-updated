"use client";

import React from "react";
import styles from "./resume.module.css";
import Link from "next/link";

export default function Resume() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <section className={styles.header}>
        <h1 className={styles.name}>Nirajan Shah</h1>
        <p className={styles.tagline}>
          Full-Stack Developer / Winnipeg, MB
        </p>
        <div className={styles.headerLinks}>
          <a href="https://github.com/sNirajan" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span className={styles.dot} />
          <a href="https://linkedin.com/in/nirajan-shah" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className={styles.dot} />
          <a href="https://www.nirajanshah.me" target="_blank" rel="noopener noreferrer">nirajanshah.me</a>
        </div>
      </section>

      {/* Skills */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={styles.skillsGrid}>
          <div>
            <p className={styles.skillLabel}>Frontend</p>
            <p className={styles.skillList}>JavaScript (ES6+), React, Next.js, Tailwind CSS, HTML/CSS</p>
          </div>
          <div>
            <p className={styles.skillLabel}>Backend</p>
            <p className={styles.skillList}>Node.js, Express, PostgreSQL, MongoDB, REST APIs, OAuth/JWT</p>
          </div>
          <div>
            <p className={styles.skillLabel}>DevOps</p>
            <p className={styles.skillList}>Docker, GitHub Actions, Vercel, Git</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.expBlock}>
          <div className={styles.expHeader}>
            <div>
              <span className={styles.expRole}>Web Developer</span>
              <span className={styles.expCompany}> at KSVA Tech Solutions</span>
            </div>
            <span className={styles.expDate}>Oct 2024 to Oct 2025</span>
          </div>
          <ul className={styles.expPoints}>
            <li>Built and maintained backend systems using Node.js, integrated with a Next.js frontend</li>
            <li>Designed RESTful APIs and optimized database queries across PostgreSQL and MongoDB</li>
            <li>Integrated Google OAuth2 for secure authentication across applications</li>
            <li>Developed and deployed a chatbot using OpenAI&apos;s API</li>
            <li>Set up CI/CD pipelines with GitHub Actions and Docker, cutting deployment time by around 40%</li>
            <li>Collaborated with the team to ship production-ready features on schedule</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.expBlock}>
          <div className={styles.expHeader}>
            <div>
              <span className={styles.expRole}>BSc Applied Computer Science</span>
              <span className={styles.expCompany}> at University of Winnipeg</span>
            </div>
            <span className={styles.expDate}>Winnipeg, MB</span>
          </div>
        </div>
      </section>

      {/* Back button */}
      <section className={styles.backSection}>
        <Link href="/" className="btn btn-outline">
          Back to Home
        </Link>
      </section>
    </div>
  );
}
