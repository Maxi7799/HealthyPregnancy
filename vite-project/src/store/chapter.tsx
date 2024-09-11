import { createSlice } from "@reduxjs/toolkit";

const initialState = { chapter: null };

const chapterSet = createSlice({
  name: "chapter",
  initialState,

  reducers: {
    setTitle: (state, payload) => {
      console.log(payload.payload);
      state.chapter = payload.payload;
    },
    // setText: (state) => {},
  },
});

export const { setTitle } = chapterSet.actions;

export default chapterSet.reducer;
