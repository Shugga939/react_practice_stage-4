import { FC, useRef, useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import DropdownInput from "../components/ui/DropdownInput/DropdownInput";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { IProductType } from "../models/IProductType";
import { productsSlice } from "../store/reducers/products";
import def_photo from '../assets/static/1.png'
import { sortSlice } from "../store/reducers/sort";



let ProductsPage:FC = () => {

  const [emptyValue, setEmptyValue] = useState (false)
  const [busyValue, setBusyValue] = useState (false)
  const [sucsess, setSucsess] = useState (false)
  const idRef = useRef <HTMLInputElement> (null) 
  const [selectedType, setSelectedType] = useState <IProductType> ({id :0 , type: ''})
  const [emptyType, setEmptyType] = useState (false)
  const nameRef = useRef <HTMLInputElement> (null)
  const priceRef = useRef <HTMLInputElement> (null)
  const gostRef = useRef <HTMLInputElement> (null)
  const photoRef = useRef <HTMLInputElement> (null)

  const {types} = useAppSelector(state=>state.sortReducer)
  const {products} = useAppSelector(state=>state.productsReducer)
  const dispatch = useAppDispatch()
  const {addProduct} = productsSlice.actions
  const {addGost} = sortSlice.actions

  
  const addProductHandler = (e:React.MouseEvent<HTMLButtonElement>)=> { 
    e.preventDefault()
    const id = Number(idRef.current!.value)
    const name = nameRef.current!.value
    const price = Number(priceRef.current!.value)
    const gost = gostRef.current!.value

    if (!id || !name || !price || !gost) {
      setEmptyValue(true)
      return
    }

    if (products.find(obj=>obj.id===id)) {
      setBusyValue(true)
      return
    } else if (selectedType.id === 0) {
      setEmptyType(true)
      return
    }

    setEmptyValue(false)
    setBusyValue(false)
    setSucsess(true)
    idRef.current!.value = ''
    nameRef.current!.value =''
    priceRef.current!.value =''
    gostRef.current!.value =''
    setSelectedType({id :0 , type: ''})
    setEmptyType(false)

    const hit = name.includes('о')? true : false
    const promotion = name.includes('а')? true : false

    const photo =  
      photoRef.current!.files![0]?
        URL.createObjectURL(new Blob([photoRef.current!.files![0]],{type:'image/png'}))
      : ''
    
    dispatch(addGost(gost))
    dispatch(addProduct({
      id,
      name,
      price,
      gost,
      type: selectedType,
      hit,
      promotion,
      photo : photo
    }))
  }

  const dropDownCallback = (type:IProductType) => {
    setSelectedType({...type})
  }

  return (
    <div className="products-page page">
      <Header/>
      <main className="main">
        <div className="main__container">
          <h1 className="products-page__title"> Добавить товар</h1>
          <form className="products-page__form">
            <div className="products-form">
              <input 
                type="number"
                placeholder="ID товара"
                className="input"
                ref={idRef}
              />
              {busyValue? <span className="type-error">ID товара уже существует</span> : ''}
              <input 
                type="text"
                placeholder="Наименование товара"
                className="input"
                ref={nameRef}
              />
              <DropdownInput selectedType={selectedType.type} callback={dropDownCallback} types={types}/>
              {emptyType? <span className="type-error">Выберите тип продукта</span> : ''}
              <input 
                type="number"
                placeholder="Цена, руб"
                className="input"
                ref={priceRef}
              />
              <input 
                type="text"
                placeholder="ГОСТ"
                className="input"
                ref={gostRef}
              />
              <span className='products-form__file'> Фото товара</span>
              <input 
                type="file"
                className="input"
                // onChange={(e)=> photoRef.current!.files = e.currentTarget.files}
                ref={photoRef}
              />
              <button 
                type="submit"
                className="button button--primary"
                onClick={addProductHandler}
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

export default ProductsPage;