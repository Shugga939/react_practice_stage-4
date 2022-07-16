import { FC, useState } from "react";
import './Card.scss'
import photo_1 from './../../assets/static/1.png'
import star_icon from './../../assets/img/ui/star.svg'


interface CardProps {
  name: string,
  photo: string,
  gost: string,
  price: number,
  hit? : boolean
  promotion? : boolean
}

let Card: FC<CardProps> = ({name, photo, gost,price, hit, promotion}) => {

  const [hover, setHover] = useState(false)

  const handleMouseOver = ()=> {
    setHover(true)
    
  }

  const handleMouseOut = ()=> {
    setHover(false)
  }

  return (
    <div 
      className={hover? 'card card--active' : 'card'}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      <div className="card__notice">
        <span className="notice notice--pink"> Хит </span>
        <span className="notice notice--green"> Акция </span>
      </div>
      {hover? 
        <span className="card__favorite">
        <img src={star_icon} alt=""/>
        <p>В избранное</p>
        </span>
      : ''
      } 
      <div className="card__photo-container">
        <img src={photo_1} alt={photo}/>
      </div>
      <span className="card__gost"> {gost} </span>
      <span className="card__name"> {name} </span>
      <div className="card__price-and-amount">
        <span className="card__price"> {`${price} руб.`} </span>
        {hover? 
        <div className="card__amount-container">
          <div className="counter">
            <button 
              className="counter__minus"

            > - </button>
            <input type="number" className="counter__input" />
            <button 
              className="counter__plus"
              
            > + </button>
          </div>
        </div>
        : ''
        }
      </div>
      {hover? 
        <div className="card__buttons">
          <button className="card__add-button button button--primary"> В корзину </button>
          <button className="card__detail-button button "> Подробнее </button>
        </div>
        : ''
      }
    </div>
  )
}

export default Card;