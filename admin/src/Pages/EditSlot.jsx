import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Common/Header";
import Aside from "../Common/Aside";
import api from "../utils/AxiosConfig";
import { toast } from "react-toastify";

function EditSlot() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    game_id: state?.game_id || "",
    slot_time_start: state?.slot_time_start || "",
    slot_time_end: state?.slot_time_end || "",
    duration: state?.duration || "",
    price: state?.price || "",
    status: state?.status || "Active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.put(`/admin/gameslot/editslot/${state._id}`, formData);

      toast.success("Slot updated successfully", {
        onClose: () => navigate("/manageslots"),
      });
    } catch (error) {
      console.error(error);
      toast.error("Error updating slot");
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
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3>⏱ Edit Slot</h3>

            <Button
              variant="secondary"
              onClick={() => navigate("/manageslots")}
            >
              ⬅ Back
            </Button>
          </div>

          {/* Form */}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Game ID</Form.Label>
              <Form.Control
                type="text"
                name="game_id"
                value={formData.game_id}
                onChange={handleChange}
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Start Time</Form.Label>
              <Form.Control
                type="time"
                name="slot_time_start"
                value={formData.slot_time_start}
                onChange={handleChange}
                disabled={loading}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>End Time</Form.Label>
              <Form.Control
                type="time"
                name="slot_time_end"
                value={formData.slot_time_end}
                onChange={handleChange}
                disabled={loading}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Duration (minutes)</Form.Label>
              <Form.Control
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                disabled={loading}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                disabled={loading}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={formData.status}
                onChange={handleChange}
                disabled={loading}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Form.Select>
            </Form.Group>

            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2"></span>
                  Updating...
                </>
              ) : (
                "Update Slot"
              )}
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default EditSlot;
