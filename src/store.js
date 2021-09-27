import { configureStore } from '@reduxjs/toolkit'

import itemReducer from './features/itemState/itemSlice'

const store = configureStore({
    reducer: {
        item: itemReducer,
    },
})

export default store