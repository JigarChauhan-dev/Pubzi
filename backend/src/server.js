let app = require("./app");
const { connectDB } = require("./config/connection");
require("dotenv").config();
let PORT = process.env.PORT;

connectDB();

app.listen(PORT,()=>{
    console.log("Server running on",PORT);
});