import { createSlice } from "@reduxjs/toolkit"

const initialState = { count: 0 }

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      state.count += payload
    },
    decrement: (state, { payload }) => {
      state.count -= payload
    },
    setCounter: (state, { payload }) => {
      state.count = payload
    },
    resetCounter: (state, { payload }) => {
      state.count = initialState.count
    },
  },
})

export const { increment, decrement, setCounter, resetCounter } = counterSlice.actions
export default counterSlice.reducer
