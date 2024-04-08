/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./page.module.css";
import {
  airBnBCloneData,
  bankSysData,
  simpleShellData,
} from "../components/Presentation/data";
import Card from "../components/Card/Card";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <Card data={airBnBCloneData} />
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="/AirBnB.png" alt="aribnb" />
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="/bankLogin.png" alt="bank" />
      </div>
      <div className={styles.textContainer}>
        <Card data={bankSysData} />
      </div>
      <div className={styles.textContainer}>
        <Card data={simpleShellData} />
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="/shell.png" alt="shell" />
      </div>
    </div>
  );
};

export default Portfolio;
