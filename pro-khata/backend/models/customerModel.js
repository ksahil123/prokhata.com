const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const customerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    amount: {
      type: Number,
    },
    lastTransaction: {
      type: Date,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);
