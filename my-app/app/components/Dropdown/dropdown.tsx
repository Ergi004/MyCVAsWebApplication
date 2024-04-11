/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import styles from "./dropdown.module.css";
import { accordings1, accordings2, accordings3 } from "../Card/data";

interface Data {
  id: number;
  subTitle: string;
  text: string;
}

const Dropdown = () => {
  const datas: Data[] = [accordings1, accordings2, accordings3];

  interface DropdownState {
    [key: number]: boolean;
  }

  const [toggleDrop, setToggleDrop] = useState<DropdownState>({});
  const [rotateLogo, setRotateLogo] = useState<DropdownState>({});
  const handleDropDown = (id: number) => {
    setToggleDrop((prevState) => ({ ...prevState, [id]: !prevState[id] }));
    setRotateLogo((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };
  return (
    <div className={styles.content}>
      {datas.map((data) => {
        return (
          <div key={data.id}>
            <div className={styles.dropDowns}>
              <h2
                onClick={() => handleDropDown(data.id)}
                className={styles.topic}
              >
                {data.subTitle}
                <img
                  className={`${styles.logo} ${
                    rotateLogo[data.id] == true && styles.logoActive
                  }`}
                  src="/arrow.svg"
                  alt="arrow"
                />
              </h2>
              <div
                className={`${styles.text} ${
                  toggleDrop[data.id] === true && styles.textActive
                }`}
              >
                <p>{data.text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dropdown;
