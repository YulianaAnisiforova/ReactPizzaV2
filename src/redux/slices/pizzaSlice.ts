import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {PizzaType} from '../../types/types'
import axios from 'axios'

type FetchPizzasParams = {
    category: string;
    sort: string;
    order: string;
    search: string;
}

export const fetchPizzasThunk = createAsyncThunk(
    'pizza/fetchPizzasStatus',
    async ({category, sort, order, search}: FetchPizzasParams) => {
        const response = await axios.get<PizzaType[]>
            (`https://67ed3c154387d9117bbcda09.mockapi.io/items?${category}${sort}${order}${search}`)
        return response.data
    },
)

export interface PizzaState {
    items: PizzaType[],
    status: 'loading' | 'success' | 'error',
}

const initialState: PizzaState = {
    items: [],
    status: 'loading',
}

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<PizzaType[]>) {
            state.items = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzasThunk.pending, (state) => {
                state.status = 'loading'
                state.items = []
            })
            .addCase(fetchPizzasThunk.fulfilled, (state, action) => {
                state.status = 'success'
                state.items = action.payload
            })
            .addCase(fetchPizzasThunk.rejected, (state) => {
                state.status = 'error'
                state.items = []
            })
    }
})

export const {
    setItems,
}
    = pizzaSlice.actions

export default pizzaSlice.reducer