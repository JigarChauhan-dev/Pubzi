const { ObjectId } = require("mongodb");
const { connectDB } = require("../config/connection");

// 1 Add Payment
let addPayment = async (req, res) => {
  try {
    let db = await connectDB();
    let collection = db.collection("payments");

    let { booking_id, user_id, amount, payment_type, status, date } = req.body;

    if (!booking_id || !user_id || !amount || !payment_type || !status || !date) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }

    let newPayment = {
      _id: new ObjectId(),
      booking_id,
      user_id,
      amount,
      payment_type,
      status,
      date: new Date(date),
      created_at: new Date(),
    };

    await collection.insertOne(newPayment);

    res.status(201).json({
      status: true,
      message: "Payment Added Successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Server Error",
    });
  }
};

// 2 Fetch All Payments
let fetchPayments = async (req, res) => {
  try {
    let db = await connectDB();
    let collection = db.collection("payments");

    let payments = await collection.find({}).toArray();

    res.status(200).json({
      status: true,
      data: payments,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Server Error",
    });
  }
};

// 3 Fetch Payment By ID
let fetchPaymentById = async (req, res) => {
  try {
    let db = await connectDB();
    let collection = db.collection("payments");
    let { id } = req.params;

    let payment = await collection.findOne({ _id: new ObjectId(id) });

    if (!payment) {
      return res.status(404).json({
        status: false,
        message: "Payment Not Found",
      });
    }

    res.status(200).json({
      status: true,
      data: payment,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Invalid ID or Server Error",
    });
  }
};

// 4 Update Payment
let updatePayment = async (req, res) => {
  try {
    let db = await connectDB();
    let collection = db.collection("payments");
    let { id } = req.params;

    let { booking_id, user_id, amount, payment_type, status, date } = req.body;

    let updateData = {};

    if (booking_id) updateData.booking_id = booking_id;
    if (user_id) updateData.user_id = user_id;
    if (amount) updateData.amount = amount;
    if (payment_type) updateData.payment_type = payment_type;
    if (status) updateData.status = status;
    if (date) updateData.date = new Date(date);

    let result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({
        status: false,
        message: "Payment Not Found",
      });
    }

    res.status(200).json({
      status: true,
      message: "Payment Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Server Error",
    });
  }
};

// 5 Delete Payment
let deletePayment = async (req, res) => {
  try {
    let db = await connectDB();
    let collection = db.collection("payments");
    let { id } = req.params;

    let result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        status: false,
        message: "Payment Not Found",
      });
    }

    res.status(200).json({
      status: true,
      message: "Payment Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  addPayment,
  fetchPayments,
  fetchPaymentById,
  updatePayment,
  deletePayment,
};