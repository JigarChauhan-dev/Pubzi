const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// common
const AuthRoutes = require("./routes/auth.route");
app.use("/api/uploads", express.static("src/uploads"));

// admin
const Admingameroute = require("./routes/admin/game.route");
const Admingameslotroute = require("./routes/admin/gameslot.route");
const Admingameseatroute = require("./routes/admin/seat.route");
const Adminbookingroute = require("./routes/admin/booking.route");
const Adminuserroute = require("./routes/admin/user.route");
const Admininquirieroute = require("./routes/admin/inquiries.route");
const Adminfeedbackroute = require("./routes/admin/feedback.route");
const Adminroute = require("./routes/admin/admin.route");

// user
const Profileroute = require("./routes/user/profile.route");
const UserGameroute = require("./routes/user/game.route");
const UserslotRoute = require("./routes/user/gameslot.route");
const UserseatRoute = require("./routes/user/seat.route");
const razorpay = require("./routes/user/razorpay.route");
const Booking = require("./routes/user/book.route");
const UserInquiries = require("./routes/user/inquiry.route");
const UserFeedback = require("./routes/user/feedback.route");
const ForgetPassword = require("./routes/user/forgotpass.route");
const ResetPassword = require("./routes/user/forgotpass.route");

// routes
app.use("/api/auth", AuthRoutes);

// admin
app.use("/api/admin/game", Admingameroute);
app.use("/api/admin/gameslot", Admingameslotroute);
app.use("/api/admin/gameseat", Admingameseatroute);
app.use("/api/admin/book", Adminbookingroute);
app.use("/api/admin/user", Adminuserroute);
app.use("/api/admin/inquiry", Admininquirieroute);
app.use("/api/admin/feedback", Adminfeedbackroute);
app.use("/api/admin", Adminroute);

// user
app.use("/api/user", Profileroute);
app.use("/api/user/game", UserGameroute);
app.use("/api/user/gameslots", UserslotRoute);
app.use("/api/user/seats", UserseatRoute);
app.use("/api/user/payment", razorpay);
app.use("/api/user/book", Booking);
app.use("/api/user/inquiries", UserInquiries);
app.use("/api/user/feedback", UserFeedback);
app.use("/api/user/password", ForgetPassword);
app.use("/api/user/resetpassword", ResetPassword);

module.exports = app;