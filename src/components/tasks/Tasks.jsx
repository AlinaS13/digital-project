import style from "./Tasks.module.scss";
import numberOne from "../../assets/img/tasks/number-one.png";
import numberTwo from "../../assets/img/tasks/number-two.png";

export const Tasks = () => {
  return (
    <section className={style.tasksContainer} id="tasks">
      <h2>Основные задачи</h2>
      <div className={style.tasksContantWrp}>
        <div className={style.flexWrp}>
          <img src={numberOne} alt="numberOne" />
          <p>
            Создание комфортных условий и повышение качества обслуживания
            клиентов
          </p>
        </div>

        <div className={style.flexWrp}>
          <img src={numberTwo} alt="numberTwo" />
          <p>
            Постоянно совершенствовать качество предоставляемых услуг путем
            обучения персонала, закупки нового оборудования и усиленной рекламы
            на рынке
          </p>
        </div>
      </div>
    </section>
  );
};
