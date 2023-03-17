import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    isOpen: false,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const item = state.items.find(el => el.id === action.payload.id)

            item
                ? item.quantity += 1
                : state.items.push({ ...action.payload, quantity: 1 })
        },
        deleteItem: (state, action) => {
            state.items = state.items
                .filter(el => el.id !== action.payload)
        },
        reset: (state) => {
            state.items = []
        },
        openCart: (state) => {
            state.isOpen = true;
        },
        closeCart: (state) => {
            state.isOpen = false;
        }
    },
})

// Action creators are generated for each case reducer function
export const { addItem, deleteItem, reset, openCart, closeCart } = cartSlice.actions

export default cartSlice.reducer