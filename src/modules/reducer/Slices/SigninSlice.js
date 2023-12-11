import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Load } from "./LoadingSlice";
import { Notify } from "./Notification";
import axios from 'axios'
import { url } from "../../sizes/Sizes";

const initialState = {

}

export const Login = createAsyncThunk(
    'Signin/Login',
    async ({ data, navigate }, { dispatch }) => {
        try {
            dispatch(Load(true))
            const response = await axios.post(`${url}/login`, data)
            console.log(response.data)
            dispatch(Load(false))

        } catch (e) {
            console.error(e)
            dispatch(Load(false))
            dispatch(Notify({ msg: 'Technical Error ! Please Try Again !' }))
        }
    }
)

export const SigninSlice = createSlice({
    name: 'Signin',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(Login.pending, (state, action) => {

            })
            .addCase(Login.fulfilled, (state, action) => {

            })
            .addCase(Login.rejected, (state, action) => {

            })
    }
})

export default SigninSlice.reducer