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
          </div>
        </div>
        <div className={styles.sections}>
          <div className={styles.textContainer}>
            <Card data={dreamsData} />
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
