import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductType } from "../../../models/IProductType";


export interface SortState {
  types: IProductType[],
  gosts: string[],
  currentTypes: IProductType[],
  currentGosts: string[],
  currentPrice: [number, number],
}

const initialState: SortState = {
  types: [],
  gosts: [],
  currentTypes: [],
  currentGosts: [],
  currentPrice: [0, 0],
}

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    addType(state, action: PayloadAction<IProductType>) {
      state.types.push(action.payload)
    },

    toggleType (state, action: PayloadAction<IProductType>) {
      const foundType = state.currentTypes.find((type=> type.id === action.payload.id))
      
      if (state.currentTypes.length && foundType) {
        const desiredPosition = state.currentTypes.indexOf(action.payload)
        state.currentTypes.splice(desiredPosition, 1)
      } else {
        state.currentTypes.push(action.payload)
      }
    },

    clearCurrentTypes(state) {
      state.currentTypes =[]
    },

    addGost(state, action: PayloadAction<string>) {
      if (!state.gosts.includes(action.payload)) {
        state.gosts.push(action.payload)
      }
    },

    toggleGost (state, action: PayloadAction<string>) {
      if (state.currentGosts.includes(action.payload)) {
        const desiredPosition = state.currentGosts.indexOf(action.payload)
        state.currentGosts.splice(desiredPosition, 1)
      } else {
        state.currentGosts.push(action.payload)
      }
    },

    changePrice (state, action: PayloadAction<[number, number]>) {
      state.currentPrice[0] = action.payload[0]
      state.currentPrice[1] = action.payload[1]
    },
  }
})

export default sortSlice.reducer;
