import VendingMachine from "./compoments/vending-machine";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Vending machine</h1>
      <VendingMachine />
    </main>
  );
}
