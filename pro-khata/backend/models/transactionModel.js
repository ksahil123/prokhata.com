const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const transactionSchema = new Schema(
  {
    customerId: {
      type: String,
      require: true,
    },
    mobileNumber: {
      type: Number,
      require: true,
    },
    transactionAmount: {
      type: Number,
      require: true,
    },
    transactionCode: {
      type: Boolean,
      require: true,
    },
    transactionType:{
      type: String,
      require: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("transaction", transactionSchema);
