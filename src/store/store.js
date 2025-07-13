import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../store/counterSlice'

export const store = configureStore({
    reducer:{
        cart:counterReducer
    }
})

