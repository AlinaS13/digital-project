// import { NavLink } from "react-router-dom";
import CrossSVG from "../../assets/svg/header/Cross";
import style from "./Menu.module.scss";

const Menu = ({ setIsMenuActive, isMenuActive }) => {
  return (
    <div
      className={`${style.backdrop} ${isMenuActive ? style.active : ""} ${
        style.containerTTTTTTT
      }`}
    >
      <div className={style.navWrapper}>
        <div className={style.crossWrapper}>
          <button
            className={style.cross}
            type="button"
            onClick={() => setIsMenuActive(false)}
          >
            <CrossSVG />
          </button>
        </div>
        <nav>
          <ul className={style.navList}>
            <li className={style.navItem}>
              <a
                onClick={() => setIsMenuActive(false)}
                className={style.navLink}
                href="#hero"
              >
                ГЛАВНАЯ
              </a>
            </li>
            <li className={style.navItem}>
              <a
                href="#about"
                onClick={() => setIsMenuActive(false)}
                className={style.navLink}
              >
                ГАЛЕРЕЯ
              </a>
            </li>
            <li className={style.navItem}>
              <a
                href="#projects"
                onClick={() => setIsMenuActive(false)}
                className={style.navLink}
              >
                ПРОЕКТЫ
              </a>
            </li>
            <li className={style.navItem}>
              <a
                onClick={() => setIsMenuActive(false)}
                className={style.navLink}
                href="#tasks"
              >
                СЕРТИФИКАТЫ
              </a>
            </li>
            <li className={style.navItem}>
              <a
                onClick={() => setIsMenuActive(false)}
                className={style.navLink}
                href="#contact"
              >
                КОНТАКТЫ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
