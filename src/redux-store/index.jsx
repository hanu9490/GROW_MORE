import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./slices/LoginSlice";
import JobPostingSlice from "./slices/JobPostingSlice";

const store = configureStore({
  reducer: {
    user: LoginSlice.reducer,
    job_posting: JobPostingSlice.reducer,
  },
});

export default store;
