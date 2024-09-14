// import React from "react";
// import { Navigate } from "react-router-dom";
// import { isTokenValid } from "../../../utils/JwtAuth"; // Ensure this is imported correctly
// import { useDispatch } from "react-redux";
// import { setTokenStatus } from "../../../redux-store/slices/LoginSlice";
// import { useSelector } from "react-redux";
// const PrivateRoute = ({ element }) => {
//   const dispatch = useDispatch();
//   const { isLoggedIn } = useSelector((state) => state.user);
//   dispatch(setTokenStatus(isTokenValid()));
//   console.log("isLoggedIn", isLoggedIn);
//   console.log("token valid", isTokenValid());

//   return isTokenValid() || isLoggedIn ? (
//     element
//   ) : (
//     <Navigate to="/admin/login" replace />
//   );
// };

// export default PrivateRoute;

import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { isTokenValid } from "../../../utils/JwtAuth"; // Ensure this is imported correctly
import { useDispatch, useSelector } from "react-redux";
import { setTokenStatus } from "../../../redux-store/slices/LoginSlice";

const PrivateRoute = ({ element }) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    const tokenValid = isTokenValid();
    dispatch(setTokenStatus(tokenValid));
  }, [dispatch]);

  const tokenValid = isTokenValid();

  if (!tokenValid || !isLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }
  return element;
};

export default PrivateRoute;
