import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface FilterState {
    categoryId: number,
    sortType: { name: string, sortProperty: string },
    orderType: string,
}

const initialState: FilterState = {
    categoryId: 0,
    sortType: {name: 'популярности', sortProperty: 'rating'},
    orderType: 'asc',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload
        },
        setSortType(state, action: PayloadAction<{name: string, sortProperty: string}>) {
            state.sortType = action.payload
        },
        setOrderType(state, action: PayloadAction<string>) {
            state.orderType = action.payload
        },
        setFilters(state, action: PayloadAction<any>) {
            state.categoryId = Number(action.payload.categoryId)
            state.sortType.sortProperty = action.payload.sortProperty
            state.orderType = action.payload.orderType
        },
    },
})

export const {setCategoryId,
        setSortType,
        setOrderType,
        setFilters}
        = filterSlice.actions

export default filterSlice.reducer