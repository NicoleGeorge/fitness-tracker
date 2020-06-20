const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter workout type"
  },
  value: {
    type: String,
    required: "Enter the exercise"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const workout = mongoose.model("Workout", workoutSchema);

const workout = new Workout ({
  
})

module.exports = workout;
