import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import { ToastContainer } from "react-toastify";
import Header from "./Common/Header";
import Profile from "./Pages/Profile";
import Editprofile from "./Pages/Editprofile";
import About from "./Pages/About";
import Game from "./Pages/Game";
import GameDetails from "./Pages/GameDetails";
import BookingHistory from "./Pages/BookingHistory";
import Feedback from "./Pages/Feedback";
import ForgotPassword from "./Pages/ForgotPassword";
import ProtectPage from "./utils/ProtectPage";
import ResetPassword from "./Pages/resetPassword";


function App() {
  
  return (
    <>
    <ToastContainer  position="top-right" autoClose={1500} theme="colored"/>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/editprofile" element={<Editprofile/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/game" element={<Game/>}/>
          <Route path="/game/:id" element={<GameDetails />} />
          <Route path="/bookinghistory" element={<ProtectPage> <BookingHistory/> </ProtectPage>}/>
          <Route path="/feedback" element={<ProtectPage> <Feedback/> </ProtectPage> }/>
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
          <Route path="/reset-password/:token" element={<ResetPassword/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;