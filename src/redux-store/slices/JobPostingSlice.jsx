import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobPostings: [],
  jobPosting: {},
  loading: false,
  error: null,
};

const JobPostingSlice = createSlice({
  name: "jobPosting",
  initialState,
  reducers: {
    getJobPosting: (state) => {
      state.loading = true;
    },
    getJobPostingSuccess: (state, { payload }) => {
      state.jobPostings = payload;
      state.loading = false;
    },
    getJobPostingFailure: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    addJobPosting: (state) => {
      state.loading = true;
    },
    addJobPostingSuccess: (state, { payload }) => {
      state.jobPosting = payload;
      state.loading = false;
    },
    addJobPostingFailure: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    editJobPosting: (state) => {
      state.loading = true;
    },
    editJobPostingSuccess: (state, { payload }) => {
      state.jobPosting = payload;
      state.loading = false;
    },
    editJobPostingFailure: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    deleteJobPosting: (state) => {
      state.loading = true;
    },
    deleteJobPostingSuccess: (state, { payload }) => {
      state.jobPosting = payload;
      state.loading = false;
    },
    deleteJobPostingFailure: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const {
  getJobPosting,
  getJobPostingSuccess,
  getJobPostingFailure,
  addJobPosting,
  addJobPostingSuccess,
  addJobPostingFailure,
  editJobPosting,
  editJobPostingSuccess,
  editJobPostingFailure,
  deleteJobPosting,
  deleteJobPostingSuccess,
  deleteJobPostingFailure,
} = JobPostingSlice.actions;

export default JobPostingSlice;
