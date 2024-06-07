import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Category = {
    title: string,
    icon: string,
    color: string,
}

const initialState: Category = {
    title: "",
    icon: "",
    color: "",
};

const categorySlice = createSlice({
    name: 'selectedCategory',
    initialState,
    reducers: {
        selectCategory: {
            prepare(category: Category | undefined) {
                if (category === undefined) return { payload: initialState };
                return { payload: category };
            },
            reducer(state, action: PayloadAction<Category>) {
                state.title = action.payload.title
                state.icon = action.payload.icon
                state.color = action.payload.color
            },
        }
    }
});


export const getSelectedCategory = (state: { selectedCategory: Category }) => state.selectedCategory
export const { selectCategory } = categorySlice.actions;
export default categorySlice.reducer;
