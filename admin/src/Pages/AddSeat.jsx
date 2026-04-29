import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../Common/Header";
import Aside from "../Common/Aside";
import api from "../utils/AxiosConfig";
import { toast } from "react-toastify";

function AddSeat() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    game_id: "",
    seat_no: "",
    status: "AVAILABLE",
  });

  const [loading, setLoading] = useState(false);

  // ✅ Handle input change
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

      await api.post("/admin/gameseat/addseat", formData);

      toast.success("Seat added successfully", {
        onClose: () => navigate("/manageseats"),
      });

    } catch (error) {
      console.error(error);

      // ✅ Show backend message if exists
      toast.error(
        error.response?.data?.message || "Error adding seat"
      );
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
          <h3 className="mb-4" >💺 Add Seat</h3>

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

              {/* Seat Number */}
              <Form.Group className="mb-3">
                <Form.Label>Seat Number</Form.Label>
                <Form.Control
                  type="text"
                  name="seat_no"
                  placeholder="Enter seat number (e.g. A1, B2)"
                  value={formData.seat_no}
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
                  {loading ? "Adding..." : "Add Seat"}
                </Button>

                <Button
                  variant="secondary"
                  onClick={() => navigate("/manageseats")}
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

export default AddSeat;