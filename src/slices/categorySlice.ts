import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "category",
    initialState: {
        title: null
    },
    reducers: {
        selectCategory: {
            prepare(title) {
                return title
            },
            reducer(state, action) {
                state.title = action.payload
            }
        }
    }
})

export const getSelectedCategory = (state: { category: {title: null | string} }) => state.category.title;

export const {selectCategory} = categorySlice.actions

export default categorySlice.reducer