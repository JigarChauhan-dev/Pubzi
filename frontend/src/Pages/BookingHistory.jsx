import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import api from "../utils/AxiosConfig";
import { Link } from "react-router-dom";

function BookingHistory() {
  const formatTime = (time) => {
    if (!time) return "N/A"; // ✅ prevent crash

    const [hour, minute] = time.split(":");
    let h = parseInt(hour);
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;

    return `${h}:${minute} ${ampm}`;
  };

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["booking-history"],
    queryFn: async () => {
      const res = await api.get("/user/book/all");
      return res.data.data;
    },
  });

  return (
    <>
      {/* Breadcrumb Section (Same as About Page) */}
      <div
        className="gt-breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: 'url("assets/img/breadcrumb.png")' }}
      >
        <div className="container">
          <div className="gt-page-heading">
            <div className="gt-breadcrumb-sub-title">
              <h1>🎮 Booking History</h1>
            </div>
            <ul className="gt-breadcrumb-items">
              <li>
                <i className="fa-solid fa-house" />
              </li>
              <li>
                <Link to="/game">Games :</Link>
              </li>
              <li className="color">Booking History</li>
            </ul>
          </div>
        </div>
      </div>
      <Container fluid className="py-5 px-4">
        {/* 📦 BOOKINGS LIST */}
        <Row className="g-4">
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <Col lg={4} md={6} sm={12} key={booking._id}>
                <Card className="bg-dark text-white h-100 shadow">
                  {/* 🎮 GAME IMAGE */}
                  <Card.Img
                    variant="top"
                    src={
                      booking.game?.image
                        ? `${api.defaults.baseURL}/uploads/game/${booking.game.image}`
                        : "/assets/img/default-game.png"
                    }
                    style={{ height: "200px", objectFit: "cover" }}
                  />

                  <Card.Body>
                    {/* 🎮 GAME NAME */}
                    <Card.Title>{booking.game?.name}</Card.Title>

                    {/* ⏰ SLOT */}
                    <p className="mb-1">
                      🕒{" "}
                      {booking.slot?.slot_time_start
                        ? `${formatTime(booking.slot.slot_time_start)} - ${formatTime(booking.slot.slot_time_end)}`
                        : "No Slot Info"}
                    </p>

                    {/* 💺 SEAT */}
                    <p className="mb-2">
                      💺 Seat:{" "}
                      <Badge bg="success">{booking.seat?.seat_no}</Badge>
                    </p>

                    {/* STATUS */}
                    <Badge bg="info">Booked</Badge>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center text-light">No bookings found</p>
          )}
        </Row>
      </Container>
    </>
  );
}

export default BookingHistory;
