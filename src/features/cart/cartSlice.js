import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem: (state, actions)=> {
            const existingItem = state.items.findIndex((item) => item.id === actions.payload.id)
            if (!existingItem) {
                state.items = [...state.items, actions.payload]
            } else {
                state.items = state.items.map((item) => {
                    if (item.id === actions.payload.id){
                        return {...item, quantity: item.quantity +1}
                    } 
                    return item
                })
            }
            state.total = state.items.reduce((acc, item) => acc = acc + item.price, 0)
        },
        deleteCartItem: (state, actions) => {
            state.items = state.items.filter((item) => item.id !== actions.payload)
            state.total = state.items.reduce((acc, item) => acc = acc - item.price, 0)
        },
        }
    }
)

export const { addCartItem, deleteCartItem } = cartSlice.actions
export default cartSlice.reducer