import youtubeStyle from "../styles/Youtube.module.css";
import func from "../public/js/rounder.js";

const Youtube = ({ other }) => {
  return (
    <div className={youtubeStyle.container}>
      <div className={youtubeStyle.header}>
        <h3>YOUTUBE</h3>
        <div className={youtubeStyle.youtubeFootContainer}>
          <div className={youtubeStyle.youtubeBlock}>
            <p>Подписчики</p>
            <div className={youtubeStyle.num}>
              <h4>{func(other.items[0].statistics.subscriberCount)}</h4>
            </div>
          </div>
          <div className={youtubeStyle.youtubeBlock}>
            <p>Видео</p>
            <div className={youtubeStyle.num}>
              <h4>{other.items[0].statistics.videoCount}</h4>
            </div>
          </div>
          <div className={youtubeStyle.youtubeBlock}>
            <p>Просмотры</p>
            <div className={youtubeStyle.num}>
              <h4>{func(other.items[0].statistics.viewCount)}</h4>
            </div>
          </div>
        </div>
        <div className={youtubeStyle.buttonContainer}>
          <button className={youtubeStyle.myButton}>
            <a href="https://www.youtube.com/channel/UC4omkhNHsYLagT1o6hnmKQw">
              Узнать больше
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
