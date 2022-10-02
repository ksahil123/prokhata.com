const userSchema = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ _id: id }, process.env.SECRET, { expiresIn: "3d" });
};

// login user controller
const loginUser = async (req, res) => {
  const { emailId, password } = req.body;
  try {
    const user = await userSchema.login(emailId, password);
    const token = createToken(user._id);
    res.status(200).json({ emailId, token });
    // // if (user) { 
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup user controller
const signupUser = async (req, res) => {
  const { name, emailId, mobileNumber, password } = req.body;
  try {
    const user = await userSchema.signup(emailId, password, name, mobileNumber);
    // create a token here
    const token = createToken(user._id);
    res.status(200).json({ emailId, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signupUser };
