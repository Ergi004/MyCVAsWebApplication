/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Presentation.module.css";

const Presentation = () => {
  return (
    <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>Welcome to my Portoflio</h1>
          <h1 className={styles.name}>Ergi Lama</h1>
          <p className={styles.text}>
            Meet Ergi, a dedicated junior full stack engineer with a deep
            passion for coding. With boundless enthusiasm, he tackles each
            project, driven by a love for innovation and a commitment to
            excellence.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img className={styles.image} src="/background.png" alt="bg" />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>My Passion</h1>
          <p className={styles.text}>
            Immersed in lines of code, I find my sanctuary, where logic meets
            creativity. Programming isn't just a skill; it's my passion, the art
            of sculpting solutions from the abstract, breathing life into pixels
            and bytes. In each algorithm lies a story waiting to be told, and
            with every bug conquered, a triumph earned. Coding isn't just what I
            do; it's who I am.
          </p>
        </div>
      </div>
  );
};

export default Presentation;
