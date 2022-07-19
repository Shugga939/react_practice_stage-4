import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductType } from "../../../models/IProductType";


export interface SortState {
  types: IProductType[],
  gosts: string[],
  currentType: IProductType[],
  currentGost: string[],
}

const initialState: SortState = {
  types: [],
  gosts: [],
  currentType: [],
  currentGost: []
}

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    addType(state, action: PayloadAction<IProductType>) {
      state.types.push(action.payload)
    } 
  }
})

export default sortSlice.reducer;