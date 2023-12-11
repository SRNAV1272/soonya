import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Load } from "./LoadingSlice";
import { Notify } from "./Notification";
import axios from 'axios'
import { url } from "../../sizes/Sizes";

const initialState = {
    name: 'Client'
}

export const Login = createAsyncThunk(
    'Signin/Login',
    async ({ data, navigate }, { dispatch }) => {
        try {
            dispatch(Load(true))
            const response = await axios.post(`${url}/login`, data)
            if (response.data?.msg === "Login Successful !") {
                localStorage.setItem('token', response.data?.jwtoken)
                dispatch(Notify({ msg: response.data?.msg }))
                navigate('/dashboard/content')
                dispatch(Load(false))
                return {
                    name: response.data?.name
                }
            }
        } catch (e) {
            dispatch(Load(false))
            dispatch(Notify({ msg: e.response.data.msg ? e.response.data.msg : 'Technical Error ! Please Try Again !' }))
        }
    }
)

export const SigninSlice = createSlice({
    name: 'Signin',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(Login.pending, (state, action) => { })
            .addCase(Login.fulfilled, (state, action) => {
                return {
                    ...state,
                    ...action.payload
                }
            })
            .addCase(Login.rejected, (state, action) => { })
    }
})

export default SigninSlice.reducer