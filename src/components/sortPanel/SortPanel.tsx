
import { FC } from "react";
import './SortPanel.scss'

let SortPanel:FC = ()=> {
  return (
    <section className="sort">
    <h1 className="sort__title"> Товары </h1>
    <div className="sort__ui">
      <div className="sort__popular">
        Сначала популярные
      </div>
      <div className="switch-container">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  </section>
  );
}

export default SortPanel;
