import youtubeStyle from "../styles/Youtube.module.css";
import React, { useState, useEffect } from "react";
import func from '../public/js/rounder.js'



const Youtube = ({other1}) => {

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
            <h4>{other1.items[0].statistics.viewCount}</h4>
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
