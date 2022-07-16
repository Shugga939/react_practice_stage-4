import { FC } from "react";
import './../pages/Pages.scss'
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import SortPanel from "../components/sortPanel/SortPanel";

let MainPage:FC = ()=> {
  return (
    <div className="main-page page">
      <Header/>
      <main className="main">
        <div className="main__container">
          <div className="main-page__sort">
            <SortPanel/>
          </div>
          <section className="products">

          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default MainPage;