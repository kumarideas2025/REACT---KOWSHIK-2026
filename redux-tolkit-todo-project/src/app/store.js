import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todoSlice'

export const store = configureStore({
    reducer: {
        todo: todoReducer  // key = slice name, value = reducer
    }
})



//addTodo--> how to get data.
// list or remove--> how to sent data.
// this make sure which are register inside me . i will take those value from reducer and update