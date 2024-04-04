import React from "react";
import styles from "./page.module.css";

const Hobbies = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Sports</h1>
        <p className={styles.text}>
          Explore the vibrant world of Ergi beyond the keyboard, where his
          passions extend far beyond lines of code. An avid sports enthusiast,
          you'll often find Ergi hitting the field or court, channeling his
          competitive spirit into the game. When he's not immersed in the
          digital realm, Ergi loves nothing more than hanging out with friends,
          savoring moments of laughter and connection.
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
          Explore the vibrant world of Ergi beyond the keyboard, where his
          passions extend far beyond lines of code. An avid sports enthusiast,
          you'll often find Ergi hitting the field or court, channeling his
          competitive spirit into the game. When he's not immersed in the
          digital realm, Ergi loves nothing more than hanging out with friends,
          savoring moments of laughter and connection.
        </p>
      </div>
    </div>
  );
};

export default Hobbies;
