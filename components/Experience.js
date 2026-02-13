"use client";

import useScrollReveal from "./useScrollReveal";
import styles from "./Experience.module.css";

const experiences = [
  {
    role: "Web Developer",
    company: "KSVA Tech Solutions",
    period: "Oct 2024 to Oct 2025 / Remote",
    points: [
      "Built and maintained backend systems using Node.js, integrated with a Next.js frontend",
      "Designed RESTful APIs and optimized database queries across PostgreSQL and MongoDB",
      "Integrated Google OAuth2 for secure authentication across applications",
      "Developed and deployed a chatbot using OpenAI's API for AI-driven user interactions",
      "Set up CI/CD pipelines with GitHub Actions and Docker, cutting deployment time by around 40%",
      "Worked closely with the team to ship production-ready features on schedule",
    ],
  },
  {
    role: "BSc Applied Computer Science",
    company: "University of Winnipeg",
    period: "Winnipeg, MB",
    points: [
      "Focused on software development, data structures, and algorithms",
      "Built several full-stack projects during coursework and on the side",
    ],
  },
];

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" ref={ref} style={{ padding: "clamp(4rem, 8vw, 7rem) 0" }}>
      <div className="container">
        <p className="section-eyebrow rv">Experience</p>
        <h2 className="section-heading rv rv-d1">Where I&apos;ve worked</h2>

        {experiences.map((exp, i) => (
          <div key={i} className={`${styles.item} rv rv-d${i + 2}`}>
            <div className={styles.top}>
              <div>
                <span className={styles.role}>{exp.role}</span>
                <span className={styles.company}> at {exp.company}</span>
              </div>
              <span className={styles.period}>{exp.period}</span>
            </div>
            <ul className={styles.points}>
              {exp.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
