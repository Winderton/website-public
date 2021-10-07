import styles from '../styles/Footer.module.css'
import SocialFollows from '../components/SocialFoolows'

const Footer = () => {
    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles.header}>
                </div>
                <div className={styles.footerConainer}>
                    <SocialFollows/>
                </div>
                <div className={styles.desc}>
                    <p>По вопросам сотрудничества и другой информации</p>
                </div>
                <div className={styles.rights}>
                    <p> &copy;All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;