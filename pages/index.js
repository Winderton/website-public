import Head from "next/head";
import Header from '../components/Header'
import About from "../components/About";
import Youtube from "../components/Youtube";
import Git from "../components/Git";
import env from '../enviroment/env'


const {Octokit} = require("@octokit/rest");

var calculated = false;
var followersCountOld = 0;

export async function getServerSideProps(context) {

  const url = env.uri;
  const api_key = env.api_key;
  const channel_id = env.channel_id;
  
  const oktokit = new Octokit({
    auth: env.github_token
  });
  
  if (!calculated) {
    var followers = 0;
    var followersCountCurrent = 0;
    followersCountOld = 0;
    for (var i = 1; i < 9; ++i) {
        followers = await oktokit.request(`/users/winderton/followers?per_page=100&page=`+i);
        followersCountCurrent += followers.data.length;
    }
    followersCountOld = followersCountCurrent;
    calculated = true;
  }

  setInterval(function() {
    calculated = false;
  }, 1000 * 60 * 60);

  const ytRes = await fetch(`${url}&id=${channel_id}&key=${api_key}`);
  const ytData = await ytRes.json();

  const result = {followersCountOld, ytData};

  return {
    props: {result} 
  }
}


export default function Home({result}) {

  return (
    <main>
      <Head>
        <title>Winderton</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div>
        <Header></Header>
      </div>
      <div>
        <About></About>
      </div>
      <div>
        <Git other={result.followersCountOld}></Git>
      </div>
      <div>
        <Youtube other={result.ytData}></Youtube>
      </div>
    </main>
  );
}
