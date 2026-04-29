import React from "react";
import { Container, Table, Button, Badge } from "react-bootstrap";
import Header from "../Common/Header";
import Aside from "../Common/Aside";
import { useQuery } from "@tanstack/react-query";
import api from "../utils/AxiosConfig";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

function ManageFeedback() {
  // Fetch feedbacks
  const { data: feedbacks = [], isLoading } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: async () => {
      const response = await api.get("/admin/feedback/allfeedbacks");
      return response.data.data;
    },
  });

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      return await api.delete(`/admin/feedback/delete/${id}`);
    },
    onSuccess: () => {
      toast.success("Feedback deleted");
      queryClient.invalidateQueries(["feedbacks"]);
    },
    onError: () => {
      toast.error("Failed to delete feedback");
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
            <h3>⭐ Manage Feedback</h3>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Rating</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan="7" className="text-center">
                      Loading...
                    </td>
                  </tr>
                ) : (
                  feedbacks.map((fb, index) => (
                    <tr key={fb._id}>
                      <td>{index + 1}</td>

                      <td>{fb.username || "N/A"}</td>
                      <td>{fb.email || "N/A"}</td>

                      {/* Message */}
                      <td style={{ maxWidth: "250px" }}>
                        {fb.message || "N/A"}
                      </td>

                      {/* Rating */}
                      <td>
                        <Badge bg="warning" text="dark">
                          ⭐ {fb.rating || 0}/5
                        </Badge>
                      </td>

                      {/* Date */}
                      <td>
                        {fb.created_at
                          ? new Date(fb.created_at).toLocaleString("en-IN", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })
                          : "N/A"}
                      </td>

                      {/* Optional Delete */}
                      <td>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => {
                            deleteMutation.mutate(fb._id);
                          }}
                        >
                          Delete
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

export default ManageFeedback;
