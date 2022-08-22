import { configureStore } from "@reduxjs/toolkit";
import photoSlice from "../features/Photo/photoSlice"

const rootReducer = {
    photo: photoSlice
}
const store = configureStore({
    reducer: rootReducer
})

export default store;