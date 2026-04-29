import React from "react";
import { Container, Table, Badge } from "react-bootstrap";
import Header from "../Common/Header";
import Aside from "../Common/Aside";
import { useQuery } from "@tanstack/react-query";
import api from "../utils/AxiosConfig";

function ShowBookings() {
  // ✅ Fetch bookings (already joined from backend)
  const {
    data: bookings = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const response = await api.get("/admin/book/allbookings");
      return response.data.data;
    },
  });

  return (
    <div className="page-wrapper" id="main-wrapper" data-layout="vertical">
      <Aside />

      <div className="body-wrapper">
        <Header />

        <Container className="py-4">
          {/* Header */}
          <div className="mb-4">
            <h3>📄 Show Bookings</h3>
          </div>

          {/* Error */}
          {error && (
            <div className="text-danger mb-3">
              Error: {error.message}
            </div>
          )}

          {/* Table */}
          <div className="table-responsive">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>User</th>
                  <th>Game</th>
                  <th>Slot</th>
                  <th>Seat</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan="7" className="text-center">
                      Loading...
                    </td>
                  </tr>
                ) : bookings.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center">
                      No bookings found
                    </td>
                  </tr>
                ) : (
                  bookings.map((booking, index) => (
                    <tr key={booking._id}>
                      <td>{index + 1}</td>

                      {/* ✅ Direct from backend */}
                      <td>{booking.user_name || "N/A"}</td>
                      <td>{booking.game_name || "N/A"}</td>
                      <td>{booking.slot_time || "N/A"}</td>
                      <td>{booking.seat_no || "N/A"}</td>

                      {/* ✅ Formatted Date */}
                      <td>
                        {booking.date
                          ? new Date(booking.date).toLocaleDateString()
                          : "N/A"}
                      </td>

                      {/* ✅ Status Badge */}
                      <td>
                        <Badge
                          bg={
                            booking.status === "Confirmed"
                              ? "success"
                              : booking.status === "Pending"
                              ? "warning"
                              : "secondary"
                          }
                        >
                          {booking.status}
                        </Badge>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ShowBookings;