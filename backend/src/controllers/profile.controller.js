import { ObjectId } from "mongodb";
import { connectDB } from "../config/connection.js";


let Profile = async (req, res) => {
  try {
    let db = await connectDB();
    let collection = db.collection("users");

    let userId = req.user.id;
    console.log("User ID:", userId);

    let user = await collection.findOne(
      { _id: new ObjectId(userId) },
      { projection: { password: 0 } }
    );

    console.log("DB User:", user);

    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Profile Found",
      user: user, 
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
};

export default Profile;