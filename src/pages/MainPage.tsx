import { FC, useEffect } from "react";
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
import {useMemoProducts} from './../hooks/useMemoProducts'


let MainPage:FC = ()=> {

  const {toggleGost} = sortSlice.actions
  const dispatch = useAppDispatch()
  const {products} = useAppSelector(state=>state.productsReducer)
  const {gosts, currentGosts, currentTypes, currentPrice} = useAppSelector(state=>state.sortReducer)
  const {clearCurrentTypes} = sortSlice.actions

  const sortedProducts = useMemoProducts(
    products,
    currentPrice,
    currentTypes,
    currentGosts,
  )

  const chooseGost = (gost:string)=> {
    dispatch(toggleGost(gost))
  }

  useEffect(():any=> {
    return ()=> dispatch(clearCurrentTypes())
  },[])
  
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
                  {sortedProducts.map(card=> {
                    return <Card {...card} key={card.id}/>
                  })}
                </div>
                {!sortedProducts.length? <div className="products__message"> Ничего не нашлось </div> : ''}
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