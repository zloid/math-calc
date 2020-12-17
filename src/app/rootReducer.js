import { combineReducers } from '@reduxjs/toolkit'
import calcLogic from '../features/calcLogic/calcLogicSlice'

const rootReducer = combineReducers({
    calcLogic,
})

export default rootReducer
