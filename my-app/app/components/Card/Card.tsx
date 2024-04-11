import React from "react";
import styles from "./cards.module.css";
type Card = {
  id: number;
  title?: string;
  subTitle?: string;
  text: string;
};

type Data = {
  data: Card;
};

const Card = async ({ data }: Data) => {
  const { id, title, text, subTitle } = data;
  return (
    <div>
      {title && (
        <h1 className={styles.heading} key={id}>
          {title}
        </h1>
      )}
      {subTitle && <h1 className={styles.subTitle}>{subTitle}</h1>}
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Card;
