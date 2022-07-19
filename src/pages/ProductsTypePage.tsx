import { FC, useRef, useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { sortSlice } from "../store/reducers/sort";

interface IError {
  id: boolean,
  type: boolean
}

let ProductsTypePage:FC = () => {

  const [emptyValue, setEmptyValue] = useState (false)
  const [busyValue, setBusyValue] = useState <IError> ({id:false, type: false})
  const [sucsess, setSucsess] = useState (false)
  const idRef = useRef <HTMLInputElement> (null) 
  const typeRef = useRef <HTMLInputElement> (null)
  const {types} = useAppSelector(state=>state.sortReducer)
  const dispatch = useAppDispatch()
  const {addType} = sortSlice.actions

  const addProductType = (e:React.MouseEvent<HTMLButtonElement>)=> { 
    e.preventDefault()
    const id = Number(idRef.current!.value)
    const type = typeRef.current!.value

    if (types.find(obj=>obj.id===id) || id==0) {
      setBusyValue({...busyValue, id: true})
      return
    } else if (types.find(obj=>obj.type===type)) {
      setBusyValue({...busyValue, type: true})
      return
    }

    if (!id || !type) {
      setEmptyValue(true)
      return
    }

    setEmptyValue(false)
    setBusyValue({id:false, type: false})
    setSucsess(true)
    dispatch(addType({id:id, type: type}))
    idRef.current!.value = ''
    typeRef.current!.value =''
  }

  return (
    <div className="product-type-page page">
      <Header/>
      <main className="main">
        <div className="main__container">
          <h1 className="product-type-page__title"> Добавить тип продукта</h1>
          <form className="product-type-page__form">
            <div className="type-form">
              <input 
                type="number"
                placeholder="ID типа продукта"
                className="input"
                onFocus={()=>setSucsess(false)}
                ref={idRef}
              />
              {busyValue.id? <span className="busy-error">ID товара уже существует</span> : ''}
              <input 
                type="text"
                placeholder="Наименование типа продукта"
                className="input"
                ref={typeRef}
                onFocus={()=>setSucsess(false)}
              />
              {busyValue.type? <span className="busy-error">Наименование типа продукта уже существует</span> : ''}
              <button 
                type="submit"
                className="button button--primary"
                onClick={addProductType}
              > Добавить </button>
              {emptyValue? <span className="empty-error">Все поля должны быть заполнены</span> :''}
              {sucsess? <span className="sucsess-message">Тип продукта успешно дабавлен</span> :''}
            </div>
          </form>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default ProductsTypePage;