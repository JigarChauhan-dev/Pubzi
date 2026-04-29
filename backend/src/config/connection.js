let { MongoClient } = require("mongodb");
require("dotenv").config();
let url = process.env.URL;

let connectDB = async () => {
  try {
    let client = await MongoClient.connect(url);
    let db = client.db("game_db");
    console.log("Db connected");
    if (db) {
      return db;
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDB };
