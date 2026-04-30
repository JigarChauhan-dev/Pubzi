import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Cookies from "js-cookie";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(e) {
    let { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  let login = async (user) => {
    let response = await axios.post(
      `${import.meta.env.VITE_API_URL}/auth/login`,
      user,
    );
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: login,

    onSuccess: (data) => {
      console.log("Login success:", data);

      let token = data.token;

      if (token) {
        Cookies.set("token", token, { expires: 1 });

        setUser({
          email: "",
          password: "",
        });

        toast.success("Login Successful", {
          onClose: () => {
            window.location.href = "/managegames";
          },
        });
        console.log("TOKEN AFTER SET:", Cookies.get("token"));
      }
    },

    onError: () => {
      setUser({
        email: "",
        password: "",
      });
      toast.error("Invalid Details", {
        onClose: () => {
          window.location.href = "/login";
        },
      });
    },
  });

  async function handelSubmit(e) {
    e.preventDefault();

    mutation.mutate(user);
  }

  console.log(user);

  return (
    <>
      {/*  Body Wrapper */}
      <div
        className="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-center justify-content-center w-100">
            <div className="row justify-content-center w-100">
              <div className="col-md-8 col-lg-6 col-xxl-3">
                <div className="card mb-0">
                  <div className="card-body">
                    <a
                      href="./index.html"
                      className="text-nowrap logo-img text-center d-block py-3 w-100"
                    >
                      <img
                        src="../assets/images/logos/dark-logo.svg"
                        width={180}
                        alt
                      />
                    </a>

                    <form onSubmit={handelSubmit}>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Username
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-4 position-relative">
                        <label className="form-label">Password</label>

                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          className="form-control pe-5"
                          onChange={handleInputChange}
                        />

                        <span
                          onClick={() => setShowPassword(!showPassword)}
                          style={{
                            position: "absolute",
                            right: "15px",
                            top: "38px",
                            cursor: "pointer",
                            zIndex: 10,
                          }}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="form-check">
                          <input
                            className="form-check-input primary"
                            type="checkbox"
                            defaultValue
                            id="flexCheckChecked"
                            defaultChecked
                          />
                          <label
                            className="form-check-label text-dark"
                            htmlFor="flexCheckChecked"
                          >
                            Remeber this Device
                          </label>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2"
                        disabled={mutation.isPending}
                      >
                        
                        {mutation.isPending ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                            ></span>
                            Signing in...
                          </>
                        ) : (
                          "Sign In"
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
