import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Category = {
    title: string,
    icon: string,
    color: string,
}

const initialState: Category | null = null;

const categorySlice = createSlice({
    name: 'selectedCategory',
    initialState,
    reducers: {
        selectCategory: {
            prepare(category: Category | undefined) {
                console.log("categorycategorycategorycategory:::", category)
                if (category === undefined) return { payload: null };
                return { payload: category };
            },
            reducer(state: Category | null, action: PayloadAction<Category | null>) {
                console.log("stateBEFOREstateBEFOREstateBEFOREstateBEFORE:::", action.payload)
                //console.log("state:::::::::::", getSelectedCategory(state));
                state = action.payload;
                console.log("AFTERstate:::::::::::", state);
            }
        }
    }
});


export const getSelectedCategory = (state: { selectedCategory: Category | null }) => {
    console.log("statestatestatestate:::", state.selectedCategory)
    return state.selectedCategory
};

/* export const getSelectedCategory = (state) => {
    console.log("statestatestatestate:::", state)
}; */
export const { selectCategory } = categorySlice.actions;
export default categorySlice.reducer;
