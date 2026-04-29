import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import api from "../utils/AxiosConfig";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const { token } = useParams();

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const ResetPassword = async (formData) => {
    const response = await api.post("/user/resetpassword/reset-password", {
      token: token,
      password: formData.password,
    });
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: ResetPassword,

    onSuccess: () => {
      toast.success("Password reset successful", {
        onClose: () => {
          window.location.href = "/login";
        },
      });
    },

    onError: () => {
      toast.error("Reset password failed");
    },
  });

  async function handleSubmit(e) {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.success("Passwords do not match");
      return;
    }

    mutation.mutate(formData);
  }

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card
        className="p-4 shadow"
        style={{
          width: "400px",
          borderRadius: "12px",
          backgroundColor: "#1e293b",
          color: "white",
        }}
      >
        <h3 className="text-center mb-3">🔑 Reset Password</h3>

        <Form onSubmit={handleSubmit}>
          

          {/* Confirm Password */}
          <Form.Group className="mb-3">
            

            {/* New Password */}
            <Form.Group className="mb-3">
              <Form.Label>New Password</Form.Label>

              <div style={{ position: "relative" }}>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter new password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: "gray",
                  }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </Form.Group>

            {/* Confirm Password */}
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>

              <div style={{ position: "relative" }}>
                <Form.Control
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />

                <span
                  onClick={() => setShowConfirm(!showConfirm)}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: "gray",
                  }}
                >
                  {showConfirm ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </Form.Group>
          </Form.Group>

          {/* Submit Button */}
          <Button variant="success" type="submit" className="w-100" disabled={mutation.isPending}>
            {mutation.isPending ? "Resetting Password..." : "Reset Password"}
          </Button>
        </Form>

        {/* Back to login */}
        <div className="text-center mt-3">
          <Link
            to="/login"
            className="text-decoration-none"
            style={{ fontSize: "14px", color: "#9ca3af" }}
          >
            ← Back to Login
          </Link>
        </div>
      </Card>
    </Container>
  );
}

export default ResetPassword;
