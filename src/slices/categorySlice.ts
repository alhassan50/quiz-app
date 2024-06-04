import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Category = {
    title: string;
    icon: string;
    color: string;
}

const initialState: Category | null = null

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        selectCategory: {
            prepare(category: Category) {
                return { payload: category };
            },
            reducer(state: Category | null, action: PayloadAction<Category>) {
                return action.payload
            }
        }
    }
})

export const getSelectedCategory = (state: { category: Category }) => state.category;

export const {selectCategory} = categorySlice.actions

export default categorySlice.reducer