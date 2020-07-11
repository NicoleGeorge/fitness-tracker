const router = require("express").Router();
const workout = require("../models/workout.js");

// SirPotatoIV code snippets - referenced in ReadMe file

router.get("/api/workouts" , (req, res) => {
    Workouts.find({})
    .then(workout => {
        res.json(workout);
    })
    // valdiating
    .catch(err => {
        res.staus(402).json(err);
    });

})

router.put("/api/workouts/:id", (req, params, res) => {
    const workoutId = params.id;
    let savedExercises = [];

    // need to retrieve all the saved workout data in the current workout
    workout.Workout.find({_id: workoutId})
        .then(dbWorkout => {
            savedExercises = dbWorkout[0].exercises;
            let allExercises = [...savedExercises, body]
            console.log(allExerecises);
            updateWorkout(allExercises);
        })
        // validating
        .catch(err => {
            res.status(402).json(err);
        });

        function updateWorkout(exercises) {
            workout.Workout.findByIdAndUpdate(workoutId, {exercises: exercises}, function (err, doc) {
                if (err){
                    console.log(err);
                }
            })
        }
})

// creating a new workout
router.post("/api/workouts", async (req, res) => {
    try {
        const response = await db.Workout.create({type: "workout"})
        res.json(response);
    }
    // validating
    catch(err){
        console.log("couldn't create your workout: ", err);
    }

})

router.get(`/api/workouts/range`, (req, res) => {
    workout.Workout.find({})
    .then(workout => {
        res.json(workout);
    })
    // validating
    .catch(err => {
        res.status(402).json(err);
    });
});

module.exports = router;