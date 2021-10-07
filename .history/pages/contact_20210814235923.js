import styles from '../styles/Contact.module.css'



const Contact = () => {
  return <>
    <div className={styles.form-container}>
        <form className={styles.contact-form}>
            <h2>Contact</h2>
            <input type="text" id="name" placeholder="Full Name"></input>
            <input type="email" id="email" placeholder="Email"></input>
            <input type="test" id="subject" placeholder="Subject"></input>
        </form>
    </div>
  </>;
};

export default Contact;
