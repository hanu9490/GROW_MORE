import { createSlice } from "@reduxjs/toolkit";

const intitialState = {
  contactedList: [],
  loading: false,
  error: null,
  createdContact: [],
};

const ContactSlice = createSlice({
  name: "contact",
  initialState: intitialState,
  reducers: {
    setContactedList: (state, action) => {
      state.contactedList = action.payload;
      state.loading = false;
      state.error = null;
    },
    setCreatedContact: (state, action) => {
      state.createdContact = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  setContactedList,
  setLoading,
  setError,
  setCreatedContact,
} = ContactSlice.actions;
export default ContactSlice;
