import { configureStore } from '@reduxjs/toolkit'
import  cartReducer  from '../features/cart/cartSlice'
import { shopApi } from './services/shop'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [shopApi.reducerPath]: shopApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(shopApi.middleware)
})