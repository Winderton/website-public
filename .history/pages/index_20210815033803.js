import Head from "next/head";
import Layout from "../components/Layout";
import Youtube from "../components/Youtube";
import Git from "../components/Git";
import styles from "../styles/Home.module.css";

export async function getServerSideProps(context) {

  const res = await fetch(`https://api.github.com/users/winderton`) 
  const data = await res.json()


  return {
    props: {data} // will be passed to the page component as props
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
      
      <Layout/>

      <div>
      <div>
        <h3 className={style.gitHeaderh3}>GITHUB</h3>
      </div>
      <div className={style.gitFootContainer}>
        <div className={style.gitBlock}>
          <h4>Репозитории</h4>
          <div className={style.num}>
            <h3></h3>
          </div>
        </div>
        <div className={style.gitBlock}>
          <h4>Фолловеры</h4>
          <div className={style.num}>
            <h3></h3>
          </div>
        </div>
      </div>
      <div className={style.buttonContainer}>
            <button className={style.myButton}><a href="https://github.com/Winderton">Узнать больше</a></button>
      </div>
    </div>

      <div className={styles.youtube}>
        <Youtube />
      </div>
    </main>
  );
}
