import React, { useState } from "react";
import axios from "axios";
import Footer from "../Common/Footer";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newError = {};

    if (!formData.email) {
      newError.email = "Email is required";
    }

    if (!formData.password) {
      newError.password = "Password is required";
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        formData,
      );

      Cookie.set("token", res.data.token);

      toast.success("Login Successful", {
        onClose: () => {
          window.location.href = "/";
        },
      });
    } catch (err) {
      console.log(err.response?.data || err.message);

      toast.error("Login failed");
      console.log(err.response?.data?.message);
    }
  };

  return (
    <>
      <div className="signup-container">
        <div className="signup-card">
          <h2 className="title">🔐 Login</h2>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="📧 Email"
              value={formData.email}
              onChange={handleChange}
            />
            {error.email && <p style={{ color: "red" }}>{error.email}</p>}

            {/* Password */}
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="🔒 Password"
                value={formData.password}
                onChange={handleChange}
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "18%",
                  cursor: "pointer",
                  color: "gray",
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {error.password && <p style={{ color: "red" }}>{error.password}</p>}
            <div
              style={{
                textAlign: "right",
                marginBottom: "10px",
              }}
            >
              <Link
                to="/forgotpassword"
                style={{
                  fontSize: "13px",
                  textDecoration: "none",
                  color: "#6c757d",
                }}
              >
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className="signup-btn" disabled={loading}>
              {loading ? "⏳ Logging in..." : "🚀 Login"}
            </button>

            <p style={{ marginTop: "10px", color: "#6c757d", marginLeft: "20px" }}>
              Don’t have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;
