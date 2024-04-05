/* eslint-disable @next/next/no-img-element */
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className={styles.nav}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src="/logo.png" alt="logo" />
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.container}>
          <Link className={styles.home} href="/">
            Home
          </Link>
          <Link className={styles.links} href="/career">
            Career
          </Link>
          <Link className={styles.links} href="/hobbies">
            Hobbies
          </Link>
          <Link className={styles.links} href="/portfolio">
            Portfolio
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
