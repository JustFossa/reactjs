const express = require("express")
let User = require("../models/user.model")
const router = express.Router()

router.get('/',(req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.post('/add',(req, res) => {
    const user = req.body.username
    const pass = req.body.password
    const newUser = new User({
        username: user,
        password: pass
    })

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error ´: '+ err))
})

router.get('/find/:username',(req, res) => {
    const user = req.params.username
    User.findOne({
        "username": user
    }).then(user => res.json(user)).catch(err => res.status(400).json("Error: " + err))
})

module.exports = router