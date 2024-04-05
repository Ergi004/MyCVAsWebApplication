/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./page.module.css";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>AirBnB Clone</h1>
        <p className={styles.text}>
          Explore the vibrant world of Ergi beyond the keyboard, where his
          passions extend far beyond lines of code. An avid sports enthusiast,
          you will often find Ergi hitting the field or court, channeling his
          competitive spirit into the game. When he's not immersed in the
          digital realm, Ergi loves nothing more than hanging out with friends,
          savoring moments of laughter and connection.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="/AirBnB.png" alt="aribnb" />
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="/bankLogin.png" alt="bank" />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Banking System</h1>
        <p className={styles.text}>
          Crafted using HTML, CSS, and Flask, our AirBnB website clone project
          offers a sleek and user-friendly platform for browsing and booking
          accommodations. Featuring dynamic search functionalities and
          responsive design, it provides an immersive experience for travelers
          and hosts alike.
        </p>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Simple Shell</h1>
        <p className={styles.text}>
          Developed as a Simple Shell clone project, this minimalist
          command-line interface offers basic functionalities similar to
          traditional shells. Written in C, it provides users with essential
          commands for navigating directories, executing programs, and managing
          files efficiently.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="/shell.png" alt="shell" />
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

export default Portfolio;
