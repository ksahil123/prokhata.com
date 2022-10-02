const Transaction = require("../models/transactionModel");
const mongoose = require("mongoose");
const Customer = require("../models/customerModel");

const getAllTransactions = async (req, res) => {
  const { customerId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(customerId)) {
    return res.status(400).json({ error: "No such Customer Exists" });
  }
  //   const mobileNumber = await customerModel.findById(customerId);
  const customer = await Customer.findOne({ _id: customerId }).select(
    "mobileNumber"
  );

  if (!customer) {
    return res.status(400).json({ error: " Sorry No such Customer Exists" });
  }
  const { mobileNumber } = customer;
  const transactions = await Transaction.find({
    customerId,
    mobileNumber,
  }).sort({ updatedAt: 1 });
  try {
    res.status(200).json(transactions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const createTransaction = async (req, res) => {
  const { customerId, transactionAmount, transactionCode } = req.body;

  const customer = await Customer.findOne({ _id: customerId }).select(
    "mobileNumber"
  );

  if (!customer) {
    return res.status(400).json({ error: " Sorry No such Customer Exists" });
  }
  const { mobileNumber } = customer;
  try {
    if (!transactionAmount) {
      throw Error("Transaciton Amount is Mandatory");
    }
    const transactionType = transactionCode === 0 ? "recieve" : "given";
    const transaction = await Transaction.create({
      customerId,
      mobileNumber,
      transactionAmount,
      transactionCode,
      transactionType,
    });
    if (transaction) {
      res.status(200).json(transaction);
    } else {
      throw Error("Something Went Wrong");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createTransaction,
  getAllTransactions,
};
