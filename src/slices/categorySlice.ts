import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Category = {
    title: string,
    icon: string,
    color: string,
}

const initialState: Category | null = {
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
                if (category === undefined) return { payload: null };
                return { payload: category };
            },
            reducer(state: Category | null, action: PayloadAction<Category | null>) {
                return action.payload;
            }
        }
    }
});

export const getSelectedCategory = (state: { selectedCategory: Category | null }) => state.selectedCategory;
export const { selectCategory } = categorySlice.actions;
export default categorySlice.reducer;
