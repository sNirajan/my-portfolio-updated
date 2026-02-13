"use client";

import useScrollReveal from "./useScrollReveal";
import styles from "./Skills.module.css";

const skillData = [
  {
    category: "Frontend",
    items: ["JavaScript (ES6+)", "React", "Next.js", "Tailwind CSS", "HTML / CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "OAuth / JWT"],
  },
  {
    category: "DevOps and Tools",
    items: ["Docker", "GitHub Actions", "Vercel", "Git", "OpenAI API"],
  },
];

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="bg-subtle" ref={ref} style={{ padding: "clamp(4rem, 8vw, 7rem) 0" }}>
      <div className="container">
        <p className="section-eyebrow rv">Skills</p>
        <h2 className="section-heading rv rv-d1">What I work with</h2>
        <p className="section-sub rv rv-d2">
          The tools and technologies I&apos;ve used in projects and at work.
        </p>

        {skillData.map((group, i) => (
          <div key={group.category}>
            <p className={`${styles.categoryLabel} rv`}>{group.category}</p>
            <div className={`${styles.row} rv rv-d1`}>
              {group.items.map((skill) => (
                <span key={skill} className={styles.chip}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
