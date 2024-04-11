/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./page.module.css";
import Card from "../components/Card/Card";
import { careerData, dreamsData } from "../components/Card/data";

const Career = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.sections}>
          <div className={styles.imageContainer}>
            <img className={styles.image} src="/career.png" alt="bg" />
          </div>
          <div className={styles.textContainer}>
            <Card data={careerData} />
            {/* <h1 className={styles.heading}>My Career</h1>
            <p className={styles.text}>
              Embark on a journey through the illustrious career of Ergi, a
              seasoned software engineer whose expertise knows no bounds. From
              the inception of his career, Ergi has been driven by an insatiable
              curiosity for technology and an unwavering commitment to
              excellence.
            </p> */}
          </div>
        </div>
        <div className={styles.sections}>
          <div className={styles.textContainer}>
            <Card data={dreamsData} />
            {/* <h1 className={styles.heading}>My Dreams</h1>
            <p className={styles.text}>
              In the tapestry of my aspirations, the thread of success weaves
              through every fiber of my being. Each day is a step towards the
              realization of my dreams, a testament to my unwavering
              determination. Challenges become mere stepping stones,
              opportunities in disguise, as I relentlessly pursue excellence.
            </p> */}
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src="/book.svg" alt="bg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
