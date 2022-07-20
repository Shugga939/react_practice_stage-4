import { FC, useState } from "react";
import './../pages/Pages.scss'
import sort_icon from './../assets/img/sortSection/categories.svg'
import filter_icon from './../assets/img/sortSection/filter.svg'

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import SortPanel from "../components/sortPanel/SortPanel";
import Card from "../components/card/Card";
import PriceFilter from "../components/priceFilter/PriceFilter";

import { useAppDispatch, useAppSelector } from "../hooks/redux";
import TypeFilter from "../components/typeFilter/TypeFilter";
import { sortSlice } from "../store/reducers/sort";


let MainPage:FC = ()=> {

  // const [activeGost, setActiveGost] = useState('')
  const {products} = useAppSelector(state=>state.productsReducer)
  const {gosts,currentGosts} = useAppSelector(state=>state.sortReducer)
  // const {activeGost, deactivateGost} = sortSlice.actions
  const {toggleGost} = sortSlice.actions

  const dispatch = useAppDispatch()

  const chooseGost = (gost:string)=> {
    dispatch(toggleGost(gost))
  }
  
  return (
    <div className="main-page page">
      <Header/>
      <main className="main">
        <div className="main__container">
          <div className="main-page__sort">
            <SortPanel/>
          </div>
          <div className="main-page__poducts">
          <section className="products-section">
            <div className="products-section__filter-column">
              <div className="filter">
                <div className="filter__header-categories filter--chapter">
                  <img src={sort_icon} alt="" />
                  <h3 onClick={()=> {}}> Категории </h3>
                </div>
                {/* <div className="filter__categories">
                  Категорий нет
                </div> */}
                <div className="filter--chapter">
                  <img src={filter_icon} alt="" />
                  <h3> Фильтры </h3>
                </div>
                <PriceFilter/>
                <TypeFilter/>
              </div>
            </div>
            <div className="products-section__list-column">
              <div className="products">
                <div className="products__header-gosts">
                  {gosts.map(gost=> {
                    return (
                      <div 
                        className={currentGosts.includes(gost)? "products__gost products__gost--active" : "products__gost"}
                        key={gost}
                        onClick={()=>chooseGost(gost)}
                      > {gost} </div>
                    )
                  })}
                  
                </div>
                <div className="products__cards-list">
                  {products.map(card=> {
                    return <Card {...card} key={card.name}/>
                  })}
                </div>
              </div>
            </div>
          </section>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default MainPage;