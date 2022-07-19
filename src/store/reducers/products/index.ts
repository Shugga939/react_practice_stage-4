import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../models/IProduct";
import { IProductType } from "../../../models/IProductType";


export interface ProductsState {
  products: IProduct[];
  basket: IProduct[]
}

const initialState: ProductsState = {
  products: [],
  basket: []
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // addType(state, action: PayloadAction<IProductType>) {
    //   state.types.push(action.payload)
    // } 
  }
})

export default productsSlice.reducer;