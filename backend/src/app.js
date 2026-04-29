let cors = require("cors");
let express = require("express");
let app = express();

app.use(
  cors({
    origin: ["http://localhost:5173","http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json())

// common
let AuthRoutes = require("./routes/auth.route");
app.use("/api/uploads",express.static("src/uploads"))

// admin
let Admingameroute = require("./routes/admin/game.route");
let Admingameslotroute = require("./routes/admin/gameslot.route");
let Admingameseatroute = require("./routes/admin/seat.route");
let Adminbookingroute = require("./routes/admin/booking.route");
let Adminuserroute = require("./routes/admin/user.route");
let Admininquirieroute = require("./routes/admin/inquiries.route");
let Adminfeedbackroute = require("./routes/admin/feedback.route");
let Adminroute = require("./routes/admin/admin.route");


// user
let Profileroute = require("./routes/user/profile.route");
let UserGameroute = require("./routes/user/game.route");
let UserslotRoute = require("./routes/user/gameslot.route");
let UserseatRoute = require("./routes/user/seat.route");
let razorpay = require("./routes/user/razorpay.route");
let Booking = require("./routes/user/book.route");
let UserInquiries = require("./routes/user/inquiry.route");
let UserFeedback = require("./routes/user/feedback.route");
let ForgetPassword = require("./routes/user/forgotpass.route");
let ResetPassword = require("./routes/user/forgotpass.route");


// ---------------------------------------------------------------------------
// common
app.use("/api/auth",AuthRoutes);

// admin
app.use("/api/admin/game",Admingameroute);
app.use("/api/admin/gameslot",Admingameslotroute);
app.use("/api/admin/gameseat",Admingameseatroute);
app.use("/api/admin/book",Adminbookingroute);
app.use("/api/admin/user",Adminuserroute);
app.use("/api/admin/inquiry",Admininquirieroute);
app.use("/api/admin/feedback",Adminfeedbackroute);
app.use("/api/admin",Adminroute);

// user 
app.use("/api/user",Profileroute);
app.use("/api/user/game",UserGameroute);
app.use("/api/user/gameslots", UserslotRoute);
app.use("/api/user/seats", UserseatRoute);
app.use("/api/user/payment",razorpay);
app.use("/api/user/book",Booking);
app.use("/api/user/inquiries",UserInquiries)
app.use("/api/user/feedback",UserFeedback);
app.use("/api/user/password",ForgetPassword);
app.use("/api/user/resetpassword",ResetPassword);

module.exports = app;