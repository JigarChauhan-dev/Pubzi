const { connectDB } = require("../config/connection");
const { ObjectId } = require("mongodb");
let jwt = require("jsonwebtoken");
let bcrypt = require("bcrypt");
let key = process.env.KEY;

let Signup = async (req, res) => {
  try {
    let db = await connectDB();
    let collection = db.collection("users");
    let { username, email, phone, address, password } = req.body;

    if (!username || !email || !phone || !address || !password) {
      return res
        .status(404)
        .send({ status: false, message: "All Fields are Required.." });
    }

    let existuser = await collection.findOne({ $or: [{ email }, { phone }] });

    if (existuser) {
      return res
        .status(404)
        .send({ status: false, message: "This User Already Exists.." });
    }

    let securePassword = await bcrypt.hash(password, 10);

    let insertUser = await collection.insertOne({
      _id: new ObjectId(),
      username: username,
      email: email,
      phone: phone,
      address: address,
      password: securePassword,
      role: "user",
      status: true,
    });

    if (insertUser.acknowledged) {
      return res
        .status(201)
        .send({ status: true, message: "Signup Succesfully" });
    }
  } catch (error) {
    console.log("🔥 REAL ERROR:", error); // 👈 SHOW ERROR IN TERMINAL
    return res.status(500).send({
      status: false,
      message: error.message,
    });
  }
};

let Login = async (req, res) => {
  let db = await connectDB();
  let collection = db.collection("users");
  let { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(401)
      .send({ status: false, message: "All Fields Are Required.." });
  }

  let user = await collection.findOne({ email });
  console.log(user);

  if (!user) {
    return res.status(401).send({ status: false, message: "user not found" });
  }

  let isMathed = await bcrypt.compare(password, user.password);

  if (!isMathed) {
    return res.status(401).send({ status: false, message: "Invalid Password" });
  }

  let data = {
    id: user._id,
    name: user.username,
    email: user.email,
    role: user.role,
  };

  let token = jwt.sign(data, key, { expiresIn: "5h" });
  console.log(token);

  
  res
    .status(200)
    .send({ status: true, message: "Login Succesfull", token: token });
};

module.exports = { Login, Signup };
