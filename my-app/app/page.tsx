/* eslint-disable @next/next/no-img-element */
import Presentation from "./components/Presentation/Presentation";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Presentation />
    </main>
  );
}
