import styles from "../styles/About.module.css";
import Head from "next/head";
import Image from "next/image";

import pack from "../public/backpack.png";

const About = () => {
  return (
    <>
      <Head>
        <title>Ресурсы</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles.header}>
          <h1>WINDERTON</h1>
          <div className={styles.containerImage}>
            <Image className={styles.image} src={pack} alt="img"></Image>
          </div>
          <div className={styles.footContainer}>
            <div className={styles.block}>
              <h5>Компьютер</h5>
              <ul>
                <li>i7 8700k</li>
                <li>GTX 1080</li>
                <li>32GB RAM</li>
                <li>2xSDD 480+120GB</li>
                <li>1TB HARDDRIVE</li>
                <li>Asus mg248q 144hz fhd 24inch</li>
                <li>Dell u2515h 60hz qhd 25inch</li>
                <li>Hyper X allow Brown</li>
                <li>Steel Series</li>
              </ul>
            </div>
            <div className={styles.block}>
              <h5>Съемка. Стрим. Фото.</h5>
              <ul>
                <li>Sony a7ii</li>
                <li>AF 20mm f/1.4</li>
                <li>Cam link Elgato</li>
                <li>Audiotechnica at2050</li>
                <li>Focusrite solo 2</li>
                <li>JBL headset</li>
                <li>iPhone 11 Pro</li>
              </ul>
            </div>
            <div className={styles.block}>
              <h5>ПО</h5>
              <ul>
                <li>Windows 10/OSX</li>
                <li>OBS studio</li>
                <li>Adobe After Effects</li>
                <li>Adobe Premier Pro</li>
                <li>Adobe Photoshop</li>
                <li>Visual Studio</li>
                <li>Visual Assist</li>
                <li>VS Code</li>
              </ul>
            </div>
            <div className={styles.block}>
              <h5>Дизайнер</h5>
              <ul>
                <li>Palm Angels</li>
                <li>Heron Preston</li>
                <li>Raf Simmons</li>
                <li>Balenciaga</li>
                <li>Vans</li>
                <li>Tommy</li>
                <li>Yeezy</li>
                <li>...</li>
              </ul>
            </div>
            <div className={styles.block}>
              <h5>Музыка</h5>
              <ul>
                <li>Rap/hip-hop</li>
                <li>Pop-punk</li>
                <li>lofi</li>
                <li>EDM</li>
                <li></li>
              </ul>
            </div>
          </div>

          <div className={styles.buttonContainerAbout}>
            <button className={styles.myButtonAbout}>
              <a href="/api/show">На сервер</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
