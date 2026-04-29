const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");
const { connectDB } = require("../config/connection");

const resestPassword = async (req, res) => {
  try {
    const { token, password } = req.body;

    if (!token || !password) {
      console.log("token", token);
      console.log(password);
      return res.status(400).send({
        status: false,
        message: "Token and new password required",
      });
    }

    const decode = jwt.verify(token, process.env.KEY);
    const db = await connectDB();
    const collection = await db.collection("users");

    const hasepassword = await bcrypt.hash(password, 10);

    await collection.updateOne(
      { _id: new ObjectId(decode.id) },
      { $set: { password: hasepassword } },
    );

    return res.status(200).send({
      status: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      status: false,
      message: "Invalid or expired token",
    });
  }
};

module.exports = resestPassword;
