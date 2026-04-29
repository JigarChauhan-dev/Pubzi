import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import api from "../utils/AxiosConfig";

function GameDetails() {
  const { id } = useParams();
  let navigate = useNavigate();

  const formatTime = (time) => {
    const [hour, minute] = time.split(":");
    let h = parseInt(hour);
    const ampm = h >= 12 ? "PM" : "AM";

    h = h % 12 || 12;

    return `${h}:${minute} ${ampm}`;
  };

  const [selectedSeat, setSelectedSeat] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const {
    data: game,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["game", id],
    enabled: !!id,
    queryFn: async () => {
      const res = await api.get(`/user/game/${id}`);
      console.log(res.data.data);
      return res.data.data;
    },
  });

  const { data: slots } = useQuery({
    queryKey: ["slots", id],
    enabled: !!id,
    queryFn: async () => {
      const res = await api.get(`/user/gameslots/${id}`);
      console.log(res.data.data);
      return res.data.data;
    },
  });

  const {
    data: seats,
    error: seatError,
    isLoading: seatLoading,
  } = useQuery({
    queryKey: ["seats", id],
    enabled: !!id,
    queryFn: async () => {
      try {
        const res = await api.get(`/user/seats/${id}`);
        console.log(res.data.data);
        
        return res.data?.data || [];
      } catch (err) {
        console.log("SEATS ERROR:", err);
        throw err;
      }
    },
  });

  const handelpayment = async (e) => {
    e.preventDefault();

    if (!selectedSlot || !selectedSeat) {
      toast.error("Please select slot and seat");
      return;
    }

    try {
      const response = await api.post("/user/payment/createorder", {
        amount: selectedSlot.price,
      });

      const { id: order_id, amount } = response.data.data;

      const options = {
        key: "rzp_test_VQhEfe2NCXbbwI",
        amount: amount,
        currency: "INR",
        name: "Game",
        description: "Test Transaction",
        order_id: order_id,

        handler: async (response) => {
          try {
            await api.post("/user/book/submit", {
              game_id: game?._id,
              slot_id: selectedSlot._id,
              seat_id: selectedSeat._id,
              date: new Date(),
            });
            toast.success("Booking Successful", {
              onClose: () => {
                navigate("/bookinghistory");
              },
            });
          } catch (error) {
            console.error(error);
          }
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* 🔥 BREADCRUMB */}
          <div
            className="gt-breadcrumb-wrapper bg-cover"
            style={{ backgroundImage: 'url("assets/img/breadcrumb.png")' }}
          >
            <div className="container-fluid px-5">
              <div className="gt-page-heading">
                <div className="gt-breadcrumb-sub-title">
                  <h1>{game?.name || "Game Details"}</h1>
                </div>
                <ul className="gt-breadcrumb-items">
                  <li>
                    <i className="fa-solid fa-house" />
                  </li>
                  <li>
                    <Link to="/">Home :</Link>
                  </li>
                  <li className="color">Game Details</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 🎮 MAIN */}
          <section className="section-padding py-5">
            <div className="container-fluid px-5">
              {/* 🎮 GAME INFO */}
              <div className="row align-items-center mb-5">
                <div className="col-lg-6">
                  <img
                    src={`${api.defaults.baseURL}/uploads/game/${game?.image}`}
                    className="img-fluid rounded w-100"
                    style={{ height: "400px", objectFit: "cover" }}
                    alt=""
                  />
                </div>

                <div className="col-lg-6">
                  <h2 className="text-white">{game?.name}</h2>

                  {/* ⭐ Static Rating */}
                  <div className="mb-2 text-warning">
                    ★★★★☆ <span className="text-light">(4.5 Rating)</span>
                  </div>

                  <p className="text-light">{game?.description}</p>

                  <div className="d-flex gap-4 mt-3 text-light">
                    <div>🎮 Mode: Multiplayer</div>
                    <div>👥 Players: 100</div>
                    <div>🔥 Genre: Action</div>
                  </div>
                </div>
              </div>

              <div className="text-center mb-4">
                <h3 className="text-white">Available Slots</h3>
                <p className="text-muted">Choose your preferred time slot</p>
              </div>

              <div className="row g-4 justify-content-center mb-5">
                {slots?.map((slot) => (
                  <div className="col-lg-3 col-md-4" key={slot._id}>
                    <div
                      onClick={() => setSelectedSlot(slot)}
                      className={`p-4 text-center rounded ${
                        selectedSlot?._id === slot._id
                          ? "border border-warning"
                          : "bg-dark text-white"
                      }`}
                      style={{
                        cursor: "pointer",
                        maxWidth: "320px",
                        margin: "0 auto",
                      }}
                    >
                      <Card.Title>
                        {formatTime(slot.slot_time_start)} -{" "}
                        {formatTime(slot.slot_time_end)}
                      </Card.Title>

                      <p className="mb-1 mt-2">
                        Duration: {slot.duration} mins
                      </p>

                      <p className="text-warning">₹{slot.price}</p>

                      <span
                        className={`badge ${
                          slot.status === "AVAILABLE"
                            ? "bg-success"
                            : "bg-danger"
                        }`}
                      >
                        {slot.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mb-4">
                <h3 className="text-white">Select Seat</h3>
              </div>

              <div className="row g-3 justify-content-center mb-4">
                {seats?.length > 0 ? (
                  seats.map((seat) => (
                    <div
                      className="col-lg-1 col-md-2 col-3 d-flex justify-content-center"
                      key={seat._id}
                    >
                      <button
                        className={`btn ${
                          seat.status !== "AVAILABLE"
                            ? "btn-secondary"
                            : selectedSeat?._id === seat._id
                              ? "btn-warning"
                              : "btn-success"
                        }`}
                        style={{ width: "60px", height: "60px" }}
                        disabled={seat.status !== "AVAILABLE"}
                        onClick={() => setSelectedSeat(seat)}
                      >
                        {seat.seat_no}
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-light">No seats available</p>
                )}
              </div>

              <div className="text-center">
                <button
                  className="theme-btn"
                  disabled={!selectedSeat || !selectedSlot}
                  onClick={handelpayment}
                >
                  Book Now
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default GameDetails;
