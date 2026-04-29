import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Common/Footer";
import { toast } from "react-toastify";
import api from "../utils/AxiosConfig";
import { useMutation } from "@tanstack/react-query";

function Feedback() {
  let navigate = useNavigate();

  const [hover, setHover] = useState(0);

  const [feedback, setFeedback] = useState({
    username: "",
    email: "",
    rating: 0,
    message: "",
    loginId: "",
    createdAt: new Date(),
  });

  function handleInputChange(e) {
    let { name, value } = e.target;
    setFeedback((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const FeedbackSubmit = async (feedback) => {
    let response = await api.post("/user/feedback/submit", feedback);
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: FeedbackSubmit,

    onSuccess: (data) => {
      toast.success("Feedback Submitted", {
        onClose: () => navigate("/"),
      });

      setFeedback({
        username: "",
        email: "",
        rating: 0,
        message: "",
        loginId: "",
        createdAt: new Date(),
      });
    },

    onError: () => {
      toast.error("Something went wrong");
    },
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (!feedback.rating || feedback.rating === 0) {
      toast.error("Please select a star rating");
      return;
    }

    mutation.mutate(feedback);
  }

  return (
    <>
      {/* Breadcrumb */}
      <div
        className="gt-breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: 'url("assets/img/breadcrumb.png")' }}
      >
        <div className="container">
          <div className="gt-page-heading">
            <h1>Feedback</h1>
            <ul className="gt-breadcrumb-items">
              <li><Link to="/">Home :</Link></li>
              <li className="color">Feedback</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Form */}
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <Card
              className="shadow-lg p-4"
              style={{ backgroundColor: "#1e293b", color: "white" }}
            >
              <h3 className="text-center mb-4">🎮 Game Feedback</h3>

              <Form onSubmit={handleSubmit}>
                {/* Name */}
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Enter your name"
                    value={feedback.username}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                {/* Email */}
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={feedback.email}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                {/* ⭐ Star Rating */}
                <Form.Group className="mb-3">
                  <Form.Label>Rating</Form.Label>
                  <div>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        size={30}
                        style={{ cursor: "pointer", marginRight: "5px" }}
                        color={
                          star <= (hover || feedback.rating)
                            ? "#ffc107"
                            : "#e4e5e9"
                        }
                        onClick={() =>
                          setFeedback((prev) => ({
                            ...prev,
                            rating: star,
                          }))
                        }
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                      />
                    ))}
                  </div>
                </Form.Group>

                {/* Message */}
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    placeholder="Write your feedback..."
                    value={feedback.message}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                {/* Submit */}
                <div className="d-grid">
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Submitting..." : "Submit Feedback"}
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Feedback;