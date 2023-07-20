import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";


export const getCartListById = createAsyncThunk(
  "cart/get",
  async (
    {cartlist_no}: { cartlist_no: any},
    { getState, rejectWithValue }
  ) => {
    try {
      const { cart }: any = getState();
      let data = {};
      await api.getCartList({cartlist_no}).then((res: any) => {
        data = res.data.result;
      });
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

export const addToCartList = createAsyncThunk(
  "cart/add",
  async (
    {cartlist_no, product_id}
      : { cartlist_no: any, product_id: any},
    { getState, rejectWithValue }
  ) => {
    try {
      const { cart }: any = getState();
      let data = {};
      await api.addCartList({cartlist_no, product_id}).then((res: any) => {
        data = res.data.result;
      });
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

export const cartDelete = createAsyncThunk(
  "cart/delete",
  async (
    { cartlist_no, product_id }
      : { cartlist_no: any, product_id: any},
    { getState, rejectWithValue }
  ) => {
    try {
      const { cart }: any = getState();
      let data: any = {};
      await api.deleteCartList({cartlist_no, product_id}).then((res: any) => {
        data = res.data.result;
      });
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
export const getWishListById = createAsyncThunk(
  "wish/get",
  async (
    { wishlist_no }: { wishlist_no: any},
    { getState, rejectWithValue }
  ) => {
    try {
      const { cart }: any = getState();
      let data = {};
      await api.getWishList({wishlist_no}).then((res: any) => {
        data = res.data.result;
      });
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

export const addToWishList = createAsyncThunk(
  "wish/add",
  async (
    {wishlist_no, product_id}
      : { wishlist_no: any, product_id: any},
    { getState, rejectWithValue }
  ) => {
    try {
      const { cart }: any = getState();
      let data = {};
      await api.addWishList({wishlist_no, product_id}).then((res: any) => {
        data = res.data.result;
      });
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

export const wishDelete = createAsyncThunk(
  "wish/delete",
  async (
    {wishlist_no, product_id}
      : { wishlist_no: any, product_id: any},
    { getState, rejectWithValue }
  ) => {
    try {
      const { cart }: any = getState();
      let data: any = {};
      await api.deleteWishList({wishlist_no, product_id}).then((res: any) => {
        data = res.data.result;
      });
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
