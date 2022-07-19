import { FC, useState } from "react";
import { IProductType } from "../../../models/IProductType";
import List from "../../list/List";
import './DropdownInput.scss'

interface DropdownInputProps {
  callback: (type:IProductType)=> void,
  types: IProductType[],
  selectedType: string
}

const renderTypes = (callback:Function)=> (type:IProductType) => {
  return (
    <div 
      className="dropdown-input__type" 
      onClick={()=>callback(type)}
      key={type.id}
    > {type.type} 
    </div>
  )
}

let DropdownInput:FC<DropdownInputProps> = ({callback, types, selectedType}) => {

  const [show, setShow] = useState(false)

  const chooseType = (type:IProductType)=> {
    callback(type)
    setShow(false)
  }

  return (
    <div className= {show? "dropdown-input dropdown-input--open" : "dropdown-input"}>
      <input
        type="text"
        className="dropdown-input__select input"
        readOnly={true}
        onClick={()=>setShow(!show)}
        value={selectedType}
        placeholder='Тип продукта'
        />
      <div 
        className="dropdown-input__types-container">
        {show? 
          <List items={types} renderItem={renderTypes(chooseType)}/>
        : ''
        }
      </div>
    </div>
  );
}

export default DropdownInput;