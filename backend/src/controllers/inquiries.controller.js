const { connectDB } = require("../config/connection");
const { ObjectId } = require("mongodb");

let addInquiry = async (req, res) => {
  let db = await connectDB();
  let collection = await db.collection("inquiries");

  let {name, email, subject, message} = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).send({
      status: false,
      message: "All Fields Are Required..",
    });
  }

  let loginId = req.user.id;

  let newInquiry = {
    loginId : ObjectId.createFromHexString(loginId),
    name : name,
    email : email,
    subject : subject,
    message : message,
    created_at : new Date(),
  }

  await collection.insertOne(newInquiry);

  res.status(201).send({
    status: true,
    message: "Inquiry Submitted Successfully",
  });
};

// 2. FETCH ALL INQUIRIES
let fetchInquiry = async (req, res) => {
  let db = await connectDB();
  let collection = db.collection("inquiries");

  let inquiries = await collection.find({}).toArray();

  if (inquiries.length === 0) {
    return res.status(404).send({
      status: false,
      message: "No Inquiries Found",
    });
  }

  res.status(200).send({
    status: true,
    data: inquiries,
  });
};

// 3. REMOVE INQUIRY
let removeInquiry = async (req, res) => {
  let db = await connectDB();
  let collection = db.collection("inquiries");
  let { id } = req.params;

  let result = await collection.deleteOne({
    _id: ObjectId.createFromHexString(id),
  });

  if (result.deletedCount === 0) {
    return res.status(404).send({
      status: false,
      message: "Inquiry Not Found",
    });
  }

  res.status(200).send({
    status: true,
    message: "Inquiry Removed Successfully",
  });
};

module.exports = { addInquiry, fetchInquiry, removeInquiry };
