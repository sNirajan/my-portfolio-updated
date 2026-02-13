import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Built by{" "}
        <a
          href="https://www.nirajanshah.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nirajan Shah
        </a>
      </p>
    </footer>
  );
}
