import { createSlice } from '@reduxjs/toolkit';
import { AllCategoryActionType } from "../constants/DeviceStore";

const initialState: any = {
    loading: false,
    deviceStoreInfo: {},
    error: null,
    success: false,
    message: null
}

const deviceSlice = createSlice({
    name: "deviceStore",
    initialState,
    reducers: {},
    extraReducers: {
        [AllCategoryActionType.AllCategoryPending]: (state: any) => {
            state.loading = true;
            state.error = null;
        },
        [AllCategoryActionType.AllCategorySuccess]: (state, { payload }) => {
            state.loading = false;
            state.deviceStoreInfo = payload;
        },
        [AllCategoryActionType.AllCategoryFail]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
    }
})

export default deviceSlice.reducer

