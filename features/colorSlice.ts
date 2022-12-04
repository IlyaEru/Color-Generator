import { createSlice } from '@reduxjs/toolkit';

export const colorSlice = createSlice({
  name: 'color',
  initialState: '#f15025',
  reducers: {
    changeColor: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeColor } = colorSlice.actions;

export default colorSlice.reducer;
