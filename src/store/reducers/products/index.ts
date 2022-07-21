import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBasketItem } from "../../../models/IBasket";
import { IProduct } from "../../../models/IProduct";


export interface ProductsState {
  products: IProduct[];
  basket: IBasketItem[];
}

const initialState: ProductsState = {
  products: [],
  basket: []
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<IProduct>) {
      state.products.push(action.payload)
    },
    addProductInBasket(state, action: PayloadAction<IBasketItem>) {
      const desiredItem = state.basket.find(item=> item.product.id === action.payload.product.id)
      if (desiredItem) {
        const positionInBasket = state.basket.indexOf(desiredItem)
        state.basket.splice(positionInBasket,1,action.payload)
      } else {
        state.basket.push(action.payload)
      }
    },
    removeProductInBasket(state, action: PayloadAction<IBasketItem>) {
      const desiredItem = state.basket.find(item=> item.product.id === action.payload.product.id)
      if (desiredItem) {
        const positionInBasket = state.basket.indexOf(desiredItem)
        state.basket.splice(positionInBasket,1)
      }
    },
    clearBasket(state) {
      state.basket =[]
    }
  }
})

export default productsSlice.reducer;