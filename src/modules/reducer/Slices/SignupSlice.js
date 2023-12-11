import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Notify } from "./Notification";
import { Load } from "./LoadingSlice";
import axios from 'axios'
import { url } from "../../sizes/Sizes";

const initialState = {

}

export const CreateUser = createAsyncThunk(
    "Signup/CreateUser",
    async ({ data, navigate }, { dispatch }) => {
        try {
            dispatch(Load(true))
            const response = await axios.post(`${url}/signup`, data)
            console.log(response.data)
            dispatch(Load(false))
        } catch (e) {
            console.error(e)
            dispatch(Load(false))
            dispatch(Notify({ msg: 'Technical Error ! Please Try Again !' }))
        }
    }
)

export const PostOTP = createAsyncThunk(
    '"Signup/OTP',
    async ({ data }, { dispatch }) => {
        try {
            dispatch(Load(true))
            const response = await axios.post(`${url}/otp`, data)
            console.log(response)
            
        } catch (e) {
            console.error(e)
            dispatch(Load(false))
            dispatch(Notify({ msg: 'Technical Error ! Please Try Again !' }))
        }
    }
)

export const SignupSlice = createSlice({
    name: 'Signup',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(CreateUser.pending, (state, action) => {
                console.log(action)
            })
            .addCase(CreateUser.fulfilled, (state, action) => {
                console.log(action)
                action?.payload?.navigate('/otp')
            })
            .addCase(PostOTP.pending, (state, action) => {
                console.log(action)
            })
            .addCase(PostOTP.fulfilled, (state, action) => {
                console.log(action)
                action?.payload?.navigate('/usercreated')
            })
    }
})

export default SignupSlice.reducer