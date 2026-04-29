const { ObjectId } = require("mongodb");
const { connectDB } = require("../config/connection");

// add game
let AddGame = async (req, res) => {
  try {
    let db = await connectDB();
    let collection = db.collection("games");

    let { name, description, status } = req.body;

    const image = req.file ? req.file.filename : "";

    if (!name || !description || !image || !status) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }

    let newGame = {
      _id: new ObjectId(),
      name,
      description,
      image,
      status,
      created_at: new Date(),
    };

    await collection.insertOne(newGame);

    res.status(201).json({
      status: true,
      message: "Game Added Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: "Server Error",
    });
  }
};

// fetch game
let fetchgame = async (req, res) => {
  try {
    let db = await connectDB();
    let collection = db.collection("games");

    let games = await collection.find({}).toArray();

    res.status(200).json({ status: true, data: games });
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ status: false, message: error.message });
  }
};

// update game
let editgame = async (req, res) => {
  try {
    let db = await connectDB();
    let collection = db.collection("games");

    let { id } = req.params;
    let { name, description, status } = req.body;

    const image = req.file ? req.file.filename : null;

    let updateData = {};

    if (name) updateData.name = name;
    if (description) updateData.description = description;
    if (status) updateData.status = status;
    if (image) updateData.image = image;

    let result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData },
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({
        status: false,
        message: "Game Not Found",
      });
    }

    res.status(200).json({
      status: true,
      message: "Game Updated Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: "Server Error",
    });
  }
};

// delete game
let deletegame = async (req, res) => {
  try {
    let db = await connectDB();
    let collection = db.collection("games");
    let { id } = req.params;

    let result = await collection.deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        status: false,
        message: "Game Not Found",
      });
    }

    res.status(200).json({
      status: true,
      message: "Game Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Server Error",
    });
  }
};
// fetch game by id
let fetchGameById = async (req, res) => {
  try {
    let db = await connectDB();
    let collection = db.collection("games");

    let game = await collection.findOne({
      _id: new ObjectId(req.params.id), // ✅ FIX
    });

    if (!game) {
      return res.status(404).json({
        status: false,
        message: "Game not found",
      });
    }

    res.json({
      status: true,
      data: game,
    });
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};
module.exports = {
  AddGame,
  fetchgame,
  editgame,
  deletegame,
  fetchGameById,
};
