import style from "../styles/Git.module.css";

function Git ({other}) {
  
  return (
    <div className={style.container}>
      <div>
        <h3 className={style.gitHeaderh3}>GITHUB</h3>
      </div>
      <div className={style.gitFootContainer}>
        <div className={style.gitBlock}>
          <h5>Репозитории</h5>
          <div className={style.num}>
            <p>{other.public_repos}</p>
          </div>
        </div> 
        <div className={style.gitBlock}>
          <h4>Фолловеры</h4>
          <div className={style.num}>
            <p>{other.followers}</p>
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
