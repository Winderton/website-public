import styles from '../styles/Home.module.css'


const Header = () => {
  return (
    <header className="banner">
      <div className={styles.mainHeader}>
        <h1 className={styles.title}>WINDERTON</h1>
        <h3 className={styles.description}>
          Я просто изучаю compscie и делаю youtube видики
        </h3>
      </div>
    </header>
  );
};
export default Header