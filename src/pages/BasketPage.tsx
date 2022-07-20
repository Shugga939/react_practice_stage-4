import { FC, useEffect, useRef, useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

import basket_icon from './../assets/img/ui/basket.svg'
import alert_icon from './../assets/img/ui/alert.svg'
import BasketCard from "../components/basketCard/BasketCard";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import List from "../components/list/List";
import { IBasketItem } from "../models/IBasket";
import { emailValidation, phoneValidation } from "../utils/valiadtion";
import { sortSlice } from "../store/reducers/sort";
import { productsSlice } from "../store/reducers/products";


const renderItems = ()=> (product:IBasketItem) => {
  return (
    <BasketCard 
      amount={product.amount} 
      product={product.product}
      key={product.product.id}
    />
  )
}

let BasketPage:FC = () => {

  const [finalPrice, setFinalPrice] = useState(0)
  const nameRef = useRef <HTMLInputElement> (null)
  const phoneRef = useRef <HTMLInputElement> (null)
  const emailRef = useRef <HTMLInputElement> (null)
  const orgRef = useRef <HTMLInputElement> (null)
  const [emptyValue, setEmptyValue] = useState (false)
  const [emptyBasket, setEmptyBasket] = useState (false)
  const [invalidValue, setInvalidValue] = useState({phone: false, email: false})
  const [sucsess, setSucsess] = useState (false)

  const dispatch = useAppDispatch()
  const {basket} = useAppSelector(state=>state.productsReducer)
  const {clearBasket} = productsSlice.actions
  


  useEffect(()=> {
    setFinalPrice(basket.reduce((prev, curr)=> prev + curr.product.price*curr.amount , 0))
  },[basket])

  const confirmOrder = (e:React.MouseEvent<HTMLButtonElement>)=> { 
    e.preventDefault()
    const name = nameRef.current!.value
    const phone = phoneRef.current!.value
    const email = emailRef.current!.value
    const org = orgRef.current!.value

    if (!basket.length) {
      setEmptyBasket(true)
      return
    }

    if (!name || !phone || !email || !org) {
      setEmptyValue(true)
      return
    }

    if (!phoneValidation(phone)) {
      setInvalidValue({...invalidValue, phone: true})
      return
    } else if (!emailValidation(email)) {
      setInvalidValue({...invalidValue, email: true})
      return
    }

    setEmptyValue(false)
    setSucsess(true)
    setInvalidValue({phone: false, email: false})
    nameRef.current!.value =''
    phoneRef.current!.value = ''
    emailRef.current!.value =''
    orgRef.current!.value =''
    dispatch(clearBasket())
    console.log({basket, price: finalPrice, clientInfo: {name, phone, email, org}});
  }

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
                  {basket.length? 
                    <List items={basket} renderItem={renderItems()}/>
                  :
                   <p className="basket__empty"> Корзина пуста </p>
                  }
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
                        ref={nameRef}
                      />
                    </div>
                    <div className="order-form__input-container">
                      <input 
                        type="tel" 
                        className="order-form__input" 
                        placeholder="Контактный телефон"
                        ref={phoneRef}
                      />
                    </div>
                    {invalidValue.phone? <span className="order-form__error"> Неверный формат номера </span> : ''}
                    <div className="order-form__input-container">
                      <input 
                        type="email" 
                        className="order-form__input" 
                        placeholder="Email"
                        ref={emailRef}
                      />
                    </div>
                    {invalidValue.email? <span className="order-form__error"> Неверный формат электронного адреса </span> : ''}
                    <div className="order-form__input-container">
                      <input 
                        type="text" 
                        className="order-form__input" 
                        placeholder="Организация / ИНН"
                        ref={orgRef}
                      />
                    </div>
                    <p className="order-form__total">
                      Итого
                      <span className="order-form__price"> {`${finalPrice} руб`}. </span>
                    </p>
                    <div className="order-form__messages">
                      {emptyValue? <span className="order-form__error"> Все поля должны быть заполнены </span> : ''}
                      {emptyBasket? <span className="order-form__error"> Корзина не должна быть пустой </span> : ''}
                      {sucsess? <span className="order-form__sucsess"> Заказ успешно принят! </span> : ''}

                    </div>
                    <button 
                      className="order-form__submit button button--primary"
                      onClick={confirmOrder}
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