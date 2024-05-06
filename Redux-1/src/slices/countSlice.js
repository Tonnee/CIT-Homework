import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    name: "count",
    initialState: {
        input: "",
        result: 0,
    },
    reducers: {
        
    },
});

export const {} = countSlice.actions;

export default countSlice.reducer;
