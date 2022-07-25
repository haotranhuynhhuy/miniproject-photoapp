import { createSlice } from "@reduxjs/toolkit";

const photoSlice = createSlice({
    name:'photo',
    initialState: [],
    reducers:{
        addPhoto: (state,action)=>{
            const newPhoto = action.payload;
            state.push(newPhoto)
        }
    }
})

const {reducer, actions} = photoSlice;
export const {addPhoto} = actions
export default reducer;