import { useEffect, useState } from "react";
import style from "./Header.module.scss";
import logo from "../../assets/img/logo.png";
import logoText from "../../assets/img/logo-text.png";
import BurgerSVG from "../../assets/svg/header/Burger";
import Dropdown from "./Dropdown";
import Menu from "./Menu";

export const Header = () => {
  const [currentHash, setCurrentHash] = useState("#hero");
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  useEffect(() => {
    window.addEventListener("hashchange", () => {
      setCurrentHash(window.location.hash);
    });
  });

  return (
    <header className={style.headerContainer}>
      <a href="/digital-project">
        <img className={style.logo} src={logo} />
        <img className={style.logoText} src={logoText} />
      </a>
      <nav>
        <ul className={style.headerNavigation}>
          <li>
            <a
              href="#hero"
              className={currentHash === "#hero" ? style.active : ""}
            >
              <span>ГЛАВНАЯ</span>
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={currentHash === "#about" ? style.active : ""}
            >
              <span>ГАЛЕРЕЯ</span>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={currentHash === "#projects" ? style.active : ""}
            >
              <span>ПРОЕКТЫ</span>
            </a>
          </li>
          <li>
            <a
              href="#tasks"
              className={currentHash === "#tasks" ? style.active : ""}
            >
              <span>СЕРТИФИКАТЫ</span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={currentHash === "#contact" ? style.active : ""}
            >
              <span>КОНТАКТЫ</span>
            </a>
          </li>
        </ul>
      </nav>

      <Dropdown
        isDropdownActive={isDropdownActive}
        setIsDropdownActive={setIsDropdownActive}
      />
      <button
        type="button"
        className={style.burgerMenuBtn}
        onClick={() => setIsMenuActive(true)}
      >
        <BurgerSVG />
      </button>
      <Menu setIsMenuActive={setIsMenuActive} isMenuActive={isMenuActive} />
    </header>
  );
};
