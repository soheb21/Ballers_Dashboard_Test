import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, register } from "./authAPI";

const initialState = {
    user: null,
    errMssg: null,
    isLoading: false
};

export const regiserAsync = createAsyncThunk("auth/register", async (data, { rejectWithValue }) => {
    try {
        const res = await register(data)
        return res

    } catch (e) {
        if (e) {
            return rejectWithValue(e)
        }
        return rejectWithValue("Failed to register")

    }
})
export const loginAsync = createAsyncThunk("auth/login", async (data, { rejectWithValue }) => {
    try {
        const res = await login(data)
        return res

    } catch (e) {
        if (e) {
            return rejectWithValue(e)
        }
        return rejectWithValue("Failed to register")
    }
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(regiserAsync.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(regiserAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(regiserAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.errMssg = action.payload
            })
            .addCase(loginAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.errMssg = action.payload;
            })
    }
});


export const selectAuthUser = (state) => state.auth;


export default authSlice.reducer;