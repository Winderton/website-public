import Head from "next/head";
import Layout from "../components/Layout";
import Youtube from "../components/Youtube";
import Git from "../components/Git";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Winderton</title>
        <meta name="description" content="web development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.git}>
        <Git></Git>
      </div>

      <div className={styles.youtube}>
        <Youtube />
      </div>
      <Layout/>
    </main>
  );
}
