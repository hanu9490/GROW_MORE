import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobApplications: [],
  loading: false,
  error: null,
};

const JobApplicationSlice = createSlice({
  name: "jobApplications",
  initialState,
  reducers: {
    setLoader: (state, { payload }) => {
      state.loading = payload;
    },
    fetchJobApplicationsSuccess: (state, { payload }) => {
      state.jobApplications = payload;
      state.loading = false;
      state.error = null;
    },
    fetchJobApplicationsFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const {
  setLoader,
  fetchJobApplicationsSuccess,
  fetchJobApplicationsFailure,
} = JobApplicationSlice.actions;

export default JobApplicationSlice;
