import React, { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";
import apiClient from "../../api/client";
import useAuth from "../../auth/useAuth";

const LoginForm = () => {
  const { logIn } = useAuth();
  // const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //const [loginUser, { isLoading }] = useLoginUserMutation();
  //console.log(loginUser)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { email, password } = formData;
    if (!email) {
      toast.error("Valid Email Address is required.");
      return false;
    }
    // if (!password || password.length > 8) {
    //   toast.error("Password must be at least 8 characters long.");
    //   return false;
    // }
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await apiClient.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });
      console.log(response.data);
      if (response.ok) {
        logIn(response.data.token);
      }
      navigate("/main")
      console.log(response.data)
    } catch (error) {
      const errorMessage =
        error.data?.message || "An unexpected error occurred.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="min-h-[57vh] bg-white flex items-center justify-center px-4">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#85132c]"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#85132c]"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            //disabled={isLoading}
            className="w-full font-bold py-2 px-4 rounded transition duration-200 bg-[#85132c] text-white"
          >
            Login
            {/* {isLoading ? "Logging in..." : "Login"} */}
          </button>
        </form>
        <ToastContainer />
        <div className="w-full text-gray-700 text-center mt-3 pr-4 rounded">
          Don't have an account?{" "}
          <a
            href="/register"
            className="bg-[#85132c] text-white rounded-lg p-1"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
