import { configureStore } from "@reduxjs/toolkit";

//reducers
import categorySliceReducer from '../slices/categorySlice'

const store = configureStore({
    reducer: {
        category: categorySliceReducer
    }
})

export default store