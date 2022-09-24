require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");
const customerRoutes = require("./routes/customer");
const transactionRoutes = require("./routes/transaction");
const port = process.env.PORT;
// express app
const app = express();
// middleware
app.use(express.json());
// app.use(cors());
app.use((req, res, next) => {
  console.log("hi", req.path, req.method);
  next();
});
// routes
// app.get("/", (req, res) => {
//   res.json({
//     mssg: "welcome to the ProKhata",
//   });
// });
app.use("/api/pro-khata", workoutRoutes);
app.use("/api/user", userRoutes);
app.use("/api/customer", customerRoutes);
app.use("/api/transaction", transactionRoutes);
// Connect to db

mongoose
  .connect(process.env.MONG_URI, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => {
    // listen for request
    app.listen(port, () => {
      console.log(`Connected to DB and listening to port ${port} !`);
    });
  })
  .catch((err) => {
    console.log("errr", err);
  });
