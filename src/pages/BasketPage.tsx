import { FC } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import './../pages/styles/BasketPage.scss'

import basket_icon from './../assets/img/ui/basket.svg'


let BasketPage:FC = () => {
  return (
    <div className="basket-page page">
      <Header/>
        <main className="main">
          <div className="main__container">
            <h1 className="basket-page__title"> Корзина </h1>
            <div className="basket">
              <div className="basket__left-column">
                <div className="basket__left-header">
                  <p className="basket__header-message"> Извините, но указанное ранее количество товара недоступно. Установлено ближайшее доступное значение. </p>
                </div>
                <div className="basket__products-list">

                </div>
              </div>
              <div className="basket__right-column">
                <div className="basket__right-header">
                  <h3> Заказ </h3>
                </div>
                <form className="basket__form">
                  <div className="order-form"> 
                    <p className="order-form__message"> Контактная информация </p>
                    <input 
                      type="text" 
                      className="order-form__input" 
                      placeholder="ФИО"
                      // ref={}
                    />
                    <input 
                      type="phone" 
                      className="order-form__input" 
                      placeholder="Контактный телефон"
                      // ref={}
                    />
                    <input 
                      type="email" 
                      className="order-form__input" 
                      placeholder="Email"
                      // ref={}
                    />
                    <input 
                      type="text" 
                      className="order-form__input" 
                      placeholder="Организация / ИНН"
                      // ref={}
                    />

                    <p className="order-form__total">
                      Итого
                      <span className="order-form__price"> 8 499 руб. </span>
                    </p>
                    <button 
                      className="order-form__submit button button--primary"
                      // onClick={}
                    > <img src={basket_icon} alt="" />
                    Оформить заказ </button>
                    <a className="order-form__link" href="#"> 
                      <div className="order-form__pdf"> Коммерческое предложение </div>
                     </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      <Footer/>
    </div>
  );
}

export default BasketPage;