// import React from "react";

export const Residents = () => {
  return (
    <>
      <div className="residents__wrapp wrapp__title">
        <h2 className="residents__title title">Новые резиденты</h2>
        <a href="#" className="residents__link wrapp-link">
          Смотреть всех
        </a>
      </div>
      <ul
        className="residents__list"
        data-simplebar="init"
        data-simplebar-auto-hide="false"
      >
        <li className="residents__item">
          <a href="cards.html" className="residents__link">
            <div className="img-wrapp">
              <picture className="residents__img">
                <source
                  srcSet="./img/user-img-1.jpg 2x, ./img/user-img-1.jpg 1x"
                  media="(max-width: 600px)"
                />
                <source
                  srcSet="./img/user-img-1.jpg 2x, ./img/user-img-1.jpg 1x"
                  media="(min-width: 601px)"
                />
                <img
                  className="residents__img"
                  src="./img/user-img-1.jpg"
                  alt="Аватарка пользователя"
                />
              </picture>
            </div>
            <p className="residents__subtitle">Дарья Михайлова</p>
            <p className="desc">Санкт-Петербург, Петроградский&nbsp;район</p>
            <p className="info">
              Менеджер по&nbsp;недвижимости, владелец салона красоты
            </p>
          </a>
        </li>
        <li className="residents__item">
          <a href="cards.html" className="residents__link">
            <div className="img-wrapp">
              <picture className="residents__img">
                <source
                  srcSet="./img/user-img-2.jpg 2x, ./img/user-img-2.jpg 1x"
                  media="(max-width: 600px)"
                />
                <source
                  srcSet="./img/user-img-2.jpg 2x, ./img/user-img-2.jpg 1x"
                  media="(min-width: 601px)"
                />
                <img
                  className="residents__img"
                  src="./img/user-img-2.jpg"
                  alt="Аватарка пользователя"
                />
              </picture>
            </div>
            <p className="residents__subtitle">
              Константин Константинопольский
            </p>
            <p className="desc">Москва, Красносельский&nbsp;район</p>
            <p className="info">Руководитель</p>
          </a>
        </li>
        <li className="residents__item">
          <a href="cards.html" className="residents__link">
            <div className="img-wrapp">
              <picture className="residents__img">
                <source
                  srcSet="./img/user-img-3.jpg 2x, ./img/user-img-3.jpg 1x"
                  media="(max-width: 600px)"
                />
                <source
                  srcSet="./img/user-img-3.jpg 2x, ./img/user-img-3.jpg 1x"
                  media="(min-width: 601px)"
                />
                <img
                  className="residents__img"
                  src="./img/user-img-3.jpg"
                  alt="Аватарка пользователя"
                />
              </picture>
            </div>
            <p className="residents__subtitle">Мария Леонтьева</p>
            <p className="desc">Нижний Новгород, Канавинский&nbsp;район</p>
            <p className="info">Инвестор</p>
          </a>
        </li>
        <li className="residents__item">
          <a href="cards.html" className="residents__link">
            <div className="img-wrapp">
              <picture className="residents__img">
                <source
                  srcSet="./img/user-img-6.jpg 2x, ./img/user-img-6.jpg 1x"
                  media="(max-width: 600px)"
                />
                <source
                  srcSet="./img/user-img-6.jpg 2x, ./img/user-img-6.jpg 1x"
                  media="(min-width: 601px)"
                />
                <img
                  className="residents__img"
                  src="./img/user-img-6.jpg"
                  alt="Аватарка пользователя"
                />
              </picture>
            </div>
            <p className="residents__subtitle">Леонид Василевский</p>
            <p className="desc">Новосибирск, Калининский&nbsp;район</p>
            <p className="info">Упраляющий, начальник отдела</p>
          </a>
        </li>
      </ul>
    </>
  );
};
