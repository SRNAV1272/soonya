import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Notify } from "./Notification";
import { Load } from "./LoadingSlice";
import axios from 'axios'
import { url } from "../../sizes/Sizes";

const initialState = {}

export const CreateUser = createAsyncThunk(
    "Signup/CreateUser",
    async ({ data, navigate }, { dispatch }) => {
        try {
            dispatch(Load(true))
            const response = await axios.post(`${url}/signup`, data)
            dispatch(Notify({ msg: response.data.msg }))
            navigate('/otp')
            dispatch(Load(false))
        } catch (e) {
            console.error(e)
            dispatch(Load(false))
            dispatch(Notify({ msg: e.response.data.msg ? e.response.data.msg : 'Technical Error ! Please Try Again !' }))
        }
    }
)

export const PostOTP = createAsyncThunk(
    '"Signup/OTP',
    async ({ data, navigate }, { dispatch }) => {
        try {
            dispatch(Load(true))
            const response = await axios.post(`${url}/otp`, data)
            dispatch(Notify({ msg: response.data.msg }))
            navigate('/signin')
            dispatch(Load(false))
        } catch (e) {
            dispatch(Load(false))
            dispatch(Notify({ msg: e.response.data.msg ? e.response.data.msg : 'Technical Error ! Please Try Again !' }))
        }
    }
)

const SignupSlice = createSlice({
    name: 'Signup',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(CreateUser.pending, (state, action) => {})
            .addCase(CreateUser.fulfilled, (state, action) => {})
            .addCase(PostOTP.pending, (state, action) => {})
            .addCase(PostOTP.fulfilled, (state, action) => {})
    }
})

export default SignupSlice.reducer