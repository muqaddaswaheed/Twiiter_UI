// followSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const followSlice = createSlice({
  name: 'follow',
  initialState: {},
  reducers: {
    toggleFollow: (state, action) => {
      state[action.payload] = !state[action.payload];
    },
  },
});

export const { toggleFollow } = followSlice.actions;

export default followSlice.reducer;
