import { configureStore } from '@reduxjs/toolkit'

import userInfoReducer from './user/index'

export const store = configureStore({
    reducer: {
        user: userInfoReducer,
    },
})
