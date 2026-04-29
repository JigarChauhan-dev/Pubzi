import React, { useState } from "react";
import axios from "axios";
import Footer from "../Common/Footer";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Signup() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false); 
  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, formData);
      toast.success("Signup successful",{
        onClose : ()=>{
          window.location.href = "/"
        }
      })
    } catch (err) {
      toast.error("Login failed");
      console.log(err.response?.data || err.message);
    }
  };

  return (
    <>
      <div className="signup-container">
        <div className="signup-card">
          <h2 className="title">🎮 Create Account</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="👤 Username"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="📧 Email"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="📱 Phone"
              onChange={handleChange}
              required
            />
            <textarea
              name="address"
              placeholder="📍 Address"
              onChange={handleChange}
              required
            />

            {/* 🔒 Password with Eye Icon */}
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="🔒 Password"
                onChange={handleChange}
                required
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "35%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color:"gray"
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button
              type="submit"
              className="signup-btn"
              disabled={loading}
            >
              {loading ? "⏳ Signing Up..." : "🚀 Sign Up"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;