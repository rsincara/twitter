import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchApi } from "../../services/Fetch";

const initialState = {
    userInfo: null,
    isLoading: false,
}

export const getUserInfo = createAsyncThunk(
    'users/getUserInfo',
    async (credentials, thunkAPI) => {
        return await fetchApi('users/user-info');
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserInfo.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(getUserInfo.fulfilled, (state, action) => {
            state.userInfo = action.payload?.user || null;
            state.isLoading = false;
        })
    },
})

export default usersSlice.reducer

