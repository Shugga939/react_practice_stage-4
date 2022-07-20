import { IpcNetConnectOpts } from "net";
import { FC, useEffect, useState } from "react";
import { types } from "util";
import { useAppSelector } from "../../hooks/redux";
import { IProductType } from "../../models/IProductType";
import List from "../list/List";
import './TypeFilter.scss'

const renderTypes = (setArr:any, arr:any) => (type:IProductType) => {
  return (
    <div className="type-item" key={type.id}>
      <label className="type-item__checkbox">
        <input 
          type="checkbox" 
          className="type-item__input" 
          onChange={(e)=>setArr([...arr, type])
          }
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
  const [arr, setArr] = useState([]);

  useEffect(()=> {
    console.log(arr);
    
  },[arr])

  return (
    <div className='filter__item'>
      <h3
        className={show? 'filter__header' : 'filter__header filter__header--hide'}
        onClick={(e)=> setShow(!show)}
      > Тип продукта
      </h3>
      <div className="filter__types">
      {show?
         <List items={types} renderItem={renderTypes(setArr,arr)}/>
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