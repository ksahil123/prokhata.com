const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const validator = require("validator");
const userSchema = new Schema(
  {
    emailId: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

// user static signup method
userSchema.statics.signup = async function (
  emailId,
  password,
  name,
  mobileNumber
) {
  // validation
  if (!emailId || !password || !name || !mobileNumber) {
    throw Error("Enter All fields");
  }
  if (!validator.isEmail(emailId)) {
    throw Error("Email is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not so strong");
  }
  const isEmailExist = await this.findOne({ emailId });
  const isMobileExist = await this.findOne({ mobileNumber });

  if (isEmailExist && isMobileExist) {
    throw Error("Record for you already Exists.");
  }
  if (isEmailExist) {
    throw Error("Email already Exists.");
  }
  if (isMobileExist) {
    throw Error("Mobile Number already Exists.");
  }
  // Password hashing
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({
    emailId,
    password: hash,
    name,
    mobileNumber,
  });
  return user;
};

// static login method
userSchema.statics.login = async function (emailId, password) {
  if (!emailId || !password) {
    throw Error("Enter All fields");
  }
  const user = await this.findOne({ emailId });

  if (!user) {
    throw Error("Incorrect Email Id");
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect Password");
  }
  return user;
};

module.exports = mongoose.model("User", userSchema);
