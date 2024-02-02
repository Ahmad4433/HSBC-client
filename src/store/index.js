import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./slices/ui-slice";
import loginSlice from "./slices/login-slice";
const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    login:loginSlice.reducer
  
  },
});

export default store;
