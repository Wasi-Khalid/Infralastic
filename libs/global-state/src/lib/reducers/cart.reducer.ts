import { createSlice } from '@reduxjs/toolkit';
import {CartActionType, CartDeleteActionType} from "../constants/cart";

const initialState: any = {
  loading: false,
  cartInfo: [],
  error: null,
  success: false,
  message: null,
}

const cartSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
  extraReducers: {
    [CartActionType.CartPending]: (state: any) => {
      state.loading = true;
      state.error = null;
    },
    [CartActionType.CartSuccess]: (state, {payload}) => {
      state.loading = false;
      state.cartInfo = payload.cart_data;
      state.success = true;
      state.error = null;
      state.message = null;
    },
    [CartActionType.CartFail]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [CartDeleteActionType.CartDeletePending]: (state: any) => {
      state.loading = true;
      state.error = null;
    },
    [CartDeleteActionType.CartDeleteSuccess]: (state, {payload}) => {
      state.loading = false;
      state.cartInfo = payload.cart_data;
      state.success = true;
      state.error = null;
      state.message = null;
    },
    [CartDeleteActionType.CartDeleteFail]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  }
})

export default cartSlice.reducer
