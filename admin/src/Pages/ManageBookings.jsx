import React from "react";
import { Container, Table, Button, Form, Badge } from "react-bootstrap";
import Header from "../Common/Header";
import Aside from "../Common/Aside";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import api from "../utils/AxiosConfig";

function ManageBookings() {
  const {
    data: bookings = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const response = await api.get("/admin/book/allbookings");
      console.log("Bookings API:", response.data);
      return response.data.data;
    },
  });

  const queryClient = useQueryClient();

  const cancelMutation = useMutation({
    mutationFn: async (id) => {
      return await api.delete(`/admin/book/cancel/${id}`);
    },
    onSuccess: () => {
      toast.success("Booking Cancelled");
      queryClient.invalidateQueries(["bookings"]);
    },
    onError: () => {
      toast.error("Failed to cancel booking");
    },
  });

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }) => {
      return await api.put(`/admin/book/status/${id}`, { status });
    },
    onSuccess: () => {
      toast.success("Status updated");
      queryClient.invalidateQueries(["bookings"]);
    },
    onError: () => {
      toast.error("Failed to update status");
    },
  });

  return (
    <div className="page-wrapper" id="main-wrapper" data-layout="vertical">
      <Aside />

      <div className="body-wrapper">
        <Header />

        <Container className="py-4">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3>📖 Manage Bookings</h3>
          </div>

          {/* Error */}
          {error && (
            <div className="text-danger mb-3">Error: {error.message}</div>
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
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan="8" className="text-center">
                      Loading...
                    </td>
                  </tr>
                ) : bookings.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="text-center">
                      No bookings found
                    </td>
                  </tr>
                ) : (
                  bookings.map((booking, index) => (
                    <tr key={booking._id}>
                      <td>{index + 1}</td>

                      {/* ✅ Joined User */}
                      <td>{booking.user_name || "N/A"}</td>
                      <td>{booking.game_name || "N/A"}</td>
                      <td>{booking.slot_time || "N/A"}</td>
                      <td>{booking.seat_no || "N/A"}</td>
                      {/* Date */}
                      <td>
                        {booking.date
                          ? new Date(booking.date).toLocaleDateString()
                          : "N/A"}
                      </td>

                      {/* Status Dropdown (UI only for now) */}
                      <td>
                        <Form.Select
                          value={booking.status}
                          onChange={(e) => {
                            updateStatusMutation.mutate({
                              id: booking._id,
                              status: e.target.value,
                            });
                          }}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Confirmed">Confirmed</option>
                          <option value="Cancelled">Cancelled</option>
                        </Form.Select>
                      </td>

                      {/* Actions */}
                      <td>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => cancelMutation.mutate(booking._id)}
                        >
                          Cancel
                        </Button>
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

export default ManageBookings;
