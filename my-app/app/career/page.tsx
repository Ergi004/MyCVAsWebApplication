/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./page.module.css";

const Career = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.sections}>
          <div className={styles.imageContainer}>
            <img className={styles.image} src="/career.png" alt="bg" />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.heading}>My Career</h1>
            <p className={styles.text}>
              Embark on a journey through the illustrious career of Ergi, a
              seasoned software engineer whose expertise knows no bounds. From
              the inception of his career, Ergi has been driven by an insatiable
              curiosity for technology and an unwavering commitment to
              excellence. Throughout his career, Ergi has navigated through the
              ever-evolving landscape of software engineering with grace and
              determination.
            </p>
          </div>
        </div>
        <div className={styles.sections}>
          <div className={styles.textContainer}>
            <h1 className={styles.heading}>My Dreams</h1>
            <p className={styles.text}>
              In the tapestry of my aspirations, the thread of success weaves
              through every fiber of my being. Each day is a step towards the
              realization of my dreams, a testament to my unwavering
              determination. Challenges become mere stepping stones,
              opportunities in disguise, as I relentlessly pursue excellence.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src="/book.svg" alt="bg" />
          </div>
        </div>
      </div>
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
        <div className={styles.iconContainer}>
          <img
            className={styles.socialMediaIcons}
            src="/facebook.svg"
            alt="facebook"
          />
          <img
            className={styles.socialMediaIcons}
            src="/linkedin.svg"
            alt="linkedin"
          />
          <img
            className={styles.socialMediaIcons}
            src="/twitter.svg"
            alt="twitter"
          />
        </div>
      </footer>
    </div>
  );
};

export default Career;
