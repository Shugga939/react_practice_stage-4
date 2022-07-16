import { FC } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

let ProductsTypePage:FC = () => {
  return (
    <div className="product-type-page page">
      <Header/>
      <main className="main">
        <div className="main__container">
          <h1 className="product-type-page__title"> Добавить тип продукта</h1>
          <form className="product-type-page__form">
            <div className="type-form">
              <input 
                type="text"
                placeholder="ID типа продукта"
                className="input"
              />
              <span className="type-error">ID товара уже занято</span>
              <input 
                type="text"
                placeholder="Наименование типа продукта"
                className="input"
              />
              <span className="type-error">Наименование товара уже занято</span>
              <button 
                type="submit"
                className="button button--primary"
                
              > Добавить </button>
            </div>
          </form>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default ProductsTypePage;