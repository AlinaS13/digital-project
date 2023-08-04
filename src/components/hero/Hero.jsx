import style from "./Hero.module.scss";
import mainImg from "../../assets/img/main-img.jpg";
import ArrowRight from "../../assets/svg/ArrowRight";
import ArrowLeft from "../../assets/svg/ArrowLeft";
import { MainButton } from "../button/MainButton";

export const Hero = () => {
  return (
    <section className={style.heroContainer} id="hero">
      <div className={style.heroContentFlex}>
        <div>
          <h1 className={style.heroTitle}>
            PROJECT
            <br />
            <span>HOME</span>
          </h1>
          <div className={style.heroBtnWrp}>
            <button type="button">
              <ArrowLeft />
            </button>
            <button type="button">
              <ArrowRight />
            </button>
          </div>
          <div className={style.heroNumbers}>
            <span>01</span>
            <span>/</span>
            <span>02</span>
          </div>
        </div>
        <div className={style.heroImgWrp}>
          <img src={mainImg} alt="mainImg" />
          <MainButton className={style.heroMainBtn} name="ВЗГЛЯНУТЬ" />
        </div>
      </div>
    </section>
  );
};
