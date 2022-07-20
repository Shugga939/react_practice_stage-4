import { FC, useEffect, useState } from "react";
import Counter from "../ui/counter/Counter";
import './BasketCard.scss'
import trash_icon from './../../assets/img/ui/trash.svg';
import { IProduct } from "../../models/IProduct";
import { useAppDispatch } from "../../hooks/redux";
import { productsSlice } from "../../store/reducers/products";
import default_photo from '../../assets/static/1.png'


interface BasketCardProps {
  product : IProduct
  amount : number
}

let BasketCard:FC<BasketCardProps> = ({amount, product}) => {

  const [count, setCount] = useState(amount)
  const dispatch = useAppDispatch()
  const {removeProductInBasket, addProductInBasket} = productsSlice.actions
  
  useEffect(()=> {
    dispatch(addProductInBasket({amount:count, product}))
  },[count])


  return (
    <div className='basket-card'>
      <div className="basket-card__photo-container">
        <img src={product.photo === ''? default_photo : product.photo} alt=""/>
      </div>
      <div className="basket-card__information">
        <span className="basket-card__gost"> {product.gost} </span>
        <h3 className="basket-card__name"> {product.name} </h3>
        <span className="basket-card__price"> {`${product.price} руб.`} </span>
      </div>
      <div className="basket-card__amount">
        <Counter amount={count} setAmount={setCount}/>
      </div>
      <h3 className="basket-card__final-price"> {`${(product.price*count).toFixed(2)} руб.`} </h3>
      <button 
        className="basket-card__delete-button"
        onClick={()=> dispatch(removeProductInBasket({amount, product}))}
      >
        <img src={trash_icon} alt=""/>
      </button>
    </div>
  );
}

export default BasketCard;