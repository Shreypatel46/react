import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../feature/todo/todoSlice'
// store needs knowledge of reducer
export const store= configureStore({
    reducer:todoReducer
})