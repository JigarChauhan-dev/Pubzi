import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import Header from "../Common/Header";
import Aside from "../Common/Aside";
import { useQuery } from "@tanstack/react-query";
import api from "../utils/AxiosConfig";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

function ManageInquiries() {
  // Fetch inquiries
  const { data: inquiries = [], isLoading } = useQuery({
    queryKey: ["inquiries"],
    queryFn: async () => {
      const response = await api.get("/admin/inquiry/allinquiries");
      return response.data.data;
    },
  });

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      return await api.delete(`/admin/inquiry/delete/${id}`);
    },
    onSuccess: () => {
      toast.success("Inquiry deleted");
      queryClient.invalidateQueries(["inquiries"]);
    },
    onError: (err) => {
      console.error(err);
      toast.error("Failed to delete inquiry");
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
            <h3>📩 Manage Inquiries</h3>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Message</th>
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
                  inquiries.map((inq, index) => (
                    <tr key={inq._id}>
                      <td>{index + 1}</td>

                      <td>{inq.name || "N/A"}</td>
                      <td>{inq.email || "N/A"}</td>
                      <td>{inq.subject || "N/A"}</td>
                      <td style={{ maxWidth: "250px" }}>
                        {inq.message || "N/A"}
                      </td>

                      <td>
                        {inq.created_at
                          ? new Date(inq.created_at).toLocaleString()
                          : "N/A"}
                      </td>

                      <td>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => {
                            deleteMutation.mutate(inq._id);
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

export default ManageInquiries;
