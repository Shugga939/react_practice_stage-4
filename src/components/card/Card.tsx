import { FC, useRef, useState } from "react";
import './Card.scss'
import star_icon from './../../assets/img/ui/star.svg'
import Counter from "../ui/counter/Counter";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import products, { productsSlice } from "../../store/reducers/products";
import { IProductType } from "../../models/IProductType";
import default_photo from '../../assets/static/1.png'


interface CardProps {
  id: number,
  name: string,
  photo?: string,
  type: IProductType
  gost: string,
  price: number,
  hit? : boolean
  promotion? : boolean
}

let Card: FC<CardProps> = ({...card}) => {

  const [hover, setHover] = useState(false)
  const [amount, setAmount] = useState(1)
  const dispatch = useAppDispatch()
  const {basket} = useAppSelector(state=>state.productsReducer)
  const {addProductInBasket} = productsSlice.actions

  const handleMouseOver = ()=> {
    setHover(true)
  }
  const handleMouseOut = ()=> {
    setHover(false)
  }
  
  const confirmOrder = ()=> {
    dispatch(addProductInBasket({amount, product: card}))
  }

  return (
    <div 
      className={hover? 'card card--active' : 'card'}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      <div className="card__notice">
        {card.hit? <span className="notice notice--pink"> Хит </span> : ''}
        {card.promotion? <span className="notice notice--green"> Акция </span> : ''}
      </div>
      {hover? 
        <span className="card__favorite">
        <img src={star_icon} alt=""/>
        <p>В избранное</p>
        </span>
      : ''
      } 
      <div className="card__photo-container">
        <img src={card.photo == ''? default_photo: card.photo} alt={''} />
      </div>
      <span className="card__gost"> {card.gost} </span>
      <span className="card__name"> {card.name} </span>
      <div className="card__price-and-amount">
        <span className="card__price"> {`${card.price} руб.`} </span>
        {hover? 
        <div className="card__amount-container">
          <Counter amount={amount} setAmount={setAmount}/>
        </div>
        : ''
        }
      </div>
      {hover? 
        <div className="card__buttons">
          <button 
            className="card__add-button button button--primary"
            onClick={confirmOrder}> В корзину </button>
          <button className="card__detail-button button "> Подробнее </button>
        </div>
        : ''
      }
    </div>
  )
}

export default Card;