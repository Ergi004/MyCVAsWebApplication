/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./page.module.css";

const Hobbies = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Sports</h1>
        <p className={styles.text}>
          In the world of sports, my heart finds its home. From the sound of a
          basketball swishing through the net to the roar of a crowd after a
          winning goal, every moment ignites my passion. Sports aren't just
          games—they are my joy, my inspiration, my love affair. In each match,
          I find camaraderie, resilience, and the sheer thrill of competition.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="/sports.png" alt="sports" />
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="/traveling.png" alt="traveling" />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Traveling</h1>
        <p className={styles.text}>
          In the world of travel, my spirit soars. From the whisper of waves on
          a sandy shore to the chatter of a bustling market, each destination
          fuels my wanderlust. Travel isn't just a hobby; it's my passion, my
          adventure, my love affair with the world. 
        </p>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Gym</h1>
        <p className={styles.text}>
          In the realm of the gym, my dedication thrives. From the clang of
          weights to the rhythm of cardio, each workout ignites my passion for
          fitness. The gym isn't just a place to exercise; it's my sanctuary, my
          challenge, my love affair with self-improvement. With every rep and
          every mile, I push my limits, sculpting not just my body, but my mind
          and spirit.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="/gym.png" alt="gym" />
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

export default Hobbies;
