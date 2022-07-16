import { FC } from "react";
import './DropdownInput.scss'

const types = [{id: 1, name: 'Холод'}, {id: 2, name: 'Moroz'}]

let DropdownInput:FC = () => {
  return (
    <div className="dropdown-input">
      <input
        type="text"
        className="dropdown-input__select input"
        readOnly={true}
        onClick={()=>console.log('lol')}
        // value={}
        placeholder='Тип продукта'
        />
      <div className="dropdown-input__types-container">
        {types.map(el=> {
          const dataId = {'data-id': el.id}
          return <div className="dropdown-input__type" {...dataId }> {el.name} </div>
        })}
      </div>
    </div>
  );
}

export default DropdownInput;