/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Presentation.module.css";
import Card from "../Card/Card";
import { passionsData, welcomeData } from "../Card/data";
const Presentation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <Card data={welcomeData} />
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="/background.png" alt="bg" />
      </div>
      <div className={styles.textContainer}>
        <Card data={passionsData} />
      </div>
    </div>
  );
};

export default Presentation;
