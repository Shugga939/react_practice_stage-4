import { FC, useState } from "react";
import Counter from "../ui/counter/Counter";
import './BasketCard.scss'
import trash_icon from './../../assets/img/ui/trash.svg';


interface BasketCardProps {
  img: string
  gost: string,
  name: string,
  price: number,
  amount: number
}

let BasketCard:FC<BasketCardProps> = ({img, gost, name, price, amount}) => {

  const [count, setCount] = useState(amount)

  return (
    <div className='basket-card'>
      <div className="basket-card__photo-container">
        <img src={img} alt=""/>
      </div>
      <div className="basket-card__information">
        <span className="basket-card__gost"> {gost} </span>
        <h3 className="basket-card__name"> {name} </h3>
        <span className="basket-card__price"> {`${price} руб.`} </span>
      </div>
      <div className="basket-card__amount">
        <Counter amount={count} setAmount={setCount}/>
      </div>
      <h3 className="basket-card__final-price"> {`${(price*count).toFixed(2)} руб.`} </h3>
      <button className="basket-card__delete-button">
        <img src={trash_icon} alt=""/>
      </button>
    </div>
  );
}

export default BasketCard;