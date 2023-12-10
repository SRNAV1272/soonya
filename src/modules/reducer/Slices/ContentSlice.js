import { createSlice } from "@reduxjs/toolkit"

const initialState = {
}

export const ContentSlice = createSlice({
    name: 'Content',
    initialState,
    reducers: {
        ContentUpdate: (state, action) => {
            // console.log(action.payload)
            return {
                ...state,
                ...action.payload
            }
        }
    }
})

export const { ContentUpdate } = ContentSlice.actions
export default ContentSlice.reducer