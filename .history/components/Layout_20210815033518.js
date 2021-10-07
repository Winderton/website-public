import styles from "../styles/Home.module.css";
import Header from '../components/Header'
import About from "../components/About";
import Youtube from "../components/Youtube";
import Git from "../components/Git";


const Layout = ({data}) => {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className={styles.about}>
        <About></About>
      </div>
    </div>
  );
};

export default Layout;
