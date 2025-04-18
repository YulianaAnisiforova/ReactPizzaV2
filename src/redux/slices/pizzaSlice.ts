import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {PizzaType} from '../../types/types'

export interface PizzaState {
    items: PizzaType[],
}

const initialState: PizzaState = {
    items: [],
}

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<PizzaType[]>) {
            state.items = action.payload
        },
    },
})

export const {
    setItems,
}
    = pizzaSlice.actions

export default pizzaSlice.reducer