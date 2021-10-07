import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faGithub,
  faPatreon,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.socialContainer}>
            <div className={styles.social}>
              <a href="https://www.youtube.com/channel/UC4omkhNHsYLagT1o6hnmKQw">
                <FontAwesomeIcon
                  className={styles.youtube}
                  icon={faYoutube}
                  size="2x"
                />
              </a>
            </div>
            <div className={styles.social}>
              <a href="https://instagram.com/winderton">
                <FontAwesomeIcon
                  className={styles.instagram}
                  icon={faInstagram}
                  size="2x"
                />
              </a>
            </div>
            <div className={styles.social}>
              <a href="https://github.com/Winderton">
                <FontAwesomeIcon
                  className={styles.github}
                  icon={faGithub}
                  size="2x"
                />
              </a>
            </div>
            <div className={styles.social}>
              <a href="https://www.patreon.com/winderton">
                <FontAwesomeIcon
                  className={styles.patreon}
                  icon={faPatreon}
                  size="2x"
                />
              </a>
            </div>
          </div>
          <div className={styles.desc}>
            <p>По вопросам сотрудничества и другой информации</p>
          </div>
        </div>
        <div className={styles.rights}>
          <p> &copy;All rights reserved.</p>
        </div>
      </div>
    
  );
};

export default Footer;
