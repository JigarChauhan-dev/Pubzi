import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../Common/Header";
import Aside from "../Common/Aside";
import api from "../utils/AxiosConfig";
import { toast } from "react-toastify";

function AddSlot() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    game_id: "",
    slot_time_start: "",
    slot_time_end: "",
    duration: "",
    price: "",
    status: "AVAILABLE",
  });

  const [loading, setLoading] = useState(false);

  // ✅ Handle inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await api.post("/admin/gameslot/addgameslot", formData);

      toast.success("Slot added successfully", {
        onClose: () => {
          navigate("/manageslots");
        },
      });
    } catch (error) {
      console.error(error);
      toast.error("Error adding slot");
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
          <h3 className="mb-4">➕ Add Slot</h3>

          <Card className="p-4 shadow-sm">
            <Form onSubmit={handleSubmit}>
              {/* Game ID */}
              <Form.Group className="mb-3">
                <Form.Label>Game ID</Form.Label>
                <Form.Control
                  type="text"
                  name="game_id"
                  placeholder="Enter game ID"
                  value={formData.game_id}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Start Time */}
              <Form.Group className="mb-3">
                <Form.Label>Start Time</Form.Label>
                <Form.Control
                  type="time"
                  name="slot_time_start"
                  value={formData.slot_time_start}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* End Time */}
              <Form.Group className="mb-3">
                <Form.Label>End Time</Form.Label>
                <Form.Control
                  type="time"
                  name="slot_time_end"
                  value={formData.slot_time_end}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Duration */}
              <Form.Group className="mb-3">
                <Form.Label>Duration (minutes)</Form.Label>
                <Form.Control
                  type="number"
                  name="duration"
                  placeholder="Enter duration"
                  value={formData.duration}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Price */}
              <Form.Group className="mb-3">
                <Form.Label>Price (₹)</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  placeholder="Enter price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Status */}
              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="AVAILABLE">AVAILABLE</option>
                  <option value="BOOKED">BOOKED</option>
                </Form.Select>
              </Form.Group>

              {/* Buttons */}
              <div className="d-flex gap-2">
                <Button type="submit" variant="success" disabled={loading}>
                  {loading ? "Adding..." : "Add Slot"}
                </Button>

                <Button
                  variant="secondary"
                  onClick={() => navigate("/manageslots")}
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

export default AddSlot;
