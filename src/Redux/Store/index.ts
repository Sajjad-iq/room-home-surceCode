import { configureStore } from '@reduxjs/toolkit'
import imgReducer from '../Reducers/imgReducer'
const store = configureStore({
    reducer: {
        index: imgReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store

