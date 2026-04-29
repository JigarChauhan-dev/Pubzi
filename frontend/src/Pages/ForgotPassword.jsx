import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  console.log(formData);

  const ForgotPassword = async (formData) => {
    const res = await axios.post(
      "http://localhost:8000/api/user/password/forgotpassword",
      formData,
    );
    return Response.data;
  };

  const mutation = useMutation({
    mutationFn: ForgotPassword,
    onSuccess: () => {
      if (res.data.status) {
        toast.success("Password reset link sent to your email.")
        setMessage("Password reset link sent to your email.");
      } else {
        toast.error("Email not found.");
        setMessage("Email not found.");
      }
    },
    onError: () => {
      setMessage("Something went wrong. Try again.");
    },
  });

  async function handleSubmit(e) {
    e.preventDefault();
    mutation.mutate(formData);
  }

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card
          className="p-4 shadow"
          style={{
            width: "400px",
            borderRadius: "12px",
            color: "white",
            backgroundColor: "#1e293b",
          }}
        >
          <h3 className="text-center mb-3">🔐 Forgot Password</h3>

          <Form onSubmit={handleSubmit}>
            {/* Email */}
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="📧 Enter your email" name="email" value={formData.email} onChange={handleChange} />
            </Form.Group>

            {/* Button */}
            <Button
              variant="primary"
              type="submit"
              className="w-100"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Sending..." : "Send Reset Link"}
            </Button>
          </Form>

          {/* Back to login */}
          <div className="text-center mt-3">
            <Link
              to="/login"
              className="text-decoration-none"
              style={{ fontSize: "14px" }}
            >
              ← Back to Login
            </Link>
          </div>
        </Card>
      </Container>
    </>
  );
}

export default ForgotPassword;
