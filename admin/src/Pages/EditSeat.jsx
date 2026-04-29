import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Common/Header";
import Aside from "../Common/Aside";
import api from "../utils/AxiosConfig";
import { toast } from "react-toastify";

function EditSeat() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    game_id: state?.game_id || "",
    seat_no: state?.seat_no || "",
    status: state?.status || "Available",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.put(`/admin/gameseat/editseats/${state._id}`, formData);

      toast.success("Seat updated successfully", {
        onClose: () => navigate("/manageseats"),
      });
    } catch (error) {
      console.error(error);
      toast.error("Error updating seat");
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
            <h3>💺 Edit Seat</h3>

            <Button
              variant="secondary"
              onClick={() => navigate("/manageseats")}
            >
              ⬅ Back
            </Button>
          </div>

          <Form onSubmit={handleSubmit}>
            
            {/* Game ID (read only) */}
            <Form.Group className="mb-3">
              <Form.Label>Game ID</Form.Label>
              <Form.Control value={formData.game_id} disabled />
            </Form.Group>

            {/* Seat Number */}
            <Form.Group className="mb-3">
              <Form.Label>Seat Number</Form.Label>
              <Form.Control
                type="text"
                name="seat_no"
                value={formData.seat_no}
                onChange={handleChange}
                disabled={loading}
              />
            </Form.Group>

            {/* Status */}
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={formData.status}
                onChange={handleChange}
                disabled={loading}
              >
                <option value="Available">Available</option>
                <option value="Booked">Booked</option>
                <option value="Blocked">Blocked</option>
              </Form.Select>
            </Form.Group>

            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2"></span>
                  Updating...
                </>
              ) : (
                "Update Seat"
              )}
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default EditSeat;