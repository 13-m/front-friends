// import React from "react";
import { Link } from "react-router-dom";
import View from "@svg/view-icon";

export const News = () => {
  return (
    <>
      <div className="news__wrapp wrapp__title">
        <h2 className="news__title title">Новости</h2>
        <Link to="/news" className="news__link wrapp-link">
          Читать все<span>Все</span>
        </Link>
      </div>
      <ul className="news__list-cards card-list">
        <li className="news__card-item card-item">
          <span className="news__span-teg span-teg">Недвижимость</span>
          <h3 className="news__subtitle subtitle">
            Какая она&nbsp;&mdash; аренда помещения под магазин в&nbsp;центре
            Москвы
          </h3>
          <div className="news__info-body info-stat">
            <p className="news__date">11&nbsp;ноября 2024</p>
            <span className="view">
              <View />
              512
            </span>
            {/* <span className="like">132</span><span className="bookmark">5</span>  */}
          </div>
        </li>
        <li className="news__card-item card-item">
          <span className="news__span-teg span-teg">Кафе и&nbsp;рестораны</span>
          <h3 className="news__subtitle subtitle">
            Как добиться порядка в&nbsp;офисе
          </h3>
          <div className="news__info-body info-stat">
            <p className="news__date">11&nbsp;ноября 2024</p>
            <span className="view">
              <View />3
            </span>
            {/* <span className="like">14</span>  */}
          </div>
        </li>
        <li className="news__card-item card-item">
          <span className="news__span-teg span-teg">Успех</span>
          <h3 className="news__subtitle subtitle">
            Научиться учету времени&nbsp;всего&nbsp;за неделю&nbsp;&mdash;
            легко!
          </h3>
          <div className="news__info-body info-stat">
            <p className="news__date">11&nbsp;ноября 2024</p>
            <span className="view">
              <View />3
            </span>
          </div>
        </li>
      </ul>
    </>
  );
};
