import React from "react";
import style from "./Footer.module.scss";
import logoFooter from "../../assets/img/footer-logo.png";
import Location from "../../assets/svg/footer/Location.jsx";
import Mail from "../../assets/svg/footer/Mail.jsx";
import Phone from "../../assets/svg/footer/Phone.jsx";

import { ReactComponent as Facebook } from "../../assets/svg/footer/facebook.svg";
import { ReactComponent as Linkedin } from "../../assets/svg/footer/linkedin.svg";
import { ReactComponent as Twitter } from "../../assets/svg/footer/twitter.svg";
import { ReactComponent as Pinterest } from "../../assets/svg/footer/pinterest.svg";

export const Footer = () => {
  return (
    <footer className={style.footerContainer}>
      <div className={style.footerContentContainer}>
        <a href="/">
          <img className={style.logoFooter} src={logoFooter} alt="logo" />
        </a>
        <nav>
          <h2>Информация</h2>
          <ul className={style.footerNavigation}>
            <li className={style.footerNavigationItem}>
              <a href="#hero">
                <span>ГЛАВНАЯ</span>
              </a>
            </li>
            <li className={style.footerNavigationItem}>
              <a href="#about">
                <span>ГАЛЕРЕЯ</span>
              </a>
            </li>
            <li className={style.footerNavigationItem}>
              <a href="#projects">
                <span>ПРОЕКТЫ</span>
              </a>
            </li>
            <li className={style.footerNavigationItem}>
              <a href="#tasks">
                <span>СЕРТИФИКАТЫ</span>
              </a>
            </li>
            <li className={style.footerNavigationItem}>
              <a href="#contact">
                <span>КОНТАКТЫ</span>
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <h2 className={style.contactTitle}>Контакты</h2>
          <address>
            <ul>
              <li className={style.footerAddressItem}>
                <a
                  href="https://goo.gl/maps/QjPstwddqFYzDhvE9"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className={style.footerAddress}
                >
                  <Location className={style.footerContactIcon} />
                  <p>
                    {" "}
                    100000, Республика Казахстан, <br />
                    г. Караганда, ул. Телевизионная 10
                  </p>
                </a>
              </li>
              <li className={style.footerContactItem}>
                <a href="tel:+380000000000" className={style.footerContacts}>
                  <Phone className={style.footerContactIcon} /> +38 (000) 000 00
                  00
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="mailto:mail@gmail.com"
                  lang="en"
                  className={style.footerContacts}
                >
                  <Mail className={style.footerContactIcon} /> mail@gmail.com
                </a>
              </li>
            </ul>
          </address>
        </div>
        <div>
          <h2>Социальные сети</h2>
          <div className={style.socialBox}>
            <ul className={style.socialList}>
              <li className={style.facebookItem}>
                <a
                  href="https://www.facebook.com"
                  className={style.fasebookLink}
                >
                  <Facebook className={style.facebookIcon} />
                </a>
              </li>

              <li className={style.twitterItem}>
                <a target="_blank" rel="noreferrer" href="https://twitter.com">
                  <Twitter className={style.twitterIcon} />
                </a>
              </li>
              <li className={style.linkedinItem}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/alina-shestopalova/"
                >
                  <Linkedin className={style.linkedinIcon} />
                </a>
              </li>
              <li className={style.pinterestItem}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://ru.pinterest.com/"
                >
                  <Pinterest className={style.pinterestIcon} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
