import React, { useEffect, useState } from "react";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import Logout from "../utils/Logout";
import api from "../utils/AxiosConfig";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Profile() {
  let navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      let token = Cookie.get("token");

      const response = await api.get(
        "/user/profile",

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return response.data.user;
    },
  });

  const userProfile = data;

  console.log(userProfile);
  console.log("BASE URL:", import.meta.env.VITE_API_URL);

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card
        style={{
          width: "26rem",
          backgroundColor: "#1e293b",
          color: "white",
          borderRadius: "15px",
          boxShadow: "0 0 20px rgba(0,255,255,0.2)",
        }}
        className="p-3 shadow"
      >
        <h3 className="text-center mb-3">🎮 Profile</h3>

        <Form>
          <Form.Group className="mb-2">
            <Form.Label>Name</Form.Label>
            <Form.Control value={userProfile?.username} disabled />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control value={userProfile?.email} disabled />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Phone</Form.Label>
            <Form.Control value={userProfile?.phone} disabled />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control value={userProfile?.address} disabled />
          </Form.Group>

          <Row>
            <Col>
              <Button
                onClick={() => {
                  navigate("/editprofile");
                }}
                variant="primary"
                className="w-100"
              >
                ✏️ Edit Profile
              </Button>
            </Col>

            <Col>
              <Button
                variant="danger"
                className="w-100"
                onClick={() => {
                  Logout();
                }}
              >
                🚪 Logout
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
}

export default Profile;
