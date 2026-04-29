const { connectDB } = require("../config/connection");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const forgetpassword = async (req, res) => {
  // try {
    const db = await connectDB();
  const collection = db.collection("users");

  const { email } = req.body;

  if (!email) {
    return res.status(400).send({ status: false, message: "Email Required" });
  }

  const user = await collection.findOne({ email: email });

  if (!user) {
    return res
      .status(400)
      .send({ status: false, message: "Email Nor Registered" });
  }

  let resetToken = jwt.sign({ id: user._id }, process.env.KEY, {
    expiresIn: "15m",
  });
  console.log(resetToken);

  let resetLink = `http://localhost:5173/reset-password/${resetToken}`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: '"Game App" <jigarchauhan9958@gmail.com>',
    to : email,
    subject : "Reset Your Password",
    html : `
    <h2> Password Reset </h2>
    <p> Click the link below to reset your password</p>
    <a href="${resetLink}"> Reset Password </a>`
  })

  return res.send({
    status : true,
    message : "Reset password link sent to your email"
  })
  // } catch (error) {
  //   console.log(error);
  //   return res.status(500).send({
  //       status : false,
  //       message : "Server Error"
  //   })
  // }
};

module.exports = forgetpassword;
