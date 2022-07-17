import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import BasketPage from './pages/BasketPage';
import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';
import ProductsTypePage from './pages/ProductsTypePage';
import { routesPath } from './utils/RoutesPath';

const App:FC =() => {
  return (
    <Routes>
      <Route path={routesPath.MAIN_PAGE} element={<MainPage/>}></Route>
      <Route path={routesPath.PRODUCTS_PAGE} element = {<ProductsPage/>}> </Route>
      <Route path={routesPath.PRODUCTS_TYPE_PAGE} element = {<ProductsTypePage/>}> </Route>
      <Route path={routesPath.BASKET_PAGE} element = {<BasketPage/>}> </Route>
      <Route path="*" element = {<Navigate replace to={routesPath.MAIN_PAGE}/>}> </Route>
    </Routes>
  );
}

export default App;
