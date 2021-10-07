import Head from "next/head";
import Layout from "../components/Layout";



export default function Home() {
  return (
    <main>
      <Head>
        <title>Winderton</title>
        <meta name="description" content="web development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div>
        <Header></Header>
      </div>
      <div className={styles.about}>
        <About></About>
      </div>

      <div className={styles.git}>
        <Git ></Git>
      </div>

      <div className={styles.youtube}>
        <Youtube />
      </div>
    </main>
  );
}
