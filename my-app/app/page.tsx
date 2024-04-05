/* eslint-disable @next/next/no-img-element */
import Presentation from "./components/Presentation/Presentation";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Presentation />
      <footer className={styles.footer}>
        <div className={styles.iconContainer}>
          <img className={styles.icon} src="/footer-icon.svg" alt="" />
        </div>
        <div className={styles.linksContainer}>
          <a
            className={styles.links}
            href="https://www.linkedin.com/in/ergi-lama-75488a252/"
          >
            Facebook
          </a>
          <a
            className={styles.links}
            href="https://www.linkedin.com/in/ergi-lama-75488a252/"
          >
            LinkedIn
          </a>
          <a
            className={styles.links}
            href="https://www.linkedin.com/in/ergi-lama-75488a252/"
          >
            Twitter
          </a>
        </div>
        div
        <div className={styles.iconContainer}>
          <a href="https://www.linkedin.com/in/ergi-lama-75488a252/">
            <img
              className={styles.socialMediaIcons}
              src="/facebook.svg"
              alt="facebook"
            />
          </a>
          <a href="https://www.linkedin.com/in/ergi-lama-75488a252/">
            <img
              className={styles.socialMediaIcons}
              src="/linkedin.svg"
              alt="linkedin"
            />
          </a>
          <a href="https://www.linkedin.com/in/ergi-lama-75488a252/">
            <img
              className={styles.socialMediaIcons}
              src="/twitter.svg"
              alt="twitter"
            />
          </a>
        </div>
      </footer>
    </main>
  );
}
