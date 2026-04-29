const { ObjectId } = require("mongodb");
const { connectDB } = require("../config/connection");

// 1. ADD SEAT
let addSeat = async (req, res) => {
  try {
    let db = await connectDB();
    let collection = db.collection("seats");

    let { game_id, seat_no, status } = req.body;

    // Validation
    if (!game_id || !seat_no || !status) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }

    // Prevent duplicate seat (same game)
    let existSeat = await collection.findOne({
      game_id: new ObjectId(game_id),
      seat_no,
    });

    if (existSeat) {
      return res.status(400).json({
        status: false,
        message: "Seat already exists for this game",
      });
    }

    let newSeat = {
      _id: new ObjectId(),
      game_id: new ObjectId(game_id),
      seat_no,
      status, // AVAILABLE / BOOKED
      created_at: new Date(),
    };

    await collection.insertOne(newSeat);

    res.status(201).json({
      status: true,
      message: "Seat Added Successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Server Error",
    });
  }
};

// 2. FETCH ALL SEATS
let fetchSeats = async (req, res) => {
  try {
    let db = await connectDB();

    let seats = await db
      .collection("seats")
      .aggregate([
        {
          $lookup: {
            from: "games",
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
        {
          $project: {
            _id: 1,
            seat_no: 1,
            status: 1,

            // ✅ Works for BOTH "name" and "game_name"
            game_name: {
              $ifNull: ["$game.name", "$game.game_name", "N/A"],
            },
          },
        },
        { $sort: { seat_no: 1 } },
      ])
      .toArray();

    res.status(200).json({
      status: true,
      count: seats.length,
      data: seats,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: "Server Error",
    });
  }
};

// 3. FETCH SEAT BY ID
let fetchSeatById = async (req, res) => {
  try {
    let db = await connectDB();
    let collection = db.collection("seats");

    let { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        status: false,
        message: "Invalid game ID",
      });
    }

    let seats = await collection
      .find({ game_id: new ObjectId(id) })
      .toArray(); 

    res.json({
      status: true,
      data: seats,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
}
// 4. UPDATE SEAT
let editSeat = async (req, res) => {
  try {
    let db = await connectDB();
    let collection = db.collection("seats");
    let { id } = req.params;

    let { game_id, seat_no, status } = req.body;

    let updateData = {};

    if (game_id) updateData.game_id = new ObjectId(game_id);
    if (seat_no) updateData.seat_no = seat_no;
    if (status) updateData.status = status;

    let result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData },
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({
        status: false,
        message: "Seat Not Found",
      });
    }

    res.status(200).json({
      status: true,
      message: "Seat Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Server Error",
    });
  }
};

// 5. DELETE SEAT
let deleteSeat = async (req, res) => {
  try {
    let db = await connectDB();
    let collection = db.collection("seats");

    let { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        status: false,
        message: "Invalid Seat ID",
      });
    }

    let result = await collection.deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        status: false,
        message: "Seat Not Found",
      });
    }

    res.status(200).json({
      status: true,
      message: "Seat Deleted Successfully",
    });
  } catch (error) {
    console.error("Delete Seat Error:", error);

    res.status(500).json({
      status: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  addSeat,
  fetchSeats,
  fetchSeatById,
  editSeat,
  deleteSeat,
};
