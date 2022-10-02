const Customer = require("../models/customerModel");
const mongoose = require("mongoose");

const getCustomers = async (req, res) => {
  const user_id = req.user._id;
  const customers = await Customer.find({ user_id }).sort({ updatedAt: -1 });
  try {
    res.status(200).json(customers);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
// get a single customer
const getCustomer = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such Customer Exists" });
  }
  const customer = await Customer.findById(id);
  if (!customer) {
    return res.status(400).json({ error: "No such Customer Exists" });
  }
  res.status(200).json(customer);
};

const createCustomer = async (req, res) => {
  const { name, mobileNumber, amount, lastTransaction } = req.body;
  try {
    if (!name) {
      throw Error("Name is Mandatory");
    }
    const isMobileNumberExist = await Customer.findOne({ mobileNumber });
    if (isMobileNumberExist) {
      throw Error("Mobile Number already Exists.");
    }
    const user_id = req.user._id;
    const customer = await Customer.create({
      name,
      mobileNumber,
      amount,
      lastTransaction,
      user_id,
    });
    res.status(200).json(customer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
const deleteCustomer = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "No such Customer Exists" });
    }
    const customer = await Customer.findOneAndDelete({ _id: id });
    if (!customer) {
      return res.status(400).json({ error: "No such Customer Exists" });
    }
    res.status(200).json(customer);
  } catch (Error) {
    res.status(400).json({ error: Error.message });
  }
};
// update a customer
const updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "No such customer Exists" });
    }
    const customer = await Customer.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );
    if (!customer) {
      return res.status(400).json({ error: "No such customer Exists" });
    }
    res.status(200).json(customer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
module.exports = {
  getCustomers,
  getCustomer,
  createCustomer,
  deleteCustomer,
  updateCustomer,
};
