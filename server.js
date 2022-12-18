const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = "mongodb+srv://Skul990:Nadun123@nadun.dsezfyh.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URL);

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection Success!");

})

const studentRouter = require("./routes/Student.js");

app.use("/student",studentRouter)

app.listen(PORT,() => {
    console.log(`Server is up and running on port number:  ${PORT}`);

})