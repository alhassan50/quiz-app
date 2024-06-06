import { configureStore } from "@reduxjs/toolkit";

//reducers
import selectedCategoryReducer from '../slices/categorySlice'

const store = configureStore({
    reducer: {
        selectedCategory: selectedCategoryReducer,
    }
})

export default store