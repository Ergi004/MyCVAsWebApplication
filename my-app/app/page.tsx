import Footer from "./components/Footer/footer";
import Presentation from "./components/Presentation/Presentation";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Presentation />
      <img id="image" src="/background.png" alt="bg" />
    </main>
  );
}
