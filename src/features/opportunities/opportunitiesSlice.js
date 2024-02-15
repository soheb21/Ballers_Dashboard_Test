import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData, fetchDetailsByID } from "./opportunitiesAPI";

const initialState = {
    data: [],
    details: null,
    errMssg: null,
    isLoading: false
};

export const fetchDataAsync = createAsyncThunk("opportunities/data", async (args, { rejectWithValue }) => {
    try {
        const res = await fetchData();
        return res

    } catch (e) {
        if (e) {
            return rejectWithValue(e)
        }
        return rejectWithValue("Data Not Found")

    }
})
export const fetchDetailsByIDAsync = createAsyncThunk("opportunities/details", async (id, { rejectWithValue }) => {
    try {
        const res = await fetchDetailsByID(id)
        return res

    } catch (e) {
        if (e) {
            return rejectWithValue(e)
        }
        return rejectWithValue("Details Not Found")
    }
})

export const opportunitiesSlice = createSlice({
    name: "opportunities",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchDataAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchDataAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.data = [];
                state.errMssg = action.payload
            })
            .addCase(fetchDetailsByIDAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchDetailsByIDAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.details = action.payload;
            })
            .addCase(fetchDetailsByIDAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.details = null;
                state.errMssg = action.payload;
            })
    }
});


export const selectopportunities = (state) => state.opportunities;


export default opportunitiesSlice.reducer;