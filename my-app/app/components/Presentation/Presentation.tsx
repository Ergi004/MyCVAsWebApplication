import React from "react";
import styles from "./Presentation.module.css";


const Presentation = () => {
  
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to my Portoflio</h1>
      <h1 className={styles.name}>Ergi Lama</h1>
      <p className={styles.text} >
        Meet Ergi, a dedicated junior full stack engineer with a deep passion
        for coding. With boundless enthusiasm, he tackles each project, driven
        by a love for innovation and a commitment to excellence.
      </p>
    </div>
  );
};

export default Presentation;
