import { FC } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import DropdownInput from "../components/ui/DropdownInput/DropdownInput";

let ProductsPage:FC = () => {
  return (
    <div className="products-page page">
      <Header/>
      <main className="main">
        <div className="main__container">
          <h1 className="products-page__title"> Добавить продукт</h1>
          <form className="products-page__form">
            <div className="products-form">
              <input 
                type="text"
                placeholder="ID продукта"
                className="input"
              />
              <span className="type-error">ID товара уже занято</span>
              <input 
                type="text"
                placeholder="Наименование продукта"
                className="input"
              />
              <span className="type-error">Наименование товара уже занято</span>
              <DropdownInput/>
              <span className="type-error">Выберите тип товара</span>
              <input 
                type="text"
                placeholder="Цена"
                className="input"
              />
              <span className="type-error">Укажите цену товара</span>
              <input 
                type="text"
                placeholder="ГОСТ"
                className="input"
              />
              <span className="type-error">Укажите ГОСТ товара</span>
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

export default ProductsPage;