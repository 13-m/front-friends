import { News } from "@pageComponents/main/news/News";
import { Residents } from "@pageComponents/main/residents/Residents";
import { News } from "@pageComponents/main/news/News";
import View from "@svg/view-icon";
import User from "@svg/user-icon";
import Calendar from "@svg/calendar-icon";
import Microphone from "@svg/microphone-icon";
import Adv from "@svg/adv-icon";
// import Like from "@svg/like-icon";
// import Bookmarks from "@svg/bookmarks-icon";
import "./style.css";
const Main = () => {
  return (
    <main>
      <section id="news" className="news">
        <div className="news__container container">
          <News />
        </div>
      </section>
      <section id="residents" className="residents">
        <div className="residents__container container">
          <Residents />
        </div>
      </section>
      <section id="article" className="article">
        <div className="article__container container">
          <div className="article__wrapp wrapp__title">
            <h2 className="article__title title">Свежие статьи</h2>
            <a href="#" className="article__link wrapp-link">
              Читать все<span>Все</span>
            </a>
          </div>
          <ul className="article__list card-list">
            <li className="article__card-item card-item">
              <span className="article__span-teg span-teg">Недвижимость</span>
              <div className="article__body">
                <h3 className="article__subtitle subtitle">
                  Какая она&nbsp;&mdash; аренда помещения под магазин в центре
                  Москвы
                </h3>
                <p className="article__name">
                  <User />
                  Константинопольская
                </p>
                <div className="article__info-body info-stat">
                  <p className="article__date">11&nbsp;ноября 2024</p>
                  <span className="view">
                    <View />
                    512
                  </span>
                  {/* <span className="like">132</span
                ><span className="bookmark">5</span>  */}
                </div>
              </div>
            </li>
            <li className="article__card-item card-item">
              <span className="article__span-teg span-teg">
                Кафе и&nbsp;рестораны
              </span>
              <div className="article__body">
                <h3 className="article__subtitle subtitle">
                  Как добиться порядка в офисе
                </h3>
                <p className="article__name">
                  <User />
                  Южный
                </p>
                <div className="article__info-body info-stat">
                  <p className="article__date">11&nbsp;ноября 2024</p>
                  <span className="view">
                    <View />
                    512
                  </span>
                  {/* <span className="like">132</span
                ><span className="bookmark">5</span>  */}
                </div>
              </div>
            </li>
            <li className="article__card-item card-item">
              <span className="article__span-teg span-teg">Успех</span>
              <div className="article__body">
                <h3 className="article__subtitle subtitle">
                  Научиться учету времени всего за&nbsp;неделю&nbsp;&mdash;
                  легко!
                </h3>
                <p className="article__name">
                  <User />
                  Ушакова
                </p>
                <div className="article__info-body info-stat">
                  <p className="article__date">11&nbsp;ноября 2024</p>
                  <span className="view">
                    <View />
                    512
                  </span>
                  {/* <span className="like">132</span
                ><span className="bookmark">5</span>  */}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section id="event" className="event">
        <div className="event__container container">
          <div className="event__wrapp wrapp__title">
            <h2 className="event__title title">
              Мероприятия на&nbsp;этой неделе
            </h2>
            <a href="#" className="event__link wrapp-link">
              Смотреть все
            </a>
          </div>
          <div className="event__body">
            <div className="event__main-card">
              <div className="left">
                {/* <div className="wrapp-mobile"> 
              <div className="event__info">
                <p className="event__date">
<Calendar />
                  9&nbsp;апреля в&nbsp;19:00
                </p>
                <p className="event__name">
<Microphone />
                Леонид Макеев
                </p>
              </div>
              <h3 className="event__slogan">
                KODE Waves: технологии, которые волнуют всех
              </h3>
              <button className="event__btn">
<Adv />
                Присоединиться
              </button>
               </div> */}
              </div>
              <ul className="event__list right">
                <li className="event__item">
                  <picture className="event__img">
                    <source
                      srcSet="./img/user-img-1.jpg 2x, ./img/user-img-1.jpg 1x"
                      media="(max-width: 600px)"
                    />
                    <source
                      srcSet="./img/user-img-1.jpg 2x, ./img/user-img-1.jpg 1x"
                      media="(min-width: 601px)"
                    />
                    <img
                      className="event__img"
                      src="./img/user-img-1.jpg"
                      alt="Аватарка пользователя"
                    />
                  </picture>
                </li>
                <li className="event__item">
                  <picture className="event__img">
                    <source
                      srcSet="./img/user-img-2.jpg 2x, ./img/user-img-2.jpg 1x"
                      media="(max-width: 600px)"
                    />
                    <source
                      srcSet="./img/user-img-2.jpg 2x, ./img/user-img-2.jpg 1x"
                      media="(min-width: 601px)"
                    />
                    <img
                      className="event__img"
                      src="./img/user-img-2.jpg"
                      alt="Аватарка пользователя"
                    />
                  </picture>
                </li>
                <li className="event__item">
                  <picture className="event__img">
                    <source
                      srcSet="./img/user-img-3.jpg 2x, ./img/user-img-3.jpg 1x"
                      media="(max-width: 600px)"
                    />
                    <source
                      srcSet="./img/user-img-3.jpg 2x, ./img/user-img-3.jpg 1x"
                      media="(min-width: 601px)"
                    />
                    <img
                      className="event__img"
                      src="./img/user-img-3.jpg"
                      alt="Аватарка пользователя"
                    />
                  </picture>
                </li>
                <li className="event__item">+154</li>
              </ul>
            </div>
            <ul className="event__wrapp-list">
              <li className="event__card">
                <div className="event__card-body">
                  <div className="event__info">
                    <p className="event__date">
                      <Calendar />
                      9&nbsp;апреля в&nbsp;19:00
                    </p>
                    <p className="event__name">
                      <Microphone />
                      Леонид Макеев
                    </p>
                  </div>
                  <div className="event__wrapp">
                    <button className="event__btn">
                      <Adv />
                      Присоединиться
                    </button>
                    <ul className="event__list right">
                      <li className="event__item">
                        <picture className="event__img">
                          <source
                            srcSet="
                            ./img/user-img-1.jpg 2x,
                            ./img/user-img-1.jpg 1x
                          "
                            media="(max-width: 600px)"
                          />
                          <source
                            srcSet="
                            ./img/user-img-1.jpg 2x,
                            ./img/user-img-1.jpg 1x
                          "
                            media="(min-width: 601px)"
                          />
                          <img
                            className="event__img"
                            src="./img/user-img-1.jpg"
                            alt="Аватарка пользователя"
                          />
                        </picture>
                      </li>
                      <li className="event__item">
                        <picture className="event__img">
                          <source
                            srcSet="
                            ./img/user-img-2.jpg 2x,
                            ./img/user-img-2.jpg 1x
                          "
                            media="(max-width: 600px)"
                          />
                          <source
                            srcSet="
                            ./img/user-img-2.jpg 2x,
                            ./img/user-img-2.jpg 1x
                          "
                            media="(min-width: 601px)"
                          />
                          <img
                            className="event__img"
                            src="./img/user-img-2.jpg"
                            alt="Аватарка пользователя"
                          />
                        </picture>
                      </li>
                      <li className="event__item">
                        <picture className="event__img">
                          <source
                            srcSet="
                            ./img/user-img-3.jpg 2x,
                            ./img/user-img-3.jpg 1x
                          "
                            media="(max-width: 600px)"
                          />
                          <source
                            srcSet="
                            ./img/user-img-3.jpg 2x,
                            ./img/user-img-3.jpg 1x
                          "
                            media="(min-width: 601px)"
                          />
                          <img
                            className="event__img"
                            src="./img/user-img-3.jpg"
                            alt="Аватарка пользователя"
                          />
                        </picture>
                      </li>
                      <li className="event__item">+154</li>
                    </ul>
                  </div>
                </div>
                <h3 className="event__heading">
                  Основы архитектуры и&nbsp;интеграции информационных систем
                </h3>
              </li>
              <li className="event__card">
                <div className="event__card-body">
                  <div className="event__info">
                    <p className="event__date">
                      <Calendar />
                      9&nbsp;апреля в&nbsp;19:00
                    </p>
                    <p className="event__name">
                      <Microphone />
                      Леонид Макеев
                    </p>
                  </div>
                  <div className="event__wrapp">
                    <button className="event__btn">
                      <Adv />
                      Присоединиться
                    </button>
                    <ul className="event__list right">
                      <li className="event__item">
                        <picture className="event__img">
                          <source
                            srcSet="
                            ./img/user-img-1.jpg 2x,
                            ./img/user-img-1.jpg 1x
                          "
                            media="(max-width: 600px)"
                          />
                          <source
                            srcSet="
                            ./img/user-img-1.jpg 2x,
                            ./img/user-img-1.jpg 1x
                          "
                            media="(min-width: 601px)"
                          />
                          <img
                            className="event__img"
                            src="./img/user-img-1.jpg"
                            alt="Аватарка пользователя"
                          />
                        </picture>
                      </li>
                      <li className="event__item">
                        <picture className="event__img">
                          <source
                            srcSet="
                            ./img/user-img-2.jpg 2x,
                            ./img/user-img-2.jpg 1x
                          "
                            media="(max-width: 600px)"
                          />
                          <source
                            srcSet="
                            ./img/user-img-2.jpg 2x,
                            ./img/user-img-2.jpg 1x
                          "
                            media="(min-width: 601px)"
                          />
                          <img
                            className="event__img"
                            src="./img/user-img-2.jpg"
                            alt="Аватарка пользователя"
                          />
                        </picture>
                      </li>
                      <li className="event__item">
                        <picture className="event__img">
                          <source
                            srcSet="
                            ./img/user-img-3.jpg 2x,
                            ./img/user-img-3.jpg 1x
                          "
                            media="(max-width: 600px)"
                          />
                          <source
                            srcSet="
                            ./img/user-img-3.jpg 2x,
                            ./img/user-img-3.jpg 1x
                          "
                            media="(min-width: 601px)"
                          />
                          <img
                            className="event__img"
                            src="./img/user-img-3.jpg"
                            alt="Аватарка пользователя"
                          />
                        </picture>
                      </li>
                      <li className="event__item">+154</li>
                    </ul>
                  </div>
                </div>
                <h3 className="event__heading">
                  Анализ &amp;&nbsp;Управление в&nbsp;ИТ-проектах 2024
                </h3>
              </li>
            </ul>
          </div>
          <ul
            className="event__list-molile"
            data-simplebar="init"
            data-simplebar-auto-hide="false"
          >
            <li className="event__item-mobile">
              <div className="event__body-mobile">
                <div className="event__info">
                  <p className="event__date">
                    <Calendar />
                    9&nbsp;апреля в&nbsp;19:00
                  </p>
                  <p className="event__name">
                    <Microphone />
                    Леонид Макеев
                  </p>
                </div>
                <div className="event__wrapp-mobile">
                  <button className="event__btn">
                    <Adv />
                    Присоединиться
                  </button>
                  <ul className="event__list">
                    <li className="event__item">+154</li>
                  </ul>
                </div>
              </div>
              <h3 className="event__subtitle">
                KODE Waves: технологии, которые волнуют всех
              </h3>
            </li>
            <li className="event__item-mobile">
              <div className="event__body-mobile">
                <div className="event__info">
                  <p className="event__date">
                    <Calendar />
                    9&nbsp;апреля в&nbsp;19:00
                  </p>
                  <p className="event__name">
                    <Microphone />
                    Леонид Макеев
                  </p>
                </div>
                <div className="event__wrapp-mobile">
                  <button className="event__btn">
                    <Adv />
                    Присоединиться
                  </button>
                  <ul className="event__list">
                    <li className="event__item">+154</li>
                  </ul>
                </div>
              </div>
              <h3 className="event__subtitle">
                Основы архитектуры и&nbsp;интеграции информационных систем
              </h3>
            </li>
            <li className="event__item-mobile">
              <div className="event__body-mobile">
                <div className="event__info">
                  <p className="event__date">
                    <Calendar />
                    9&nbsp;апреля в&nbsp;19:00
                  </p>
                  <p className="event__name">
                    <Microphone />
                    Леонид Макеев
                  </p>
                </div>
                <div className="event__wrapp-mobile">
                  <button className="event__btn">
                    <Adv />
                    Присоединиться
                  </button>
                  <ul className="event__list">
                    <li className="event__item">+154</li>
                  </ul>
                </div>
              </div>
              <h3 className="event__subtitle">
                Анализ &amp;&nbsp;Управление в&nbsp;ИТ-проектах 2024
              </h3>
            </li>
          </ul>
        </div>
      </section>
      <section id="video" className="video">
        <div className="video__container container">
          <div className="video__wrapp wrapp__title">
            <h2 className="video__title title">Новые видео</h2>
            <a href="#" className="video__link link wrapp-link">
              Смотреть все<span>Все</span>
            </a>
          </div>
          <ul className="video__list card-list">
            <li className="video__card-item card-item">
              <span className="video__span-teg span-teg">Недвижимость</span>
              {/* <video className="video__video" src="#"></video>  */}
              {/* заглушка в виде картинки  */}
              <div className="video__video"></div>
              <div className="video__body">
                <h3 className="video__subtitle subtitle">
                  Какая она&nbsp;&mdash; аренда помещения под магазин
                  в&nbsp;центре Москвы
                </h3>
                <p className="video__name">
                  <User />
                  Константинопольская
                </p>
                <div className="video__info-body info-stat">
                  <p className="video__date">11&nbsp;ноября 2024</p>
                  <span className="view">
                    <View />
                    512
                  </span>
                  {/* <span className="like">132</span
                ><span className="bookmark">5</span>  */}
                </div>
              </div>
            </li>
            <li className="video__card-item card-item">
              <span className="video__span-teg span-teg">
                Кафе и&nbsp;рестораны
              </span>
              {/* <video className="video__video" src="#"></video>  */}
              {/* заглушка в виде картинки  */}
              <div className="video__video"></div>
              <div className="video__body">
                <h3 className="video__subtitle subtitle">
                  Как добиться порядка в&nbsp;офисе
                </h3>
                <p className="video__name">
                  <User />
                  Константинопольская
                </p>
                <div className="video__info-body info-stat">
                  <p className="video__date">11&nbsp;ноября 2024</p>
                  <span className="view">
                    <View />
                    512
                  </span>
                  {/* <span className="like">132</span
                ><span className="bookmark">5</span>  */}
                </div>
              </div>
            </li>
            <li className="video__card-item card-item">
              <span className="video__span-teg span-teg">Успех</span>
              {/* <video className="video__video" src="#"></video>  */}
              {/* заглушка в виде картинки */}
              <div className="video__video"></div>
              <div className="video__body">
                <h3 className="video__subtitle subtitle">
                  Научиться учету времени всего за&nbsp;неделю&nbsp;&mdash;
                  легко!
                </h3>
                <p className="video__name">
                  <User />
                  Константинопольская
                </p>
                <div className="video__info-body info-stat">
                  <p className="video__date">11&nbsp;ноября 2024</p>
                  <span className="view">
                    <View />
                    512
                  </span>
                  {/* <span className="like">132</span
                ><span className="bookmark">5</span> */}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Main;
