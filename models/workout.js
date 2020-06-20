const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: [
    {
      type: {
        type: String,
        required: "Enter a type"
      },
      name: {
        type: String,
        required: "Enter a name"
      },
      duration: {
        type: Number,
        required: "Enter a duration" 
      },
      weight: {
        type: Number,
        required: "Enter a weight" 
      } ,
      reps: {
        type: Number,
        required: "Enter a reps" 
      },
      sets: {
        type: Number,
        required: "Enter a sets" 
      },
    
    }
  ],
    day: {
    type: Date,
    default: new Date()
  }
});

const workout = mongoose.model("Workout", workoutSchema);

const workout = new Workout ({
  
})

module.exports = workout;
