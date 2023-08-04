import style from "./Copyright.module.scss";

export const Copyright = () => {
  return (
    <div className={style.copyrightContainer}>
      <div className={style.copyrightWrp}>
        <p className={style.copyright}>
          &#169;2019 Digital Project. Все права защищены.
        </p>
      </div>
    </div>
  );
};
