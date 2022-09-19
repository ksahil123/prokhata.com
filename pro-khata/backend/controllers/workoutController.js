const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");
const { response } = require("express");
// get all workouts
const getWorkouts = async (req, res) => {
  const user_id = req.user._id;
  const workouts = await Workout.find({ user_id }).sort({ createdAt: -1 });
  try {
    res.status(200).json(workouts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// get a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Workout Exists" });
  }
  const workout = await Workout.findById(id);
  //   console.log("work", workout);
  if (!workout) {
    return res.status(400).json({ error: "No such Workout Exists" });
  }
  res.status(200).json(workout);
};

// create new workout

const createWorkout = async (req, res) => {
  const { name, emailId, mobileNumber, password } = req.body;
  // add doc to DB
  try {
    const user_id = req.user._id;
    const workout = await Workout.create({
      name,
      emailId,
      mobileNumber,
      password,
      user_id,
    });
    res.status(200).json({
      result_Json: workout,
      output_Json: { outputCode: 1, errorMessage: "" },
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
//delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Workout Exists" });
  }
  const workout = await Workout.findOneAndDelete({ _id: id });
  if (!workout) {
    return res.status(400).json({ error: "No such Workout Exists" });
  }
  res.status(200).json(workout);
};
// update a workout
const updateWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such Workout Exists" });
    }
    const workout = await Workout.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );
    console.log("haa", workout);
    if (!workout) {
      return res.status(400).json({ error: "No such Workout Exists" });
    }
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
module.exports = {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
};
