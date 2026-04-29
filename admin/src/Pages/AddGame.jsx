import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../Common/Header";
import Aside from "../Common/Aside";
import api from "../utils/AxiosConfig";
import { toast } from "react-toastify";

function AddGame() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "Active",
    image: null,
  });

  const [loading, setLoading] = useState(false);

  // ✅ Handle text inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Handle file input
  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  // ✅ Submit form (FormData for multer)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("status", formData.status);
      formDataToSend.append("image", formData.image);

      await api.post("/admin/game/addgame", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Game added successfully", {
          onClose: () => {
            navigate("/managegames");
          },
        });

      // ✅ Correct route
      
    } catch (error) {
      console.error(error);
      toast.error("Error adding game");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-wrapper" id="main-wrapper" data-layout="vertical">
      <Aside />

      <div className="body-wrapper">
        <Header />

        <Container className="py-4">
          <h3 className="mb-4">➕ Add Game</h3>

          <Card className="p-4 shadow-sm">
            <Form onSubmit={handleSubmit}>
              {/* Game Name */}
              <Form.Group className="mb-3">
                <Form.Label>Game Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter game name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Description */}
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  placeholder="Enter description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* ✅ File Upload */}
              <Form.Group className="mb-3">
                <Form.Label>Upload Image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />

                {/* ✅ Preview */}
                {formData.image && (
                  <img
                    src={URL.createObjectURL(formData.image)}
                    alt="preview"
                    style={{
                      width: "120px",
                      marginTop: "10px",
                      borderRadius: "5px",
                    }}
                  />
                )}
              </Form.Group>

              {/* Status */}
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

              {/* Buttons */}
              <div className="d-flex gap-2">
                <Button type="submit" variant="success" disabled={loading}>
                  {loading ? "Adding..." : "Add Game"}
                </Button>

                <Button
                  variant="secondary"
                  onClick={() => navigate("/managegames")}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </Card>
        </Container>
      </div>
    </div>
  );
}

export default AddGame;