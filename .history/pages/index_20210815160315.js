import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from '../components/Header'
import About from "../components/About";
import Youtube from "../components/Youtube";
import Git from "../components/Git";

export async function getServerSideProps(context) {

  const gitRes = await fetch(`https://api.github.com/users/winderton`);
  const gitData = await gitRes.json();

  const url = env.uri;
  const api_key = env.api_key;
  const channel_id = env.channel_id;
  const apiCall = `${url}&id=${channel_id}&key=${api_key}`;

  const ytRes = await fetch(`https://api.github.com/users/winderton`);
  const ytData = await ytRes.json();

  const result = {gitData, ytData};
  return {
    props: {result} 
  }
}


export default function Home({gitData}) {

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
        <Git other={gitData}></Git>
      </div>

      <div className={styles.youtube}>
        <Youtube />
      </div>
    </main>
  );
}
