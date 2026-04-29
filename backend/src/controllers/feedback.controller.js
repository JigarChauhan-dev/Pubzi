const { ObjectId } = require("mongodb");
const { connectDB } = require("../config/connection");

// 1 Add Feedback
let addFeedback = async (req, res) => {
  try {
    let db = await connectDB();
    let collection = db.collection("feedback");

    let { username, email, rating, message,  createdAt } = req.body;

    if (!username || !email || !rating || !message) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }
    if (rating < 1 || rating > 5) {
      return res.status(400).json({
        status: false,
        message: "Rating must be between 1 and 5",
      });
    }

    let newFeedback = {
      _id: new ObjectId(),
      username,
      email,
      message,
      rating,
      created_at: new Date(),
    };

    await collection.insertOne(newFeedback);

    res.status(201).json({
      status: true,
      message: "Feedback Added Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: "Server Error",
    });
  }
};
// 2 Fetch All Feedback
let fetchFeedbacks = async (req, res) => {
  try {
    let db = await connectDB();
    let collection = db.collection("feedback");

    let feedbacks = await collection.find({}).toArray();

    res.status(200).json({
      status: true,
      data: feedbacks,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Server Error",
    });
  }
};


// 4 Delete Feedback
let deleteFeedback = async (req, res) => {
  try {
    let db = await connectDB();
    let collection = db.collection("feedback");
    let { id } = req.params;

    let result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        status: false,
        message: "Feedback Not Found",
      });
    }

    res.status(200).json({
      status: true,
      message: "Feedback Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  addFeedback,
  fetchFeedbacks,
  deleteFeedback,
};
