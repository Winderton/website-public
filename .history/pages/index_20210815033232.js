import Head from "next/head";
import Layout from "../components/Layout";



export default function Home({data}) {
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
