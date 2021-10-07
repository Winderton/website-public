import youtubeStyle from "../styles/Youtube.module.css";
import React, { useState, useEffect } from "react";
import config from "../enviroment/env.js";
import func from '../public/js/rounder.js'



const Youtube = ({arr}) => {
  const [subscriberCount, setSubscriberCount] = useState("");
  const [viewCount, setViewsCount] = useState("");
  const [videoCount, setVideosCount] = useState("");
  


  useEffect(() => {
    const api_key = config.api_key;
    const channel_id = config.channel_id;
    const apiCall = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channel_id}&key=${process.env.API_KEY}`;

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
              <h4>{subscriberCount}</h4>
          </div>
        </div>
        <div className={youtubeStyle.youtubeBlock}>
          <p>Видео</p>
          <div className={youtubeStyle.num}>
            <h4>{videoCount}</h4>
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
