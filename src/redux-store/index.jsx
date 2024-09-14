import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./slices/LoginSlice";

const store = configureStore({
  reducer: {
    user: LoginSlice.reducer,
  },
});

export default store;
