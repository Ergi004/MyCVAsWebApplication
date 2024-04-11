/* eslint-disable @next/next/no-img-element */
"use client";
import { SetStateAction, useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import DropDown from "../DropDown/DropDown";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [burger, setBurger] = useState(true);

  const toggleBurger = () => {
    setBurger(!burger);
  };

  const handleClick = (link: SetStateAction<string>) => {
    setActiveLink(link);
  };

  return (
    <header className={styles.nav}>
      <div className={styles.dashboardCont}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src="/logo.png" alt="logo" />
        </div>

        <div
          className={`${styles.linksContainer} ${
            burger === false && styles.containerOpen
          }`}
        >
          <div className={styles.container}>
            <Link
              className={`${styles.links} ${
                activeLink === "/" && styles.active
              }`}
              href="/"
              onClick={() => handleClick("/")}
            >
              Home
            </Link>
            <Link
              className={`${styles.links} ${
                activeLink === "/career" && styles.active
              }`}
              href="/career"
              onClick={() => handleClick("/career")}
            >
              Career
            </Link>
            <Link
              className={`${styles.links} ${
                activeLink === "/hobbies" && styles.active
              }`}
              href="/hobbies"
              onClick={() => handleClick("/hobbies")}
            >
              Hobbies
            </Link>
            <Link
              className={`${styles.links} ${
                activeLink === "/portfolio" && styles.active
              }`}
              href="/portfolio"
              onClick={() => handleClick("/portfolio")}
            >
              Portfolio
            </Link>
          </div>
        </div>
        <div onClick={() => toggleBurger()} className={`${styles.hamburger} ${burger === false && styles.burgerOpen}`}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </div>

    </header>
  );
};

export default Navbar;
