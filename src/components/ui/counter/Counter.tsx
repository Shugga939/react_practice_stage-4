import { FC } from "react";
import './Counter.scss'

interface CounterProps {
  amount: number,
  setAmount: (amount:number)=> void
}

let Counter:FC <CounterProps> = ({amount =1 , setAmount}) => {
  return (
  <div className="counter">
    <button 
      className="counter__minus"
      onClick={(e)=> {if (amount>1 ) setAmount(--amount)}}
    > - </button>
    <input 
      type="number" 
      className="counter__input"
      value={amount}
      onChange={(e)=> setAmount(+e.target.value)}
    />
    <button 
      className="counter__plus"
      onClick={(e)=> setAmount(++amount)}
    > + </button>
  </div>
  );
}

export default Counter;