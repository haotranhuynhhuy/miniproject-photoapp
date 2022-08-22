import { createSlice } from "@reduxjs/toolkit";

const photoSlice = createSlice({
    name:'photo',
    initialState: [],
    reducers:{
        addPhoto: (state,action)=>{
            const newPhoto = action.payload;
            state.push(newPhoto) 
        },
        removePhoto: (state, action)=>{
            const foundId = action.payload;
            state = state.filter(photo => photo.id !== foundId)
            return state;
        },
        updatePhoto: (state, action)=>{
            const newPhoto = action.payload;
            const foundId = state.findIndex(photo => photo.id === newPhoto.id )
            state[foundId] = newPhoto
        }
    }
})

const {reducer, actions} = photoSlice;
export const {addPhoto, removePhoto, updatePhoto} = actions
export default reducer;
