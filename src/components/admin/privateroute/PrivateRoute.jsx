import React from "react";
import { Navigate } from "react-router-dom";
import { isTokenValid } from "../../../utils/JwtAuth"; // Ensure this is imported correctly
import { useDispatch } from "react-redux";
import { setTokenStatus } from "../../../redux-store/slices/LoginSlice";
const PrivateRoute = ({ element }) => {
  const dispatch = useDispatch();
  dispatch(setTokenStatus(isTokenValid()));
  console.log("token valid", isTokenValid());

  return isTokenValid() ? element : <Navigate to="/admin/login" replace />;
};

export default PrivateRoute;
