import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    view: true,
};

const viewSlice = createSlice({
    name: "view",
    initialState,
    reducers: {
        view(state, action) {
            state.view = action.payload;
        },
    },
});

export const { view } = viewSlice.actions;

export default viewSlice.reducer;
