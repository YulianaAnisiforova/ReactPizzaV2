import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {CartType} from '../../types/types'

export interface CartState {
    totalPrice: number,
    items: CartType[],
}

const initialState: CartState = {
    totalPrice: 0,
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartType>) {
            state.items.push(action.payload)
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price + sum
            }, 0)
        },
        removeItem(state, action: PayloadAction<CartType>) {
            state.items = state.items.filter(obj => obj.id !== action.payload.id)
        },
        clearItems(state) {
            state.items = []
        },
    },
})

export const {addItem,
              removeItem,
              clearItems}
        = cartSlice.actions

export default cartSlice.reducer