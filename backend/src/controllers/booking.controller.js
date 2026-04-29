const { ObjectId } = require("mongodb");
const { connectDB } = require("../config/connection");

// 1. CREATE BOOKING
let createBooking = async (req, res) => {
  try {
    let db = await connectDB();

    let bookingCollection = db.collection("bookings");
    let seatCollection = db.collection("seats");

    let { game_id, slot_id, seat_id, date } = req.body;
    let user_id = req.user?.id;

    if (!user_id || !game_id || !slot_id || !seat_id || !date) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }

    // Check seat availability
    let seat = await seatCollection.findOne({
      _id: new ObjectId(seat_id),
    });

    if (!seat || seat.status !== "AVAILABLE") {
      return res.status(400).json({
        status: false,
        message: "Seat already booked",
      });
    }

    // Create booking
    let newBooking = {
      user_id: new ObjectId(user_id),
      game_id: new ObjectId(game_id),
      slot_id: new ObjectId(slot_id),
      seat_id: new ObjectId(seat_id),
      date: new Date(date),
      status: "Pending", // ✅ FIXED
      created_at: new Date(),
    };

    await bookingCollection.insertOne(newBooking);

    // Update seat only
    await seatCollection.updateOne(
      { _id: new ObjectId(seat_id) },
      { $set: { status: "BOOKED" } },
    );

    res.status(201).json({
      status: true,
      message: "Booking Successful",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: "Server Error",
    });
  }
};

// 2. FETCH ALL BOOKINGS (ADMIN)
let fetchAllBookings = async (req, res) => {
  try {
    let db = await connectDB();
    let collection = db.collection("bookings");

    let bookings = await collection
      .aggregate([
        {
          $lookup: {
            from: "users",
            localField: "user_id",
            foreignField: "_id",
            as: "user",
          },
        },
        {
          $unwind: {
            path: "$user",
            preserveNullAndEmptyArrays: true,
          },
        },

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
          $lookup: {
            from: "game_slots",
            localField: "slot_id",
            foreignField: "_id",
            as: "slot",
          },
        },
        {
          $unwind: {
            path: "$slot",
            preserveNullAndEmptyArrays: true,
          },
        },

        {
          $lookup: {
            from: "seats",
            localField: "seat_id",
            foreignField: "_id",
            as: "seat",
          },
        },
        {
          $unwind: {
            path: "$seat",
            preserveNullAndEmptyArrays: true,
          },
        },

        {
          $project: {
            _id: 1,
            date: 1,
            status: 1,
            user_name: "$user.username",
            game_name: "$game.name",
            slot_time: {
              $concat: ["$slot.slot_time_start", " - ", "$slot.slot_time_end"],
            },
            seat_no: "$seat.seat_no",
          },
        },

        { $sort: { created_at: -1 } },
      ])
      .toArray();

    res.status(200).json({
      status: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: "Server Error",
    });
  }
};

// 3. SIMPLE FETCH (RAW)
let getBooking = async (req, res) => {
  try {
    let db = await connectDB();
    let collection = db.collection("bookings");

    let bookings = await collection
      .aggregate([
        // 🔧 Convert string IDs → ObjectId (IMPORTANT if needed)
        {
          $addFields: {
            game_id: { $toObjectId: "$game_id" },
            slot_id: { $toObjectId: "$slot_id" },
            seat_id: { $toObjectId: "$seat_id" },
          },
        },

        // 🎮 GAME JOIN
        {
          $lookup: {
            from: "games",
            localField: "game_id",
            foreignField: "_id",
            as: "game",
          },
        },
        { $unwind: { path: "$game", preserveNullAndEmptyArrays: true } },

        // ⏰ SLOT JOIN
        {
          $lookup: {
            from: "game_slots",
            localField: "slot_id",
            foreignField: "_id",
            as: "slot",
          },
        },
        { $unwind: { path: "$slot", preserveNullAndEmptyArrays: true } },

        // 💺 SEAT JOIN
        {
          $lookup: {
            from: "seats",
            localField: "seat_id",
            foreignField: "_id",
            as: "seat",
          },
        },
        { $unwind: { path: "$seat", preserveNullAndEmptyArrays: true } },

        // ✂️ Optional: clean response
        {
          $project: {
            game: 1,
            slot: 1,
            seat: 1,
            createdAt: 1,
          },
        },
      ])
      .toArray();

    res.status(200).json({
      status: true,
      data: bookings,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      message: "Server Error",
    });
  }
};

// 4. FETCH BY ID
let fetchBookingById = async (req, res) => {
  try {
    let db = await connectDB();
    let collection = db.collection("bookings");
    let { id } = req.params;

    let booking = await collection.findOne({ _id: new ObjectId(id) });

    if (!booking) {
      return res.status(404).json({
        status: false,
        message: "Booking Not Found",
      });
    }

    res.status(200).json({
      status: true,
      data: booking,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Invalid ID or Server Error",
    });
  }
};

// 5. CANCEL BOOKING
let cancelBooking = async (req, res) => {
  try {
    let db = await connectDB();
    let bookingCollection = db.collection("bookings");

    let { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        status: false,
        message: "Invalid booking ID",
      });
    }

    let booking = await bookingCollection.findOne({
      _id: new ObjectId(id),
    });

    if (!booking) {
      return res.status(404).json({
        status: false,
        message: "Booking Not Found",
      });
    }

    await bookingCollection.deleteOne({
      _id: new ObjectId(id),
    });

    res.status(200).json({
      status: true,
      message: "Booking Deleted Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: "Server Error",
    });
  }
};
let updateBookingStatus = async (req, res) => {
  try {
    let db = await connectDB();

    let bookingCollection = db.collection("bookings");
    let seatCollection = db.collection("seats");

    let { id } = req.params;
    let { status } = req.body;

    // ✅ Validate status
    const allowedStatus = ["Pending", "Confirmed", "Cancelled"];
    if (!allowedStatus.includes(status)) {
      return res.status(400).json({
        status: false,
        message: "Invalid status value",
      });
    }

    let booking = await bookingCollection.findOne({
      _id: new ObjectId(id),
    });

    if (!booking) {
      return res.status(404).json({
        status: false,
        message: "Booking Not Found",
      });
    }

    // ✅ Update booking status
    await bookingCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { status: status } },
    );

    // 🔥 Seat logic (important)
    if (status === "Cancelled") {
      await seatCollection.updateOne(
        { _id: new ObjectId(booking.seat_id) },
        { $set: { status: "AVAILABLE" } },
      );
    }

    if (status === "Confirmed") {
      await seatCollection.updateOne(
        { _id: new ObjectId(booking.seat_id) },
        { $set: { status: "BOOKED" } },
      );
    }

    res.status(200).json({
      status: true,
      message: "Booking status updated successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  createBooking,
  fetchAllBookings,
  getBooking,
  fetchBookingById,
  cancelBooking,
  updateBookingStatus,
};
