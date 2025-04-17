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
            const findItem = state.items.find(obj => {
                return obj.id === action.payload.id
            })
            if (findItem) {
                findItem.count++
            } else {
                state.items.push({
                    ...action.payload, count: 1,
                })
            }

            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0)
        },
        minusItem(state, action: PayloadAction<number>) {
            const findItem = state.items.find(obj => {
                return obj.id === action.payload
            })
            if (findItem) {
                findItem.count--
            }
        },
        removeItem(state, action: PayloadAction<number>) {
            state.items = state.items.filter(obj => obj.id !== action.payload)
        },
        clearItems(state) {
            state.items = []
            state.totalPrice = 0
        },
    },
})

export const {addItem,
              removeItem,
              clearItems,
              minusItem
}
        = cartSlice.actions

export default cartSlice.reducer