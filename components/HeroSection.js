"use client";

import useScrollReveal from "./useScrollReveal";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const ref = useScrollReveal();

  return (
    <section className={styles.hero} ref={ref}>
      <div className={styles.inner}>
        <p className={`${styles.eyebrow} rv`}>Full-Stack Developer</p>
        <h1 className={`${styles.heading} rv rv-d1`}>
          I&apos;m Nirajan Shah.
          <br />
          I build things for <em>the web.</em>
        </h1>
        <p className={`${styles.desc} rv rv-d2`}>
          A developer based in Calgary who enjoys working across the full stack.
          I like building clean, functional applications and I&apos;m always looking
          to learn something new along the way.
        </p>
        <div className={`${styles.actions} rv rv-d3`}>
          <a href="#projects" className="btn btn-fill">
            See my work
          </a>
          <a href="#contact" className="btn btn-outline">
            Say hello
          </a>
        </div>
      </div>
    </section>
  );
}
