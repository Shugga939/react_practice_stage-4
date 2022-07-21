import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { IProductType } from "../../models/IProductType";
import { sortSlice } from "../../store/reducers/sort";
import List from "../list/List";
import './TypeFilter.scss'

const renderTypes = (callback:Function) => (type:IProductType) => {
  return (
    <div className="type-item" key={type.id}>
      <label className="type-item__checkbox">
        <input 
          type="checkbox" 
          className="type-item__input" 
          onChange={(e)=>callback(type)}
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
  const {toggleType} = sortSlice.actions
  const dispatch = useAppDispatch()
  const {clearCurrentTypes} = sortSlice.actions

  const callback = (type:IProductType)=> {
    dispatch(toggleType(type))
  }

  return (
    <div className='filter__item'>
      <h3
        className={show? 'filter__header' : 'filter__header filter__header--hide'}
        onClick={(e)=> {setShow(!show); dispatch(clearCurrentTypes())}}
      > Тип продукта
      </h3>
      <div className="filter__types">
      {show?
         <List items={types} renderItem={renderTypes(callback)}/>
        : ''
      }
      {!types.length && show? <div className="filter__message"> Типов пока нет </div> : ''}
      </div>
    </div>
  )
}

export default TypeFilter;