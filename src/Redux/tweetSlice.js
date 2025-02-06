import { createSlice } from '@reduxjs/toolkit';
export const tweetSlice = createSlice({
  name: 'tweets',
  initialState: [],
  reducers: {
    addTweet: (state, action) => {
      state.push(action.payload);
    },
    updateTweet: (state, action) => {
      const tweetIndex = state.findIndex((tweet) => tweet.id === action.payload.id);
      if (tweetIndex !== -1) {
        state[tweetIndex] = { ...state[tweetIndex], ...action.payload };
      }
    },
    clearTweets: () => [],
  },
});

export const { addTweet, updateTweet, clearTweets } = tweetSlice.actions;

export default tweetSlice.reducer;
