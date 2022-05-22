import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter : 0, showcounter: true };

const counterSlice = createSlice({

    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increse(state, action) {
            state.counter = state.counter + action.payload
        },
        toggle(state) {
            state.showcounter = !state.showcounter
        }
    }
})

export const counterActions = counterSlice.actions;

export const counterReducer = counterSlice.reducer;