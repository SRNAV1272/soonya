import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ContentSlice from "./Slices/ContentSlice";

export const store = configureStore({
    reducer: combineReducers({
        ContentReducers: ContentSlice
    })
})