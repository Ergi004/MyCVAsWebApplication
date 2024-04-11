/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./page.module.css";
import Card from "../components/Card/Card";
import { gymData, sportsData, travelingData } from "../components/Card/data";

const Hobbies = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <Card data={sportsData} />
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="/sports.png" alt="sports" />
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="/traveling.png" alt="traveling" />
      </div>
      <div className={styles.textContainer}>
        <Card data={travelingData} />
      </div>
      <div className={styles.textContainer}>
        <Card data={gymData} />
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="/gym.png" alt="gym" />
      </div>
    </div>
  );
};

export default Hobbies;
