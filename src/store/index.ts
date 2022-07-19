import { configureStore ,combineReducers } from "@reduxjs/toolkit";
import productsReducer from './reducers/products/index'
import sortReducer from './reducers/sort/index'


const rootReducer = combineReducers({
  sortReducer,
  productsReducer,
})


export const store = configureStore({reducer: rootReducer})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
