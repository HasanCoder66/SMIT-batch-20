import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './slices/counter.js'

export const store = configureStore({
    reducer: {
        counter : CounterReducer,
    }
})