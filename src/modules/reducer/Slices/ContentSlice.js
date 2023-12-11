import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Load } from "./LoadingSlice"
import axios from 'axios'
import { url } from "../../sizes/Sizes"

const initialState = {
    name: 'Client',
    url: 'https://tapewave.co.in/'
}

export const GetData = createAsyncThunk(
    "Content/GetData",
    // eslint-disable-next-line
    async ({ }, { dispatch }) => {
        try {
            dispatch(Load(true))

            const response = await axios.get(
                `${url}/dashboard`,
                {
                    headers: {
                        Authorization: `${localStorage.getItem('token')}`
                    }
                }
            )
            dispatch(Load(false))
            return (response.data)
        } catch (e) {
            dispatch(Load(false))
        }
    }
)

export const ContentSlice = createSlice({
    name: 'Content',
    initialState,
    reducers: {
        ContentUpdate: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
        URLUpdate: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(GetData.pending, (state, action) => { })
            .addCase(GetData.fulfilled, (state, action) => {
                return {
                    ...state,
                    ...action.payload
                }
            })
    }
})

export const { ContentUpdate, URLUpdate } = ContentSlice.actions
export default ContentSlice.reducer