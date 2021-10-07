import aboutStyle from "../styles/Home.module.css";
import Link from "next/link";

const About = () => {
  return (
    <div className={aboutStyle.container}>
        <div className={aboutStyle.header}>
          <h1>Кто это?</h1>
          <p>
            Я нашел себя в Computer Science. Когда я был мелким, то не верил что
            смогу заниматься в жизни чем-то подобным, но в 20 лет начал изучать
            программирование, и уже спустя пару лет получил свою первую работу
            на Java. На канале вы найдете мой мыслительный процес через года,
            начиная от теоретических видео, где я делюсь своим опытом изучения
            compscie, вплоть до live-материалов на Java/C++ в tutorial-like
            стиле. Это моя история. Piece.
          </p>

          <div className={aboutStyle.footContainer}>
            <div className={aboutStyle.block}>
              <h5>Технологии</h5>
              <ul>
                <li>C/C++</li>
                <li>Java</li>
              </ul>
            </div>
            <div className={aboutStyle.block}>
              <h5>Проекты</h5>
              <ul>
                <li>
                  <a href="https://github.com/Winderton/xplatform">xplatform</a>
                </li>
                <li><a href="https://github.com/Winderton/website">website</a></li>
                <li>game engine (comming soon...)</li>
              </ul>
            </div>
            <div className={aboutStyle.block}>
              <h5>Контакты</h5>
              <ul>
                <li>
                  <a href="https://instagram.com/winderton">Instagram</a>
                </li>
                <li>
                  <a href="https://patreon.com/winderton">Patreon</a>
                </li>
                <li>Email( comming soon...)</li>
              </ul>
            </div>
          </div>
          <div className={aboutStyle.buttonContainerAbout}>
            <button className={aboutStyle.myButtonAbout}>
              <Link href="/about">Узнать больше</Link>
            </button>
          </div>
        </div>
      </div>
  );
};

export default About;
