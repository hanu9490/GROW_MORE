import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginService } from "../../../services/LoginService";
import { login, setLoading } from "../../../redux-store/slices/LoginSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const loading = useSelector((state) => state.user.loading);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username === "" || password === "") {
      alert("Please enter username and password");
      return;
    }
    const payload = {
      username,
      password,
    };

    try {
      dispatch(setLoading(true));
      setErrorMessage("");

      // Calling the login service
      const response = await LoginService.Login(payload);
      console.log("response", response);
      if (response && response.status === 200) {
        // Successful login
        const { user, token } = response.data;
        dispatch(login({ user, token }));
        navigator("/admin/dashboard");
      } else if (response && response.status === 401) {
        setErrorMessage("Incorrect username or password. Please try again.");
      } else {
        setErrorMessage("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An error occurred during login. Please try again.");
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "100px" }}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
      <button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Submit"}
      </button>
      {loading && <div>Loading...</div>}
    </form>
  );
};

export default Login;
