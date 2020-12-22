import { createSlice } from '@reduxjs/toolkit'
import { selectCorrectRegExpForCalcScreen } from './selectCorrectRegExpForCalcScreen'
import { selectCalcResult } from './selectCalcResult'

/**
 * Interface for initialState
 * @typedef {Object} CalcStateInterface
 */

/**
 * @type {CalcStateInterface} initialState
 */
const initialState = {
    displayData: '0',
}

const calcLogicSlice = createSlice({
    name: 'calc',
    initialState,
    reducers: {
        addButtonValueToScreen(state, action) {
            state.displayData = selectCorrectRegExpForCalcScreen(
                state,
                action.payload
            )
        },
        doEqual(state) {
            state.displayData = selectCalcResult(state)
        },
        clearAllFromCalcScreen(state) {
            state.displayData = '0'
        },
    },
})

export const {
    addButtonValueToScreen,
    doEqual,
    clearAllFromCalcScreen,
} = calcLogicSlice.actions

export default calcLogicSlice.reducer
