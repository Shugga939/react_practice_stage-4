import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductType } from "../../../models/IProductType";


export interface SortState {
  types: IProductType[],
  gosts: string[],
  currentTypes: IProductType[],
  currentGosts: string[],
}

const initialState: SortState = {
  types: [{id :1, type: "Опора"}],
  gosts: ['ГОСТ 14911-82'],
  currentTypes: [],
  currentGosts: []
}

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    addType(state, action: PayloadAction<IProductType>) {
      state.types.push(action.payload)
    },

    addGost(state, action: PayloadAction<string>) {
      state.gosts.push(action.payload)
    },

    toggleGost (state, action: PayloadAction<string>) {
      if (state.currentGosts.includes(action.payload)) {
        const desiredPosition = state.currentGosts.indexOf(action.payload)
        state.currentGosts.splice(desiredPosition, 1)
      } else {
        state.currentGosts.push(action.payload)
      }
    },
  }
})

export default sortSlice.reducer;