let jwt = require("jsonwebtoken");
require("dotenv").config();
let KEY = process.env.KEY;
console.log(KEY);

let Authenticate = async (req, res, next) => {
  try {
    let authHeader = req.headers["authorization"];
    let token = authHeader && authHeader.split(" ")[1];

    console.log("Token:", token);

    if (!token) {
      return res.status(401).json({
        status: false,
        message: "Token not provided",
      });
    }

    const decoded = await new Promise((resolve, reject) => {
      jwt.verify(token, KEY, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });

    
    req.user = decoded;

    console.log("Decoded User:", decoded);

    
    next();

  } catch (error) {
    console.error("JWT Error:", error.message);
    return res.status(401).json({
      status: false,
      message: "Invalid or expired token",
    });
  }
};

const Authorize = (role) => {
  return (req, res, next) => {
    console.log("User in Authorize:", req.user);

    if (!req.user) {
      return res.status(401).json({ message: "User not found" });
    }

    if (req.user.role !== role) {
      return res.status(403).json({ message: "Access Denied" });
    }

    next();
  };
};

module.exports = { Authenticate, Authorize };
