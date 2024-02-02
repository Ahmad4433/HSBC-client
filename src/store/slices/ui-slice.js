import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    loading: false,
    error: null,
    statusCode:null,
  },
  reducers: {
    startLoading(state, action) {
      state.loading = true;
    },
    stopLoading(state, action) {
      state.loading = false;
    },
    showError(state, action) {
      state.error = action.payload;
    },
    sendStatus(state,action){

      state.statusCode = action.payload
    }
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
