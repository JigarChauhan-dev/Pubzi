import React from "react";
import Logout from "../utils/Logout";
import { Link } from "react-router-dom";

function Aside() {
  return (
    <>
      <aside className="left-sidebar">
        {/* Sidebar scroll*/}
        <div>
          <div className="brand-logo d-flex align-items-center justify-content-between">
            <a href="./index.html" className="text-nowrap logo-img">
              <img src="../assets/images/logos/dark-logo.svg" width={180} alt />
            </a>
            <div
              className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
              id="sidebarCollapse"
            >
              <i className="ti ti-x fs-8" />
            </div>
          </div>
          {/* Sidebar navigation*/}
          <nav className="sidebar-nav scroll-sidebar" data-simplebar>
            <ul id="sidebarnav">
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Management</span>
              </li>
              <li className="sidebar-item">
  <Link className="sidebar-link" to={"/managegames"}>
    <span><i className="ti ti-device-gamepad-2" /></span>
    <span className="hide-menu">ManageGames</span>
  </Link>
</li>
             <li className="sidebar-item">
  <Link className="sidebar-link" to={"/manageslots"}>
    <span><i className="ti ti-clock" /></span>
    <span className="hide-menu">ManageSlots</span>
  </Link>
</li>

<li className="sidebar-item">
  <Link className="sidebar-link" to={"/manageseats"}>
    <span><i className="ti ti-armchair-2" /></span>
    <span className="hide-menu">ManageSeats</span>
  </Link>
</li>
            <li className="sidebar-item">
  <Link className="sidebar-link" to={"/managebookings"}>
    <span><i className="ti ti-calendar-event" /></span>
    <span className="hide-menu">ManageBookings</span>
  </Link>
</li>
            <li className="sidebar-item">
  <Link className="sidebar-link" to={"/showbookings"}>
    <span><i className="ti ti-list-details" /></span>
    <span className="hide-menu">ShowBookings</span>
  </Link>
</li>

             <li className="sidebar-item">
  <Link className="sidebar-link" to={"/manageinquiries"}>
    <span><i className="ti ti-file-description" /></span>
    <span className="hide-menu">ManageInquiries</span>
  </Link>
</li>

             <li className="sidebar-item">
  <Link className="sidebar-link" to={"/managefeedback"}>
    <span><i className="ti ti-message-dots" /></span>
    <span className="hide-menu">ManageFeedbacks</span>
  </Link>
</li>

             <li className="sidebar-item">
  <Link className="sidebar-link" to={"/manageusers"}>
    <span><i className="ti ti-users" /></span>
    <span className="hide-menu">ManageUsers</span>
  </Link>
</li>
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Components</span>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link"
                  href="./ui-buttons.html"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-article" />
                  </span>
                  <span className="hide-menu">Buttons</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link"
                  href="./ui-alerts.html"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-alert-circle" />
                  </span>
                  <span className="hide-menu">Alerts</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link"
                  href="./ui-card.html"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-cards" />
                  </span>
                  <span className="hide-menu">Card</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link"
                  href="./ui-forms.html"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-file-description" />
                  </span>
                  <span className="hide-menu">Forms</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link"
                  href="./ui-typography.html"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-typography" />
                  </span>
                  <span className="hide-menu">Typography</span>
                </a>
              </li>
              
                <button
                  className="btn w-100 d-flex align-items-center justify-content-center gap-2 mt-4"
                  style={{
                    backgroundColor: "#5d87ff",
                    color: "#fff",
                    borderRadius: "10px",
                    fontWeight: "600",
                    padding:"15px"
                  }}
                  onClick={Logout}
                >
                  <i className="ti ti-logout" />
                  Logout
                </button>
              
            </ul>

            <div className=""></div>
          </nav>
          {/* End Sidebar navigation */}
        </div>
        {/* End Sidebar scroll*/}
      </aside>
    </>
  );
}

export default Aside;
