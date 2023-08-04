import style from "./Projects.module.scss";
import buildingOne from "../../assets/img/projects/building-1.jpg";
import buildingTwo from "../../assets/img/projects/building-2.jpg";
import buildingThree from "../../assets/img/projects/building-3.jpg";
import buildingFour from "../../assets/img/projects/building-4.jpg";
import buildingFive from "../../assets/img/projects/building-5.jpg";
import { MainButton } from "../button/MainButton";
import ArrowRight from "../../assets/svg/ArrowRight";

export const Projects = () => {
  return (
    <section className={style.projectsContainer} id="projects">
      <h2>Наши проекты</h2>
      <ul className={style.projectsImgWrp}>
        <li className={style.projectsElement}>
          <a href="#">
            <img
              src={buildingOne}
              alt="buildingOne"
              className={style.projectsFirstImg}
            />
            <div className={style.projectsOverlay}>
              <h3 className={style.projectsTitle}>ДОСУГОВЫЙ ЦЕНТР</h3>
              <button className={style.projectsTextBtn}>
                <p>ПОДРОБНЕЕ</p>
                <ArrowRight />
              </button>
            </div>
          </a>
        </li>
        <li className={style.projectsElement}>
          <a href="#">
            <img
              src={buildingTwo}
              alt="buildingTwo"
              className={style.projectsSecondImg}
            />
            <div className={style.projectsOverlay}>
              <h3 className={style.projectsTitle}>Lorem</h3>
              <button className={style.projectsTextBtn}>
                <p>ПОДРОБНЕЕ</p>
                <ArrowRight />
              </button>
            </div>
          </a>
        </li>
        <li className={style.projectsElement}>
          <a href="#">
            <img
              src={buildingThree}
              alt=" buildingThree"
              className={style.projectsThirdImg}
            />
            <div className={style.projectsOverlay}>
              <h3 className={style.projectsTitle}>Lor</h3>
              <button className={style.projectsTextBtn}>
                <p>ПОДРОБНЕЕ</p>
                <ArrowRight />
              </button>
            </div>
          </a>
        </li>
        <li className={style.projectsElement}>
          <a href="#">
            <img
              src={buildingFour}
              alt="buildingFour"
              className={style.projectsFourImg}
            />
            <div className={style.projectsOverlay}>
              <h3 className={style.projectsTitle}>Lorem</h3>
              <button className={style.projectsTextBtn}>
                <p>ПОДРОБНЕЕ</p>
                <ArrowRight />
              </button>
            </div>
          </a>
        </li>
        <li className={style.projectsElement}>
          <a href="#">
            <img
              src={buildingFive}
              alt="buildingFive"
              className={style.projectsFiveImg}
            />
            <div className={style.projectsOverlay}>
              <h3 className={style.projectsTitle}>Lorem</h3>
              <button className={style.projectsTextBtn}>
                <p>ПОДРОБНЕЕ</p>
                <ArrowRight />
              </button>
            </div>
          </a>
        </li>
      </ul>
      <div className={style.projectsBtnWrp}>
        {" "}
        <MainButton name="ВСЕ ПРОЕКТЫ" />
      </div>
    </section>
  );
};
