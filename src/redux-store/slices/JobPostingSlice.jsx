import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alljobs: [],
  currentAppliedJob: null,
  loading: false,
  error: null,
};

const JobPostingSlice = createSlice({
  name: "jobPosting",
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.loading = action.payload;
    },
    setJobs: (state, action) => {
      state.alljobs = action.payload;
      state.loading = false;
    },
    setCurrentAppliedJob: (state, action) => {
      state.currentAppliedJob = action.payload;
      state.loading = false;
    },
  },
});

export const {
  setLoader,
  setJobs,
  setCurrentAppliedJob,
} = JobPostingSlice.actions;

export default JobPostingSlice;
