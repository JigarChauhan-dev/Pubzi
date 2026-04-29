import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Common/Header";
import Aside from "../Common/Aside";
import api from "../utils/AxiosConfig";
import { toast } from "react-toastify";

function EditGame() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: state?.name || "",
    description: state?.description || "",
    status: state?.status || "Active",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("status", formData.status);

      if (formData.image) {
        data.append("image", formData.image);
      }

      await api.put(`/admin/game/editgame/${state._id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Game updated successfully", {
        onClose: () => navigate("/managegames"),
      });
    } catch (error) {
      console.error(error);
      toast.error("Error updating game");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="page-wrapper" id="main-wrapper" data-layout="vertical">
      {/* Sidebar */}
      <Aside />

      <div className="body-wrapper">
        {/* Header */}
        <Header />

        <Container className="py-4">
          {/* Top Bar */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3>✏️ Edit Game</h3>

            {/* Back Button */}
            <Button
              variant="secondary"
              onClick={() => navigate("/managegames")}
            >
              ⬅ Back
            </Button>
          </div>

          {/* Form */}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" name="image" onChange={handleChange} />
            </Form.Group>

            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2"></span>
                  Updating...
                </>
              ) : (
                "Update Game"
              )}
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default EditGame;