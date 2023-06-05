import { createAsyncThunk } from "@reduxjs/toolkit";

export const cartData = createAsyncThunk(
  "global/cart",
  async (
    { cart_data }: { cart_data: any },
    { getState, rejectWithValue }
  ) => {
    try {
      const { cart }: any = getState();
      const data: any = {};
      data.cart_data = cart_data;
      return data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
