import React, { useEffect } from "react";
import { Container, Table, Button, Badge } from "react-bootstrap";
import Header from "../Common/Header";
import Aside from "../Common/Aside";
import { useQuery } from "@tanstack/react-query";
import api from "../utils/AxiosConfig";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

function ManageGames() {
  const navigate = useNavigate();
  const { data: games = [], isLoading } = useQuery({
    queryKey: ["games"],
    queryFn: async () => {
      const response = await api.get("/admin/game/allgames");
      return response.data.data;
    },
  });

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      return await api.delete(`/admin/game/deletegame/${id}`);
    },
    onSuccess: () => {
      toast.success("Game deleted successfully");
      queryClient.invalidateQueries(["games"]);
    },
    onError: () => {
      toast.error("Error deleting game");
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
              <h3>🎮 Manage Games</h3>
              <Button variant="success" onClick={() => navigate("/addgame")}>
                ➕ Add Game
              </Button>
            </div>

            {/* Table */}
            <div className="table-responsive">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Actions</th>
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
                    games.map((game, index) => (
                      <tr key={game._id}>
                        <td>{index + 1}</td>

                        <td>
                          <img
                            src={`${api.defaults.baseURL}/uploads/game/${game.image}`}
                            alt="game"
                            style={{
                              width: "60px",
                              height: "40px",
                              objectFit: "cover",
                              borderRadius: "5px",
                            }}
                          />
                        </td>

                        <td>{game.name}</td>
                        <td>{game.description}</td>

                        <td>
                          <Badge
                            bg={
                              game.status === "Active" ? "success" : "secondary"
                            }
                          >
                            {game.status}
                          </Badge>
                        </td>

                        <td>
                          <Button
                            variant="primary"
                            size="sm"
                            className="me-2"
                            onClick={() =>
                              navigate("/editgame", { state: game })
                            }
                          >
                            Edit
                          </Button>

                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => handleDelete(game._id)}
                            disabled={
                              deleteMutation.isPending &&
                              deleteMutation.variables === game._id
                            }
                          >
                            {deleteMutation.isPending &&
                            deleteMutation.variables === game._id
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

export default ManageGames;
