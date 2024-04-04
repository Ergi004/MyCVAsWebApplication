import React from "react";
import styles from "./page.module.css";

const Career = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>My Career</h1>
        <p className={styles.text}>
          Embark on a journey through the illustrious career of Ergi, a seasoned
          software engineer whose expertise knows no bounds. From the inception
          of his career, Ergi has been driven by an insatiable curiosity for
          technology and an unwavering commitment to excellence. Throughout his
          career, Ergi has navigated through the ever-evolving landscape of
          software engineering with grace and determination. From mastering
          intricate algorithms to architecting robust systems, Ergi's skills
          have only sharpened with time. But it's not just about the technical
          prowess for Ergi.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="/career.png" alt="bg" />
      </div>
    </div>
  );
};

export default Career;
