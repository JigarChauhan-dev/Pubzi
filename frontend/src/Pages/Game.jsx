import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Common/Footer";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import api from "../utils/AxiosConfig";

function Game() {
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ["game"],
    queryFn: async () => {
      

      const response = await api.get("/user/game/allgame");

      console.log(response.data);

      return response.data.data;
    },
  });
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* Breadcrumb Section (Same as About Page) */}
          <div
            className="gt-breadcrumb-wrapper bg-cover"
            style={{ backgroundImage: 'url("assets/img/breadcrumb.png")' }}
          >
            <div className="container">
              <div className="gt-page-heading">
                <div className="gt-breadcrumb-sub-title">
                  <h1>Games</h1>
                </div>
                <ul className="gt-breadcrumb-items">
                  <li>
                    <i className="fa-solid fa-house" />
                  </li>
                  <li>
                    <Link to="/">Home :</Link>
                  </li>
                  <li className="color">Games</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Game Listing Section */}
          <section className="section-padding fix">
            <Container>
              <Row>
                {data?.map((game) => (
                  <Col lg={4} md={6} key={game.id} className="mb-4">
                    <Card className="bg-dark text-white border-0 h-100 shadow">
                      <Card.Img variant="top" src={`${api.defaults.baseURL}/uploads/game/${game.image}`} />

                      <Card.Body className="text-center d-flex flex-column">
                        <Card.Title>{game.name}</Card.Title>

                        <Button
                          variant="outline-warning"
                          className="mt-auto fw-semibold"
                          onClick={() => navigate(`/game/${game._id}`)}
                        >
                          View Details
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default Game;
