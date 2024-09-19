import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./slices/LoginSlice";
import JobPostingSlice from "./slices/JobPostingSlice";
import ContactSlice from "./slices/ContactSlice";
import JobApplicationSlice from "./slices/JobApplicationSlice";

const store = configureStore({
  reducer: {
    user: LoginSlice.reducer,
    job_posting: JobPostingSlice.reducer,
    contact: ContactSlice.reducer,
    job_application: JobApplicationSlice.reducer,
  },
});

export default store;
