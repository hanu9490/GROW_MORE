import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./slices/LoginSlice";
import JobPostingSlice from "./slices/JobPostingSlice";
import ContactSlice from "./slices/ContactSlice";

const store = configureStore({
  reducer: {
    user: LoginSlice.reducer,
    job_posting: JobPostingSlice.reducer,
    contact: ContactSlice.reducer,
  },
});

export default store;
