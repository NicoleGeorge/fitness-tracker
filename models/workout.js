const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: [
    {
      type: {
        type: String,
        required: 'Enter a type of exercise',
      },
      name: {
        type: String,
        required: 'Enter a name of your exercise',
      },
      duration: {
        type: Number,
        required: 'Enter a duration',
      },
      weight: {
        type: Number,
        required: 'Enter a weight',
      },
      reps: {
        type: Number,
        required: 'Enter a reps',
      },
      sets: {
        type: Number,
        required: 'Enter a sets',
      },
    },
  ],
  day: {
    type: Date,
    default: new Date(),
  },
});

// SirPotato code snippet. Link in ReadMe file

workoutSchema.virtual('totalDuration').get(() => {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  });
});
const workout = mongoose.model('Workout', workoutSchema);

module.exports = workout;
