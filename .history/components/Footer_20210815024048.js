import styles from "../styles/Footer.module.css";

import {
  faYoutube,
  faInstagram,
  faGithub,
  faPatreon,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.header}></div>
        <div className={styles.footerConainer}>
          <div className={styles.socialContainer}>
            <div className={styles.social}>
              <a href="#">
                <FontAwesomeIcon
                  className={styles.youtube}
                  icon={faYoutube}
                  size="2x"
                />
              </a>
            </div>
            <div className={styles.social}>
              <a href="#">
                <FontAwesomeIcon
                  className={styles.instagram}
                  icon={faInstagram}
                  size="2x"
                />
              </a>
            </div>
            <div className={styles.social}>
              <a href="#">
                <FontAwesomeIcon
                  className={styles.github}
                  icon={faGithub}
                  size="2x"
                />
              </a>
            </div>
            <div className={styles.social}>
              <a href="#">
                <FontAwesomeIcon
                  className={styles.patreon}
                  icon={faPatreon}
                  size="2x"
                />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.desc}>
          <p>По вопросам сотрудничества и другой информации</p>
        </div>
        <div className={styles.rights}>
          <p> &copy;All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
