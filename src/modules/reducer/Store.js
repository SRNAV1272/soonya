import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ContentSlice from "./Slices/ContentSlice";
import LoadingSlice from "./Slices/LoadingSlice";
import Notification from "./Slices/Notification";
import SignupSlice from "./Slices/SignupSlice";
import SigninSlice from "./Slices/SigninSlice";
import CartSlice from "./Slices/CartSlice";
import TapeWaveCardSlice from "./Slices/TapeWaveCardSlice";

export const store = configureStore({
    reducer: combineReducers({
        ContentReducers: ContentSlice,
        LoadingReducer: LoadingSlice,
        NotificationReducer: Notification,
        SignUpReducer: SignupSlice,
        SigninReducer: SigninSlice,
        CartReducer: CartSlice,
        TapewaveCardReducer: TapeWaveCardSlice
    })
})