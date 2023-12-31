import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Load } from "./LoadingSlice"
import axios from 'axios'
import { url } from "../../sizes/Sizes"
import { Notify } from "./Notification"

const initialState = {

}

export const UploadContent = createAsyncThunk(
    "Content/UploadContent",
    async ({ formData }, { dispatch }) => {
        try {
            dispatch(Load(true))
            // console.log(formData.url)
            axios.post(`${url}/card_url`, formData, {
                headers: {
                    Authorization: `${localStorage.getItem('token')}`
                }
            })
                .then(response => {
                    dispatch(Load(false))
                    dispatch(Notify({ msg: response.data?.msg }))
                    dispatch(GetCards({}, { dispatch }))
                    console.log(response.data)
                })
                .catch(e => {
                    dispatch(Notify({ msg: e.response.data?.msg }))
                    dispatch(Load(false))
                    console.error(e)
                })
        } catch (e) {
            console.error(e)
            dispatch(Notify({ msg: e.response.data?.msg }))
            dispatch(Load(false))
        }
    }
)

export const GetCards = createAsyncThunk(
    "Content/GetCards",
    // eslint-disable-next-line
    async ({ }, { dispatch }) => {
        try {
            dispatch(Load(true))
            const response = await axios.post(`${url}/card_data`, {}, {
                headers: {
                    Authorization: `${localStorage.getItem('token')}`
                }
            })

            dispatch(Load(false))
            return (response.data[0])

        } catch (e) {
            console.error(e)
            dispatch(Notify({ msg: e.response.data?.msg }))
            dispatch(Load(false))
        }
    }
)

const ContentSlice = createSlice({
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
            .addCase(UploadContent.pending, (state, action) => { })
            .addCase(UploadContent.fulfilled, (state, action) => {
                return {
                    ...state,
                    ...action.payload
                }
            })
            .addCase(GetCards.pending, (state, action) => {
                console.log(action.payload)
            })
            .addCase(GetCards.fulfilled, (state, action) => {
                return {
                    ...state,
                    ...action.payload
                }
            })
    }
})

export const { ContentUpdate, URLUpdate } = ContentSlice.actions
export default ContentSlice.reducer