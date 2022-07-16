import { FC } from "react";
import './../pages/Pages.scss'
import './../pages/styles/MainPage.scss'
import sort_icon from './../assets/img/sortSection/categories.svg'
import filter_icon from './../assets/img/sortSection/filter.svg'

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import SortPanel from "../components/sortPanel/SortPanel";
import Card from "../components/card/Card";


let mockCards = [
  {
    photo : './../assets/img/sortSection/filter.svg',
    name : 'Опора тавровая хомутовая ТХ',
    gost: 'ГОСТ 14911-82',
    price: 849.9,
    hit : true,
    promotion : true
  },
  {
    photo : './../assets/img/sortSection/filter.svg',
    name : 'Опора тавровая хомутовая ТХ',
    gost: 'ГОСТ 14911-82',
    price: 849.9,
    hit : true,
    promotion : true
  },
  {
    photo : './../assets/img/sortSection/filter.svg',
    name : 'Опора тавровая хомутовая ТХ',
    gost: 'ГОСТ 14911-82',
    price: 849.9,
    hit : true,
    promotion : true
  },
  {
    photo : './../assets/img/sortSection/filter.svg',
    name : 'Опора тавровая хомутовая ТХ',
    gost: 'ГОСТ 14911-82',
    price: 849.9,
    hit : true,
    promotion : true
  }
]


let MainPage:FC = ()=> {
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
                  <span> Категории </span>
                </div>
                {/* <div className="filter__categories">
                  Категорий нет
                </div> */}
                <div className="filter--chapter">
                  <img src={filter_icon} alt="" />
                  <span> Фильтры </span>
                </div>
              </div>
            </div>
            <div className="products-section__list-column">
              <div className="products">
                <div className="products__header-gosts">
                  <div className="products__gost"> ГОСТ 14911-82 </div>
                </div>
                <div className="products__cards-list">
                  {mockCards.map(card=> {
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