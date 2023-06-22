import {createAsyncThunk} from "@reduxjs/toolkit";
import * as api from "../../api";

export const fetchAssetReportByCompany = createAsyncThunk(
  "report/getAsset",
  async (
    { company_id }: {company_id: any},
    { getState, rejectWithValue }
  ) => {
    try {
      const { company }: any = getState();
      let data = {};
      await api.getAssetReport({company_id}).then((res: any) => {
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

export const fetchAllBudgetReport = createAsyncThunk(
  "report/getBudget",
  async (
    { config }: {config: any},
    { getState, rejectWithValue }
  ) => {
    try {
      const { company }: any = getState();
      let data = {};
      await api.getPurchaseReport({config}).then((res: any) => {
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
