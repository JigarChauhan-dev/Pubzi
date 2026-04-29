const { ObjectId } = require("mongodb");
const { connectDB } = require("../config/connection");

// 1. ADD GAME SLOT
let addGameSlot = async (req, res) => {
  try {
    let db = await connectDB();
    let collection = db.collection("game_slots");

    let { game_id, slot_time_start, slot_time_end, duration, price, status } =
      req.body;

    // Validation
    if (
      !game_id ||
      !slot_time_start ||
      !slot_time_end ||
      !duration ||
      !price ||
      !status
    ) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }

    let newSlot = {
      _id: new ObjectId(),
      game_id: new ObjectId(game_id),
      slot_time_start,
      slot_time_end,
      duration: parseInt(duration),
      price: parseInt(price),
      status, // AVAILABLE / BOOKED
      created_at: new Date(),
    };

    await collection.insertOne(newSlot);

    res.status(201).json({
      status: true,
      message: "Game Slot Added Successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Server Error",
    });
  }
};

// 2. FETCH ALL GAME SLOTS
let fetchGameSlots = async (req, res) => {
  let db = await connectDB();
  let collection = db.collection("game_slots");

  let slots = await collection
    .aggregate([
      {
        $lookup: {
          from: "games", // collection name
          localField: "game_id",
          foreignField: "_id",
          as: "game",
        },
      },
      {
        $unwind: {
          path: "$game",
          preserveNullAndEmptyArrays: true,
        },
      },
    ])
    .toArray();

  res.status(200).json({
    status: true,
    data: slots,
  });
};

// 3. FETCH SLOT BY ID
let fetchGameSlotById = async (req, res) => {
  try {
    let db = await connectDB();
    let collection = db.collection("game_slots");

    let { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        status: false,
        message: "Invalid game ID",
      });
    }

    let slots = await collection.find({ game_id: new ObjectId(id) }).toArray();

    res.json({
      status: true,
      data: slots,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};
// 4. UPDATE GAME SLOT
let editGameSlot = async (req, res) => {
  try {
    let db = await connectDB();
    let collection = db.collection("game_slots");
    let { id } = req.params;

    let { game_id, slot_time_start, slot_time_end, duration, price, status } =
      req.body;

    let updateData = {};

    if (game_id) updateData.game_id = new ObjectId(game_id);
    if (slot_time_start) updateData.slot_time_start = slot_time_start;
    if (slot_time_end) updateData.slot_time_end = slot_time_end;
    if (duration) updateData.duration = parseInt(duration);
    if (price) updateData.price = parseInt(price);
    if (status) updateData.status = status;

    let result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData },
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({
        status: false,
        message: "Slot Not Found",
      });
    }

    res.status(200).json({
      status: true,
      message: "Game Slot Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Server Error",
    });
  }
};

// 5. DELETE GAME SLOT
let deleteGameSlot = async (req, res) => {
  try {
    let db = await connectDB();
    let collection = db.collection("game_slots");

    let { id } = req.params;

    let result = await collection.deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        status: false,
        message: "Slot Not Found",
      });
    }

    res.status(200).json({
      status: true,
      message: "Slot Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  addGameSlot,
  fetchGameSlots,
  fetchGameSlotById,
  editGameSlot,
  deleteGameSlot,
};
