import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userInfo: {},
  theme: "light",
  userType: "admin",
  token: "",
  loading: false,
};

const LoginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.userInfo = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("userInfo", JSON.stringify(action.payload.user));
      state.loading = false;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userInfo = {};
      localStorage.clear();
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { login, logout, setLoading } = LoginSlice.actions;

export default LoginSlice;
