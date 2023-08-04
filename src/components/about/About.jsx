import { MainButton } from "../button/MainButton";
import style from "./About.module.scss";
import firstImg from "../../assets/img/about/img-1.jpg";
import secondImg from "../../assets/img/about/img-2.jpg";
import thirdImg from "../../assets/img/about/img-3.jpg";

export const About = () => {
  return (
    <section className={style.aboutContainer} id="about">
      <div className={style.aboutContant}>
        <div className={style.aboutImgWrp}>
          <img src={firstImg} alt="firstImg" />
          <img src={secondImg} alt="firstImg" />
        </div>
        <img src={thirdImg} alt="firstImg" className={style.aboutCenterImg} />
        <div className={style.aboutTextWrp}>
          {" "}
          <h2>О компании</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <MainButton name="ЧИТАТЬ" />
        </div>
      </div>
    </section>
  );
};
