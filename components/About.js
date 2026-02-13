"use client";

import useScrollReveal from "./useScrollReveal";
import styles from "./About.module.css";

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" ref={ref} style={{ padding: "clamp(4rem, 8vw, 7rem) 0" }}>
      <div className="container">
        <p className="section-eyebrow rv">About</p>
        <div className={styles.grid}>
          
          <div className={styles.body}>
            <h3 className={`${styles.title} rv rv-d1`}>A bit about me</h3>
            <p className={`${styles.text} rv rv-d2`}>
              I studied Applied Computer Science at the University of Winnipeg
              and have been working as a developer since. My experience so far
              has been mostly with JavaScript, React, Next.js on the frontend
              and Node.js with PostgreSQL and MongoDB on the backend.
            </p>
            <p className={`${styles.text} rv rv-d3`}>
              At KSVA Tech Solutions, I got to work on production applications,
              build APIs, set up CI/CD pipelines, and integrate tools like
              Google OAuth and OpenAI&apos;s API. I learn fast, and I care about writing
              code that&apos;s easy to read and maintain.
            </p>
            <div className={`${styles.details} rv rv-d4`}>
              <div className={styles.detailItem}>
                <div className={styles.detailLabel}>Location</div>
                <div className={styles.detailValue}>Winnipeg, MB</div>
              </div>
              <div className={styles.detailItem}>
                <div className={styles.detailLabel}>Education</div>
                <div className={styles.detailValue}>BSc Computer Science</div>
              </div>
              <div className={styles.detailItem}>
                <div className={styles.detailLabel}>Status</div>
                <div className={styles.detailValue}>Open to work</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
