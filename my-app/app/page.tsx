/* eslint-disable @next/next/no-img-element */
import Card from "./components/Card/Card";
import Presentation from "./components/Presentation/Presentation";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Presentation />
    </main>
  );
}
