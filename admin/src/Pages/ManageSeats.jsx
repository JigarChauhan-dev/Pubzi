import React from "react";
import { Container, Table, Button, Badge } from "react-bootstrap";
import Header from "../Common/Header";
import Aside from "../Common/Aside";
import { useQuery } from "@tanstack/react-query";
import api from "../utils/AxiosConfig";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

function ManageSeats() {
  let navigate = useNavigate();
  // Fetch seats
  const { data: seats = [], isLoading } = useQuery({
    queryKey: ["seats"],
    queryFn: async () => {
      const response = await api.get("/admin/gameseat/allseats");
      return response.data.data;
    },
  });

  // Fetch games
  const { data: games = [] } = useQuery({
    queryKey: ["games"],
    queryFn: async () => {
      const response = await api.get("/admin/game/allgames");
      return response.data.data;
    },
  });


  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      return await api.delete(`/admin/gameseat/deleteseat/${id}`);
    },
    onSuccess: () => {
      toast.success("Seat deleted successfully");
      queryClient.invalidateQueries(["seats"]);
    },
    onError: () => {
      toast.error("Error deleting seat");
    },
  });

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  return (
    <div className="page-wrapper" id="main-wrapper" data-layout="vertical">
      <Aside />

      <div className="body-wrapper">
        <Header />

        <Container className="py-4">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3>💺 Manage Seats</h3>
            <Button variant="success" onClick={() => navigate("/addseat")}>
              ➕ Add Seat
            </Button>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Game Name</th>
                  <th>Seat No</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan="5" className="text-center">
                      Loading...
                    </td>
                  </tr>
                ) : (
                  seats.map((seat, index) => (
                    <tr key={seat._id}>
                      <td>{index + 1}</td>

                      {/* Game Name */}
                      <td>{seat.game_name || "N/A"}</td>

                      {/* Seat Number */}
                      <td>{seat.seat_no}</td>

                      {/* Status */}
                      <td>
                        <Badge
                          bg={
                            seat.status === "Available"
                              ? "success"
                              : "secondary"
                          }
                        >
                          {seat.status}
                        </Badge>
                      </td>

                      {/* Actions */}
                      <td>
                        <Button
                          variant="primary"
                          size="sm"
                          className="me-2"
                          onClick={() => navigate("/editseat", { state: seat })}
                        >
                          Edit
                        </Button>

                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleDelete(seat._id)}
                          disabled={
                            deleteMutation.isPending &&
                            deleteMutation.variables === seat._id
                          }
                        >
                          {deleteMutation.isPending &&
                          deleteMutation.variables === seat._id
                            ? "Deleting..."
                            : "Delete"}
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

export default ManageSeats;
