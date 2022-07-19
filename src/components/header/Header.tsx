import { FC, useState } from "react";
import './Header.scss'
import logo from './../../assets/img/header/logo.png'
import phone_icon from './../../assets/img/header/phone.svg'
import location_icon from './../../assets/img/header/location.svg'
import mail_icon from './../../assets/img/header/mail.svg'
import star_icon from './../../assets/img/header/star.svg'
import basket_icon from './../../assets/img/header/basket.svg'
import next_icon from './../../assets/img/header/next.svg'
import { routesPath } from "../../utils/RoutesPath";
import { Link } from "react-router-dom";


let Header:FC = () => {

  const [productCount, setProductCount] = useState(10)

  return (
    <header className='header'>
      <div className="header__up-row">
        <div className="header__up-body">
          <div className="header__navigation">
            <nav className='navigation'>
              <ul className="navigation__list">
                <li className="navigation__item">
                  <Link to={routesPath.PRODUCTS_TYPE_PAGE}>Типы продуктов</Link>
                </li>
                <li className="navigation__item">
                  <Link to={routesPath.PRODUCTS_PAGE}>Продукты</Link>
                </li>
                <li className="navigation__item">
                  <Link to={routesPath.MAIN_PAGE}>Товары</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__contacts">
            <div className="contacts">
              <div className="contacts__phone">
                <img src={phone_icon} alt=""/>
                <span>+7 (499) 380-78-90</span>
              </div>
              <div className="contacts__location">
                <img src={location_icon} alt=""/>
                <span className="contacts__dropdown"> Москва </span>
              </div>
              <div className="contacts__email">
                <img src={mail_icon} alt=""/>
                <span>info@bastion.pro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header__down-row">
        <div className="header__down-body">
          <div className="ui-panel">
            <div className="ui-panel__logo">
              <Link to={routesPath.MAIN_PAGE}>
                <img src={logo} alt=""/>
              </Link>
              <p>Производитель металлических изделий №1</p>
            </div>
            <button className="ui-panel__catalog-button"> Каталог </button>
            <form className="ui-panel__input-container ">
              <input 
                type="text"
                className="ui-panel__input-search input"
                placeholder='Поиск по названию...'
              />
              <button
                type="submit"
                className="ui-panel__input-button"
              />
            </form>
            <div className="ui-panel__favorites">
              <img src={star_icon} alt=""/>
              <span> Избранное </span>
            </div>
            <Link to={routesPath.BASKET_PAGE} className="ui-panel__basket">
            <img src={basket_icon} alt=""/>
              {productCount? 
                <span className="ui-panel__basket-count"> {productCount} </span>
                : ''
              }
              <span> Корзина </span> 
            </Link>
          </div>
        </div>
      </div>
      <div className="header__current-page">
        <div className="header__current-page__wrapper">
          <Link to={routesPath.MAIN_PAGE}>Главная</Link>
          <img src={next_icon} alt="" />
          <Link to={routesPath.MAIN_PAGE}>Интернет-магазин </Link>
          <img src={next_icon} alt="" />
          <span> Опоры трубопроводов </span>
        </div>
      </div>
  </header>
  );
}

export default Header;