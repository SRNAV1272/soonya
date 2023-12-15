import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Load } from "./LoadingSlice";
import { Notify } from "./Notification";
import axios from 'axios'
import { url } from "../../sizes/Sizes";

const initialState = {

}

export const TapewaveCardGet = createAsyncThunk(
    "TapewaveCard/TapewaveCardGet",
    async ({ params, navigate }, { dispatch }) => {
        try {
            const formData = new FormData()
            formData.set('params', params)
            dispatch(Load(true))
            const response = await axios.post(`${url}/visiting_card_data`, formData)
            dispatch(Load(false))
            return (response.data[0])

        } catch (e) {
            console.error(e)
            dispatch(Load(false))
            dispatch(Notify({ msg: e.response.data.msg }))
            navigate('/error')
        }
    }
)

const TapewaveCardSlice = createSlice({
    name: 'TapewaveCard',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(TapewaveCardGet.pending, (state, action) => { })
            .addCase(TapewaveCardGet.fulfilled, (state, action) => {
                return {
                    ...action.payload
                }
            })
    }
})

export default TapewaveCardSlice.reducer
