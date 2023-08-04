import ArrowRight from "../../assets/svg/ArrowRight";
import style from "./MainButton.module.scss";

export const MainButton = (props) => {
  return (
    <button className={style.mainButton}>
      <div className={style.buttonContentWrp}>
        {props.name} <ArrowRight />
      </div>
    </button>
  );
};
