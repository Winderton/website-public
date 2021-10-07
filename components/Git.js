import style from "../styles/Git.module.css";

function Git({ other }) {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div>
          <h4>GITHUB</h4>
        </div>
        <div className={style.gitFootContainer}>
          <div className={style.gitBlock}>
            <h5>Репозитории</h5>
            <div className={style.num}>
              <p>{other.public_repos}</p>
            </div>
          </div>
          <div className={style.gitBlock}>
            <h5>Фолловеры</h5>
            <div className={style.num}>
              <p>{other.followers}</p>
            </div>
          </div>
        </div>
       
      </div>
      <div className={style.buttonContainer}>
          <button className={style.myButton}>
            <a href="https://github.com/Winderton">Узнать больше</a>
          </button>
        </div>
    </div>
  );
}

export default Git;
