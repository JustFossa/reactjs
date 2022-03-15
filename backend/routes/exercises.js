const router = require("express").Router()
let Exercise = require("../models/exercise")

router.route('/').get((req, res) => {
    Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route("/add").post((req, res) => {
    const newExercise = new Exercise({
        username: req.body.username,
        description: req.body.description,
        email: req.body.email,
        date: Date.now()
    })



    newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error ´: '+ err))
})

router.route("/:id").get((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json("Error: " + err ))
})

router.route("/update/:id").post((req,res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username
            exercise.description = req.body.description
            exercise.email = req.body.email
            exercise.date = Date.now()

            exercise.save()
                .then(() => res.json("Exercise updated"))
                .catch(err => res.status(400).json("Error: " + err))
        })
})

module.exports = router