import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    displayData: '0',
}

const calcLogicSlice = createSlice({
    name: 'digitsOnDisplay',
    initialState,
    reducers: {},
})

export default calcLogicSlice.reducer
