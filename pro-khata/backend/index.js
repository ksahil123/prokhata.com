const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
// import cors from "cors";
const app = express();

dotenv.config({ path: "./config.env" });
const Port = process.env.PORT;
require("./db/conn");

// const User = require("./model/userSchema");
// "mongodb+srv://sahil:@prokhata@@cluster0.aqmam6k.mongodb.net/pro-?retryWrites=true&w=majority";
// app.use(express.json())
// app.use(express.urlencoded())
// app.use(express.cors())

// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//   })
//   .then(() => {
//     console.log("connection successfull");
//   })
//   .catch((err) => console.log("connection failed"));

const middleware = (req, res, next) => {
  console.log(`welcome to Middleware`);
  next();
};

app.get("/", (req, res) => {
  res.send("Hello ");
});

app.listen(Port, () => {
  console.log(`server is running in ${Port}`);
});

app.get("/about", middleware, (req, res) => {
  res.send("Welcome to aBOUT me");
});
