import { FC } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import './../pages/styles/BasketPage.scss'

import basket_icon from './../assets/img/ui/basket.svg'
import alert_icon from './../assets/img/ui/alert.svg'
import pr_img from './../assets/static/3.png'
import BasketCard from "../components/basketCard/BasketCard";

const mockBasket = [
  {
    img: pr_img,
    gost: "ГОСТ 14911-82",
    name: "Опора подвижная ОПБ2",
    price: 849.9,
    amount: 3
  }
]

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
                  <img src={alert_icon} alt=""/>
                  <p className="basket__header-message"> Извините, но указанное ранее количество товара недоступно. Установлено ближайшее доступное значение. </p>
                </div>
                <div className="basket__products-list">
                  <BasketCard {...mockBasket[0]}/>
                  <BasketCard {...mockBasket[0]}/>
                  <BasketCard {...mockBasket[0]}/>
                  <BasketCard {...mockBasket[0]}/>
                  
                </div>
              </div>
              <div className="basket__right-column">
                <div className="basket__right-header">
                  <h3> Заказ </h3>
                </div>
                <form className="basket__form">
                  <div className="order-form"> 
                    <p className="order-form__message"> Контактная информация </p>
                    <div className="order-form__input-container">
                      <input 
                        type="text" 
                        className="order-form__input" 
                        placeholder="ФИО"
                        // ref={}
                      />
                    </div>
                    <div className="order-form__input-container">
                      <input 
                        type="phone" 
                        className="order-form__input" 
                        placeholder="Контактный телефон"
                        // ref={}
                      />
                    </div>
                    <div className="order-form__input-container">
                      <input 
                        type="email" 
                        className="order-form__input" 
                        placeholder="Email"
                        // ref={}
                      />
                    </div>
                    <div className="order-form__input-container">
                      <input 
                        type="text" 
                        className="order-form__input" 
                        placeholder="Организация / ИНН"
                        // ref={}
                      />
                    </div>

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