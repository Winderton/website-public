import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from '../components/Header'
import About from "../components/About";
import Youtube from "../components/Youtube";
import Git from "../components/Git";
import env from '../enviroment/env'


export async function getServerSideProps(context) {

  const gitRes = await fetch(`https://api.github.com/users/winderton`);
  const gitData = await gitRes.json();

  const url = env.uri;
  const api_key = env.api_key;
  const channel_id = env.channel_id;

  const ytRes = await fetch(`${url}&id=${channel_id}&key=${api_key}`);
  const ytData = await ytRes.json();

  const result = {gitData, ytData};

  return {
    props: {result} 
  }
}


export default function Home({result}) {

  console.log(result.ytData);
  return (
    <main>
      <Head>
        <title>Winderton</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div>
        <Header></Header>
      </div>
      <div className={styles.about}>
        <About></About>
      </div>

      <div className={styles.git}>
        <Git other={result.gitData}></Git>
      </div>

      <div className={styles.youtube}>
        <Youtube other={result.ytData}/>
      </div>
    </main>
  );
}
