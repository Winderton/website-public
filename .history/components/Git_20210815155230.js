import style from "../styles/Home.module.css";

function Git ({other}) {
  
  return (
    <div>
      <div>
        <h3 className={style.gitHeaderh3}>GITHUB</h3>
      </div>
      <div className={style.gitFootContainer}>
        <div className={style.gitBlock}>
          <h4>Репозитории</h4>
          <div className={style.num}>
            <h3>{other.public_repos}</h3>
          </div>
        </div>
        <div className={style.gitBlock}>
          <h4>Фолловеры</h4>
          <div className={style.num}>
            <h3>{other.followers}</h3>
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
