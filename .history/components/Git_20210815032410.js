import style from "../styles/Home.module.css";

import React, { useState, useEffect } from "react";






function Git ({data}) {
   

/*
  const [followers, setFollowers] = useState("");
  const [repos, setRepos] = useState("");


  useEffect(() => {
    fetch("https://api.github.com/users/winderton").then((res) => res.json()).then((data) => {
        setData(data);
      });
  }, []);

  const setData = ({ followers, public_repos }) => {
    setFollowers(followers);
    setRepos(public_repos);
  };
*/
  return (
    <div>
      <div>
        <h3 className={style.gitHeaderh3}>GITHUB</h3>
      </div>
      <div className={style.gitFootContainer}>
        <div className={style.gitBlock}>
          <h4>Репозитории</h4>
          <div className={style.num}>
            <h3>{}</h3>
          </div>
        </div>
        <div className={style.gitBlock}>
          <h4>Фолловеры</h4>
          <div className={style.num}>
            <h3>{data}</h3>
          </div>
        </div>
      </div>
      <div className={style.buttonContainer}>
            <button className={style.myButton}><a href="https://github.com/Winderton">Узнать больше</a></button>
      </div>
    </div>
  );
};

export default Git;
