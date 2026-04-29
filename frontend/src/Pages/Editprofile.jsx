import React, { useEffect, useState } from "react";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import api from "../utils/AxiosConfig";

function Editprofile() {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState({});

  // ✅ FETCH PROFILE
  const { data, isLoading, isError } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const token = Cookie.get("token");

      const res = await api.get(
        "/user/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data.user;
    },
  });

  // ✅ Sync API data → state
  useEffect(() => {
    if (data) {
      setUserProfile(data);
    }
  }, [data]);

  // ✅ UPDATE PROFILE API
  const updateProfile = async (formData) => {
    const token = Cookie.get("token");

    if (!formData._id) throw new Error("User not loaded");

    const res = await api.put(
      `/user/update/${formData._id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.data;
  };

  const mutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      toast.success("Profile Updated Successfully..", {
        onClose: () => navigate("/profile"),
      });
    },
    onError: () => {
      toast.error("Update Failed");
    },
  });


  if (isLoading) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  // ✅ Error state
  if (isError) {
    return <h3 className="text-center mt-5">Something went wrong</h3>;
  }

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
        <h3 className="text-center mb-3">🎮 Edit Profile</h3>

        <Form>
          {/* NAME */}
          <Form.Group className="mb-2">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={userProfile?.username || ""}
              onChange={(e) =>
                setUserProfile({
                  ...userProfile,
                  username: e.target.value,
                })
              }
            />
          </Form.Group>

          {/* EMAIL */}
          <Form.Group className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={userProfile?.email || ""}
              onChange={(e) =>
                setUserProfile({
                  ...userProfile,
                  email: e.target.value,
                })
              }
            />
          </Form.Group>

          {/* PHONE */}
          <Form.Group className="mb-2">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              value={userProfile?.phone || ""}
              onChange={(e) =>
                setUserProfile({
                  ...userProfile,
                  phone: e.target.value,
                })
              }
            />
          </Form.Group>

          {/* ADDRESS */}
          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              value={userProfile?.address || ""}
              onChange={(e) =>
                setUserProfile({
                  ...userProfile,
                  address: e.target.value,
                })
              }
            />
          </Form.Group>

          <Row>
            {/* SAVE BUTTON */}
            <Col>
              <Button
                onClick={() => mutation.mutate(userProfile)}
                variant="success"
                className="w-100"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? "Saving..." : "💾 Save"}
              </Button>
            </Col>

            {/* BACK BUTTON */}
            <Col>
              <Button
                onClick={() => navigate("/profile")}
                variant="secondary"
                className="w-100"
              >
                ⬅ Back
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
}

export default Editprofile;