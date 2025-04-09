import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface FilterState {
    categoryId: number,
    sortType: { name: string, sortProperty: string },
}

const initialState: FilterState = {
    categoryId: 0,
    sortType: {name: 'популярности', sortProperty: 'rating'},
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {setCategoryId}
    = filterSlice.actions

export default filterSlice.reducer