import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    COLORS: {}
  },
  reducers: {
    setColor(state, action) {
      state.COLORS = action.payload;
    }
  }
});

export const themeSliceAction = themeSlice.actions;

export const themeSliceReducer = themeSlice.reducer;

export default themeSlice;
