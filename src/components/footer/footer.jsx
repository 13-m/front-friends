import "./style.css";
import Master from "@img/master-icon.png";
import Mir from "@img/mir-icon.png";
import Tinkoff from "@img/tinkoff-icon.png";
import Visa from "@img/visa-icon.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer__container container">
        <div className="left">
          {/* Здесь файлы или ссылки на документы */}
          <a href="#!" className="footer__link">
            Правила клуба
          </a>
          <a href="#!" className="footer__link">
            Договор оферты
          </a>
        </div>
        <div className="right">
          {/* Тоже самое */}
          <a href="#!" className="footer__link">
            Правила продажи товаров
          </a>
          <ul className="footer__list">
            <li className="footer__item">
              <img src={Master} alt="Mastercard карта" />
            </li>
            <li className="footer__item">
              <img src={Mir} alt="Мир карта" />
            </li>
            <li className="footer__item">
              <img src={Tinkoff} alt="Т-Банк карта" />
            </li>
            <li className="footer__item">
              <img src={Visa} alt="Виза карта" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
