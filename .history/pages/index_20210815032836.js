import Head from "next/head";
import Layout from "../components/Layout";

export async function getServerSideProps(context) {

  const res = await fetch(`https://api.github.com/users/winderton`) 
  const data = await res.json()

  console.log("hello");

  return {
    props: {data} // will be passed to the page component as props
  } 
}

export default function Home(data) {
  console.log({data.followers});
  return (
    <main>
      <Head>
        <title>Winderton</title>
        <meta name="description" content="web development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout data={data}/>
    </main>
  );
}
