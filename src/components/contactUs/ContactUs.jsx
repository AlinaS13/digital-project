import style from "./ContactUs.module.scss";
import contact from "../../assets/img/contact/contact.jpg";

import { MainButton } from "../button/MainButton";

export const ContactUs = () => {
  const onFocusHandler = (e) => {
    e.target.nextSibling.style.display = "none";
  };
  const onBlurHandler = (e) => {
    if (e.target.value === "") {
      e.target.nextSibling.style.display = "block";
    }
  };
  return (
    <section className={style.contactUsContainer} id="contact">
      <h2>Связаться с нами</h2>
      <div className={style.contactUsContentWrp}>
        <form className={style.contactUsForm}>
          <label>
            <input
              type="text"
              placeholder="Имя"
              name="name"
              className={style.contactUsFofmInput}
            />
          </label>
          <div className={style.contactUsFieldset}>
            <input
              className={style.contactUsFofmInput}
              type="tel"
              id="number"
              //   placeholder="Номер телефона"
              name="number"
              pattern="[0-9]{3}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onFocus={onFocusHandler}
              onBlur={onBlurHandler}
            />
            <label
              htmlFor="number"
              className={style.contactUsFofmLabel}
              required
            >
              Номер телефона
            </label>
          </div>
          <div className={style.contactUsFieldset}>
            <input
              className={style.contactUsFofmInput}
              type="email"
              name="email"
              id="mail"
              placeholder="E-mail"
              pattern="/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/"
              title="Email must be @"
              required
              onFocus={onFocusHandler}
              onBlur={onBlurHandler}
            />
            <label htmlFor="mail" className={style.contactUsFofmLabel}>
              E-mail
            </label>
          </div>
          <label>
            <input
              className={style.contactUsFofmInput}
              placeholder="Интересующий товар/услуга"
            ></input>
          </label>
          <textarea
            className={style.contactUsFofmInput}
            id="message"
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            required
          ></textarea>
          <label htmlFor="message" className={style.contactUsFofmLabel}>
            Сообщение
          </label>
          <div className={style.checkboxContainer}>
            <label>
              {" "}
              <input
                className={style.checkbox}
                type="checkbox"
                name="privacy"
                id="privacy"
              />
            </label>
            <p className={style.confirmText}>
              Отправляя заявку Вы соглашаетесь с политикой конфиденциальности
            </p>
          </div>

          <MainButton type="submit" disabled name="ОТПРАВИТЬ" />
        </form>
        <img src={contact} alt="man with phone" />
      </div>
    </section>
  );
};
