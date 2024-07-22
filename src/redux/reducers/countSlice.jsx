import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0
}

const countSlice = createSlice({
  name: "countSlice",
  initialState,
  reducers: {
    increment: (state)=>{
      state.count += 1;
    },
    decrement: (state)=>{
      state.count === 0 ? false : state.count -= 1;
    },
    addByPayload: (state, action) => {
      state.count += action.payload;
    } 
  }
})

export const {increment,decrement,addByPayload} = countSlice.actions;
export default countSlice.reducer;