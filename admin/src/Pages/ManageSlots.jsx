import React from "react";
import { Container, Table, Button, Badge } from "react-bootstrap";
import Header from "../Common/Header";
import Aside from "../Common/Aside";
import { useQuery } from "@tanstack/react-query";
import api from "../utils/AxiosConfig";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

function ManageSlots() {
  let navigate = useNavigate();
  const { data: slots = [], isLoading } = useQuery({
    queryKey: ["slots"],
    queryFn: async () => {
      const response = await api.get("/admin/gameslot/allslots");
      console.log(response.data.data);

      return response.data.data;
    },
  });

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
      return await api.delete(`/admin/gameslot/deleteslot/${id}`);
    },
    onSuccess: () => {
      toast.success("Slot deleted successfully");
      queryClient.invalidateQueries(["slots"]);
    },
    onError: () => {
      toast.error("Error deleting slot");
    },
  });

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  return (
    <>
      <div className="page-wrapper" id="main-wrapper" data-layout="vertical">
        <Aside />

        <div className="body-wrapper">
          <Header />

          <Container className="py-4">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3>⏰ Manage Slots</h3>
              <Button onClick={() => navigate("/addslot")} variant="success">
                ➕ Add Slot
              </Button>
            </div>

            {/* Table */}
            <div className="table-responsive">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Game Name</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Duration</th>
                    <th>Price</th>
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
                  ) : (
                    slots.map((slot, index) => (
                      <tr key={slot._id}>
                        <td>{index + 1}</td>

                        <td>{slot.game?.name || "N/A"}</td>

                        <td>{slot.slot_time_start}</td>
                        <td>{slot.slot_time_end}</td>

                        <td>{slot.duration} min</td>

                        <td>₹ {slot.price}</td>

                        <td>
                          <Badge
                            bg={
                              slot.status === "Active" ? "success" : "secondary"
                            }
                          >
                            {slot.status}
                          </Badge>
                        </td>

                        <td>
                          <Button
                            variant="primary"
                            size="sm"
                            className="me-2"
                            onClick={() =>
                              navigate("/editslot", { state: slot })
                            }
                          >
                            Edit
                          </Button>

                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => handleDelete(slot._id)}
                            disabled={
                              deleteMutation.isPending &&
                              deleteMutation.variables === slot._id
                            }
                          >
                            {deleteMutation.isPending &&
                            deleteMutation.variables === slot._id
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
    </>
  );
}

export default ManageSlots;
