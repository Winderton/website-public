import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from '../components/Header'
import About from "../components/About";
import Youtube from "../components/Youtube";
import Git from "../components/Git";

export async function getServerSideProps(context) {

  const res = await fetch(`https://api.github.com/users/winderton`)
  const data = await res.json()

  return {
    props: {data} 
  }
}


export default function Home({data}) {

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
        <Git other={data}></Git>
      </div>

      <div className={styles.youtube}>
        <Youtube />
      </div>
    </main>
  );
}
