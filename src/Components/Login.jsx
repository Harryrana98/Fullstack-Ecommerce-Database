import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const [form, setForm] = useState({ email: "", password: "", role: "user" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "https://ecommerce-api-8ga2.onrender.com/api/user/login",
      form,
      { withCredentials: true }
    );

    if (response.data) {
      setForm({ email: "", password: "" });

      toast.success("Login Successful", {
        position: "bottom-right",
        autoClose: 1500,
      });

      // Wait for toast to show before navigating
      setTimeout(() => {
        navigate("/");
      }, 1600);
    }
  } catch (err) {
    toast.error(
      err.response?.data?.message || "Login Failed. Please check credentials.",
      {
        position: "bottom-right",
        autoClose: 3000,
      }
    );
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4" >
      <ToastContainer />
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-blue-100">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6 tracking-wide">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            Log In
          </button>
        </form>

        {/* Register Link */}
        <p className="text-sm text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 font-medium hover:underline">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
