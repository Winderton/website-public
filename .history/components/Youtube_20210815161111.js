import youtubeStyle from "../styles/Youtube.module.css";
import React, { useState, useEffect } from "react";
import env from "../enviroment/env.js";
import func from '../public/js/rounder.js'



const Youtube = ({other1}) => {

  const [subscriberCount, setSubscriberCount] = useState("");
  const [viewCount, setViewsCount] = useState("");
  const [videoCount, setVideosCount] = useState("");
  


  useEffect(() => {
    const url = env.uri;
    const api_key = env.api_key;
    const channel_id = env.channel_id;
    const apiCall = `${url}&id=${channel_id}&key=${api_key}`;

    fetch(apiCall).then((result) => result.json()).then((data) => {
        const subs = data.items[0].statistics.subscriberCount;
        const views = data.items[0].statistics.viewCount;
        const videos = data.items[0].statistics.videoCount;
        setSubscriberCount(func(subs, 1));
        setViewsCount(func(views, 1));
        setVideosCount(videos);
      });
  });

  return (
    <>
      <div className={youtubeStyle.header}>
        <h3 className={youtubeStyle.youtubeHeaderh3}>YOUTUBE</h3>
      </div>
      <div className={youtubeStyle.youtubeFootContainer}>
        <div className={youtubeStyle.youtubeBlock}>
          <p>Подписчики</p>
          <div className={youtubeStyle.num}>
              <h4>{other1.items[0].statistics.subscriberCount}</h4>
          </div>
        </div>
        <div className={youtubeStyle.youtubeBlock}>
          <p>Видео</p>
          <div className={youtubeStyle.num}>
            <h4>{other1.items[0].statistics.videoCount}</h4>
          </div>
        </div>
        <div className={youtubeStyle.youtubeBlock}>
          <p>Просмотры</p>
          <div className={youtubeStyle.num}>
            <h4>{viewCount}</h4>
          </div>
        </div>
      </div>
      <div className={youtubeStyle.buttonContainer}>
        <button className={youtubeStyle.myButton}>
          <a href="https://www.youtube.com/channel/UC4omkhNHsYLagT1o6hnmKQw">Узнать больше</a>
        </button>
      </div>
    </>
  );
};

export default Youtube;
