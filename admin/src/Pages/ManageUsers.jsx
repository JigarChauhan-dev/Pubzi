import React from "react";
import { Container, Table, Form } from "react-bootstrap";
import Header from "../Common/Header";
import Aside from "../Common/Aside";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../utils/AxiosConfig";
import { toast } from "react-toastify";

function ManageUsers() {
  const queryClient = useQueryClient();

  // Fetch users
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await api.get("/admin/user/allusers");
      return response.data.data;
    },
  });

  // ✅ Status update mutation
  const statusMutation = useMutation({
    mutationFn: async ({ id, status }) => {
      return await api.put(`/admin/user/status/${id}`, { status });
    },
    onSuccess: () => {
      toast.success("User status updated");
      queryClient.invalidateQueries(["users"]);
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
          <div className="mb-4">
            <h3>👤 Manage Users</h3>
          </div>

          <div className="table-responsive">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan="6" className="text-center">
                      Loading...
                    </td>
                  </tr>
                ) : (
                  users.map((user, index) => (
                    <tr key={user._id}>
                      <td>{index + 1}</td>
                      <td>{user.username || "N/A"}</td>
                      <td>{user.email || "N/A"}</td>
                      <td>{user.phone || "N/A"}</td>
                      <td>{user.address || "N/A"}</td>

                      {/* ✅ Status Dropdown */}
                      <td>
                        <Form.Select
                          size="sm"
                          className={user.status === "BLOCKED" ? "bg-danger text-white" : ""}
                          disabled={statusMutation.isPending}
                          value={user.status || "ACTIVE"}
                          onChange={(e) =>
                            statusMutation.mutate({
                              id: user._id,
                              status: e.target.value,
                            })
                          }
                        >
                          <option value="ACTIVE">ACTIVE</option>
                          <option value="BLOCKED">BLOCKED</option>
                        </Form.Select>
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

export default ManageUsers;