import { FC, useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import { IProductType } from "../../models/IProductType";
import List from "../list/List";
import './TypeFilter.scss'

const renderTypes = (type:IProductType) => {
  return (
    <div className="type-item" key={type.id}>
      <label className="type-item__checkbox">
        <input 
          type="checkbox" 
          className="type-item__input" 
          // checked={checked}
        />
        <span className="type-item__checkbox-background"></span>
        <span className="type-item__name"> {type.type} </span>
      </label>
    </div>
  )
}

let TypeFilter: FC = ({}) => {

  const [show, setShow] = useState(false)
  const {types} = useAppSelector(state=>state.sortReducer)
  const [checked, setChecked] = useState(false);

  return (
    <div className='filter__item'>
      <h3
        className={show? 'filter__header' : 'filter__header filter__header--hide'}
        onClick={(e)=> setShow(!show)}
      > Тип продукта
      </h3>
      <div className="filter__types">
      {show? 
        <List items={types} renderItem={renderTypes}/>
        : ''}
      </div>
    </div>
  )
}

// label.checkbox
// input(type="checkbox")
// span.checkbox-background
// span.name=name

export default TypeFilter;