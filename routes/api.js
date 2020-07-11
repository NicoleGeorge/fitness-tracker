const router = require("express").Router();
const workoutModel = require("../models/workout.js");

// SirPotatoIV code snippets - referenced in ReadMe file

router.get("/api/workouts" , (req, res) => {
    workoutModel.find({})
    .then(workout => {
        res.json(workout);
    })
    // valdiating
    .catch(err => {
        res.staus(400).json(err);
    });

})

router.put("/api/workouts/:id", (req, res) => {
    const workoutId = req.params.id;
    let savedExercises = [];

    // need to retrieve all the saved workout data in the current workout
    workoutModel.find({_id: workoutId})
        .then(dbWorkout => {
            savedExercises = dbWorkout[0].exercises;
            let allExercises = [...savedExercises, req.body]
            console.log(allExercises);
            updateWorkout(allExercises);
        })
        // validating
        .catch(err => {
            console.log({err});
            res.status(400).json(err);
        });

        function updateWorkout(exercises) {
            workoutModel.findByIdAndUpdate(workoutId, {exercises: exercises}, function (err, doc) {
                if (err){
                    console.log(err);
                }
                res.json(doc)
            })
        }
})

// creating a new workout
router.post("/api/workouts", async (req, res) => {
    try {
        const response = await workoutModel.create({type: "workout"})
        res.json(response);
    }
    // validating
    catch(err){
        console.log("couldn't create your workout: ", err);
    }

})

router.get(`/api/workouts/range`, (req, res) => {
    workoutModel.find({})
    .then(workout => {
        res.json(workout);
    })
    // validating
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;