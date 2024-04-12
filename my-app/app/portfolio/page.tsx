/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./page.module.css";
import {
  airBnBCloneData,
  bankSysData,
  simpleShellData,
} from "../components/Card/data";
import Card from "../components/Card/Card";
import Dropdown from "../components/Dropdown/dropdown";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <a
          className={styles.anchor}
          href="https://github.com/Ergi004/holbertonschool-AirBnB_clone_v4"
        >
          <Card data={airBnBCloneData} />
        </a>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="/AirBnB.png" alt="aribnb" />
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="/bankLogin.png" alt="bank" />
      </div>
      <div className={styles.textContainer}>
        <a className={styles.anchor} href="https://github.com/Ergi004/Bank">
          <Card data={bankSysData} />
        </a>
        
      </div>
      <div className={styles.textContainer}>
        <a
          className={styles.anchor}
          href="https://github.com/romeollangozi/holbertonschool-simple_shell"
        >
          <Card data={simpleShellData} />
        </a>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="/shell.png" alt="shell" />
      </div>
      <Dropdown />
    </div>
  );
};

export default Portfolio;
