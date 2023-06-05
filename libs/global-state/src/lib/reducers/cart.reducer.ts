import { createSlice } from '@reduxjs/toolkit';
import { CartActionType } from "../constants/cart";

const initialState: any = {
  loading: false,
  cartInfo: null,
  error: null,
  success: false,
  message: null
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
    [CartActionType.CartSuccess]: (state, action) => {
      state.loading = false;
      state.cartInfo = action.payload.cart_data;
      state.success = true;
      state.error = null;
      state.message = null;
    },
    [CartActionType.CartFail]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  }
})

export default cartSlice.reducer
