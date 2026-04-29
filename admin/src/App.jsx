import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./Pages/Home";
import ManageGames from "./Pages/ManageGames";
import Login from "./Pages/Login";
import ProtectPages from "./utils/ProtectPage";
import ManageSlots from "./Pages/ManageSlots";
import ManageSeats from "./Pages/ManageSeats";
import ManageBookings from "./Pages/ManageBookings";
import ShowBookings from "./Pages/ShowBookings";
import ManageUsers from "./Pages/ManageUsers";
import ManageInquiries from "./Pages/ManageInquiries";
import ManageFeedback from "./Pages/ManageFeedback";
import AddGame from "./Pages/AddGame";
import AddSlot from "./Pages/AddSlot";
import AddSeat from "./Pages/AddSeat";
import EditGame from "./Pages/EditGame";
import EditSlot from "./Pages/EditSlot";
import EditSeat from "./Pages/EditSeat";

function App() {
  return (
    <>
    <ToastContainer  position="top-right" autoClose={1500} theme="colored"/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectPages ><Home /></ProtectPages>} />
          <Route path="/managegames" element={<ProtectPages> <ManageGames /></ProtectPages> } />
          <Route path="/manageslots" element={<ManageSlots/>} />
          <Route path="/manageseats" element={<ManageSeats/>} />
          <Route path="/managebookings" element={<ManageBookings/>} />
          <Route path="/showbookings" element={<ShowBookings/>} />
          <Route path="/manageusers" element={<ManageUsers/>} />
          <Route path="/manageinquiries" element={<ManageInquiries/>} />
          <Route path="/managefeedback" element={<ManageFeedback/>} />
          <Route path="/addgame" element={<AddGame/>} />
          <Route path="/addslot" element={<AddSlot/>} />
          <Route path="/addseat" element={<AddSeat/>} />
          <Route path="/editgame" element={<EditGame />} />
          <Route path="/editslot" element={<EditSlot />} />
          <Route path="/editseat" element={<EditSeat />} />

          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;