"use client";

import useScrollReveal from "./useScrollReveal";
import styles from "./Projects.module.css";

const projects = [
  {
    num: "01",
    title: "KSVA Tech Solutions Website",
    desc: "A production business site for KSVA Tech Solutions. Frontend hosted on Vercel, backend running on AWS EC2.",
    tags: ["Next.js", "Node.js", "AWS EC2", "Vercel"],
    link: "https://www.ksvatechsolutions.com/",
    linkLabel: "View live",
  },
  {
    num: "02",
    title: "RAG-Based Chatbot",
    desc: "A full-stack project that answers questions from internal company documents using Retrieval-Augmented Generation with LangChain and OpenAI.",
    tags: ["LangChain", "JavaScript", "OpenAI", "RAG"],
    link: "https://github.com/sNirajan/Retrieval-Augmented-Chatbot-with-LangChain-OpenAI",
    linkLabel: "View on GitHub",
  },
  {
    num: "03",
    title: "What-If Investment Simulator",
    desc: "A full-stack TypeScript web app for deterministic investment backtesting based on real historical market data.",
    tags: ["TypeScript", "React", "Node.js", "API"],
    link: "https://github.com/sNirajan/What-if-Simulator",
    linkLabel: "View on GitHub",
  },
  {
    num: "04",
    title: "Insurance Policy Management System",
    desc: "A full-stack application featuring a Laravel REST API and a React, TypeScript dashboard to manage insurance policy lifecycles.",
    tags: ["TypeScript", "React", "Laravel"],
    link: "https://github.com/sNirajan/Policy-Management-API",
    linkLabel: "View on GitHub",
  },
];

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section
      id="projects"
      className="bg-subtle"
      ref={ref}
      style={{ padding: "clamp(4rem, 8vw, 7rem) 0" }}
    >
      <div className="container">
        <p className="section-eyebrow rv">Projects</p>
        <h2 className="section-heading rv rv-d1">Things I&apos;ve built</h2>
        <p className="section-sub rv rv-d2">
          Some projects from work and personal time. I try to build things that
          are useful or teach me something new.
        </p>

        <div className={styles.grid}>
          {projects.map((proj, i) => (
            <div key={proj.num} className={`${styles.card} rv rv-d${i + 1}`}>
              <div className={styles.num}>{proj.num}</div>
              <h3 className={styles.cardTitle}>{proj.title}</h3>
              <p className={styles.cardDesc}>{proj.desc}</p>
              <div className={styles.tags}>
                {proj.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {proj.linkLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
