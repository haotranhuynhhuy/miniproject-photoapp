import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../api/userApi";



export const getMe = createAsyncThunk('user/getMe',async (params, thunkAPI) =>{
    // thunkAPI.dispatch(...)
    const currentUser = await userApi.getMe()
    return currentUser
})
const userSlice = createSlice({
    name: 'user',
    initialState:{
        current:{},
        loading: false,
        error:''
    },
    reducer: {

    },
    extraReducers:{
        [getMe.current]: (state) =>{
            state.loading = true;
        },
        [getMe.error]: (state, action) =>{
            state.loading = false;
            state.error  = action.error;
        },
        [getMe.fulfilled]:(state,action)=>{
            state.loading = true;
            state.current = action.payload;
        }
    }
})

const {reducer} = userSlice;
export default reducer